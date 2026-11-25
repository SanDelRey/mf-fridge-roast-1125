import { mkdirSync, writeFileSync } from "node:fs"
import { join } from "node:path"

const line: string = "My fridge beeps when the door's been open too long, and stays completely silent about the four containers of curry in there forming a government."

if (line.length < 1 || line.length > 200) throw new Error("entry must be 1..200 characters")

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "."
mkdirSync(outDir, { recursive: true })
writeFileSync(join(outDir, "entry.txt"), line, "utf8")
