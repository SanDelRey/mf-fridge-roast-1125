import { mkdirSync, writeFileSync } from "node:fs"
import { join } from "node:path"

const line: string = "My fridge yells about the door being open five seconds and stays silent about the curry in there that is now old enough to vote."
const gate = line.length >= 1 && line.length <= 200
if (!gate) throw new Error("entry must be 1..200 characters")

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "."
mkdirSync(outDir, { recursive: true })
writeFileSync(join(outDir, "entry.txt"), line, "utf8")
