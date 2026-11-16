// Server statis untuk presentasi Aljabar Linear Pertemuan 6.
// Menyajikan isi folder ./public. Siap dijalankan lokal maupun di Deno Deploy.
import { serveDir } from "@std/http/file-server";
import { fromFileUrl } from "@std/path";

const publicDir = fromFileUrl(new URL("./public", import.meta.url));
const port = Number(Deno.env.get("PORT") ?? 8000);

Deno.serve({ port }, async (request) => {
  const file = await serveDir(request, { fsRoot: publicDir, quiet: true });
  if (file.status !== 404) return file;

  // Alamat yang tidak dikenal tetap dikembalikan ke halaman utama.
  const indexUrl = new URL("/index.html", request.url);
  return await serveDir(new Request(indexUrl, request), { fsRoot: publicDir, quiet: true });
});
