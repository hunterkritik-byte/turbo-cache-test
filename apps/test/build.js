const fs = require("fs");

fs.mkdirSync("dist", { recursive: true });

const value = process.env.TEST_SECRET || "UNSET";

fs.writeFileSync(
  "dist/output.txt",
  `TEST_SECRET=${value}\n`
);

console.log(`built with TEST_SECRET=${value}`);
