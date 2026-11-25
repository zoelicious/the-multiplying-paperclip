import fs from "node:fs";
import path from "node:path";

const TEXT = "The paperclip's entire career is holding two pages together. It has never held two pages together. It lives in the drawer, multiplying, waiting for a stapler to do its job.";

if (TEXT.length < 1 || TEXT.length > 200) {
  throw new Error("TEXT must be 1-200 characters, got " + TEXT.length);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

// Save the single-line review to entry.txt in the output directory.
try {
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "entry.txt"), TEXT);
} catch (err) {
  console.error(err);
  process.exit(1);
}
