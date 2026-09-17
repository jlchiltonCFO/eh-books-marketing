import fs from "node:fs/promises";
import path from "node:path";

const root = "/workspace/scratch/9239d52d6a24/eh-books-gtm/dist";
let html = await fs.readFile(path.join(root, "index.html"), "utf8");
for (const name of ["enrollhere-wordmark.png", "enrollhere-mark.png", "enrollhere-mark-white.png", "enrollhere-app-icon.png"]) {
  const data = await fs.readFile(path.join(root, "assets", name));
  html = html.replaceAll(`assets/${name}`, `data:image/png;base64,${data.toString("base64")}`);
}
await fs.writeFile("/workspace/scratch/9239d52d6a24/EH_Books_GTM_Concept_Updated.html", html);
