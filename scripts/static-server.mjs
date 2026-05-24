import { createReadStream, existsSync, statSync } from "node:fs"
import { stat } from "node:fs/promises"
import { createServer } from "node:http"
import { extname, join, normalize } from "node:path"

const port = Number(process.argv[2] ?? 3000)
const root = join(process.cwd(), "out")

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
}

function resolveFile(url = "/") {
  const pathname = decodeURIComponent(url.split("?")[0] ?? "/")
  const safePath = normalize(pathname).replace(/^(\.\.[/\\])+/, "")
  const directPath = join(root, safePath)

  if (existsSync(directPath) && statSync(directPath).isFile() && !safePath.endsWith("/")) {
    return directPath
  }

  if (safePath === "/" || safePath.endsWith("/")) {
    return join(root, safePath, "index.html")
  }

  const htmlPath = `${directPath}.html`
  if (existsSync(htmlPath)) {
    return htmlPath
  }

  return join(root, "404.html")
}

const server = createServer(async (request, response) => {
  const filePath = resolveFile(request.url)
  const fileStat = await stat(filePath).catch(() => null)

  if (!fileStat?.isFile()) {
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" })
    response.end("Arquivo não encontrado")
    return
  }

  response.writeHead(filePath.endsWith("404.html") ? 404 : 200, {
    "content-length": fileStat.size,
    "content-type": contentTypes[extname(filePath)] ?? "application/octet-stream",
  })

  createReadStream(filePath).pipe(response)
})

server.listen(port, () => {
  console.log(`Prévia estática em http://localhost:${port}`)
})
