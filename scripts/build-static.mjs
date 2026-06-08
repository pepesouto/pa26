import { cp, mkdir, rm } from "node:fs/promises";

const outputDir = "dist";
const files = ["index.html", "artistas.html", "styles.css"];

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });

for (const file of files) {
  await cp(file, `${outputDir}/${file}`);
}

await cp("assets", `${outputDir}/assets`, { recursive: true });

console.log(`Built static site in ${outputDir}/`);
