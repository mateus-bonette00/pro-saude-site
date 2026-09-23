export function versionedAsset(path: string) {
  const stamp = process.env.NEXT_PUBLIC_BUILD_STAMP ?? "1"
  const base = path.startsWith("/") ? path : `/${path}`
  return `${base}?v=${stamp}`
}
