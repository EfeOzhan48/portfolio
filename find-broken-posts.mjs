import fs from "fs";
import path from "path";

function scanDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      scanDir(fullPath);
    } else if (file.endsWith(".md") || file.endsWith(".mdx")) {
      const content = fs.readFileSync(fullPath, "utf-8");
      if (!content.startsWith("---") || !content.includes("title:")) {
        console.log("❌ Eksik frontmatter/title bulunan dosya:", fullPath);
      }
    }
  }
}

console.log("Markdown dosyaları taranıyor...");
scanDir("./src");
console.log("Tarama tamamlandı.");