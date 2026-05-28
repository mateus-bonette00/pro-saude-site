import { siteConfig } from "@/data/site"

export type StoreStatus = {
  isOpen: boolean
  label: string
  detail: string
  todayHours: string
}

type ScheduleRule = {
  days: number[]
  open?: string
  close?: string
  closed?: boolean
}

const WEEKDAY_TO_INDEX: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
}

const DAY_NAMES = [
  "domingo",
  "segunda-feira",
  "terça-feira",
  "quarta-feira",
  "quinta-feira",
  "sexta-feira",
  "sábado",
]

const SCHEDULE: ScheduleRule[] = [
  { days: [1, 2, 3, 4, 5], open: "07:00", close: "18:00" },
  { days: [6], open: "08:00", close: "12:00" },
  { days: [0], closed: true },
]

function parseTimeToMinutes(time: string) {
  const [hours, minutes] = time.split(":").map(Number)
  return hours * 60 + minutes
}

function getSaoPauloDateParts(date: Date) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: siteConfig.storeTimezone,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })

  const parts = formatter.formatToParts(date)
  const weekday = parts.find((part) => part.type === "weekday")?.value ?? "Mon"
  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? "0")
  const minute = Number(parts.find((part) => part.type === "minute")?.value ?? "0")

  return {
    dayIndex: WEEKDAY_TO_INDEX[weekday] ?? 1,
    minutes: hour * 60 + minute,
  }
}

function getRuleForDay(dayIndex: number) {
  return SCHEDULE.find((rule) => rule.days.includes(dayIndex))
}

function formatTimeBr(time: string) {
  const [hoursPart, minutesPart = "0"] = time.split(":")
  const hours = Number.parseInt(hoursPart, 10)
  const minutes = Number.parseInt(minutesPart, 10)

  if (Number.isNaN(hours)) return time

  if (minutes === 0) {
    return `${hours}h`
  }

  return `${hours}h${String(minutes).padStart(2, "0")}`
}

function formatHoursLabel(rule: ScheduleRule) {
  if (rule.closed || !rule.open || !rule.close) {
    return "Fechado"
  }

  return `${formatTimeBr(rule.open)} às ${formatTimeBr(rule.close)}`
}

function getTodayHours(dayIndex: number) {
  const rule = getRuleForDay(dayIndex)
  if (!rule) return "Consulte horários"

  if (rule.closed) return "Fechado hoje"

  return formatHoursLabel(rule)
}

function findNextOpenMessage(fromDate: Date) {
  for (let offset = 1; offset <= 7; offset += 1) {
    const candidate = new Date(fromDate.getTime() + offset * 24 * 60 * 60 * 1000)
    const { dayIndex } = getSaoPauloDateParts(candidate)
    const rule = getRuleForDay(dayIndex)

    if (!rule || rule.closed || !rule.open) continue

    const dayLabel = offset === 1 ? "amanhã" : DAY_NAMES[dayIndex]
    return `Abre ${dayLabel} às ${formatTimeBr(rule.open)}`
  }

  return siteConfig.openingHours
}

export function getStoreStatus(referenceDate = new Date()): StoreStatus {
  const { dayIndex, minutes } = getSaoPauloDateParts(referenceDate)
  const rule = getRuleForDay(dayIndex)
  const todayHours = getTodayHours(dayIndex)

  if (!rule || rule.closed || !rule.open || !rule.close) {
    return {
      isOpen: false,
      label: "Fechada agora",
      detail: findNextOpenMessage(referenceDate),
      todayHours,
    }
  }

  const openMinutes = parseTimeToMinutes(rule.open)
  const closeMinutes = parseTimeToMinutes(rule.close)
  const isOpen = minutes >= openMinutes && minutes < closeMinutes

  if (isOpen) {
    return {
      isOpen: true,
      label: "Aberta agora",
      detail: `Hoje até às ${formatTimeBr(rule.close)} · Itajubá-MG`,
      todayHours,
    }
  }

  if (minutes < openMinutes) {
    return {
      isOpen: false,
      label: "Fechada agora",
      detail: `Abre hoje às ${formatTimeBr(rule.open)}`,
      todayHours,
    }
  }

  return {
    isOpen: false,
    label: "Fechada agora",
    detail: findNextOpenMessage(referenceDate),
    todayHours,
  }
}
