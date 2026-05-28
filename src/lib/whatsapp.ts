export function createWhatsAppUrl(phone: string, message: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

export function createItemInquiryMessage(itemTitle: string) {
  return `Olá, gostaria de saber sobre ${itemTitle.trim()}`
}
