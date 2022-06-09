import fs from "fs";

const sizes = JSON.parse(fs.readFileSync("sizes.json", "utf8"));

const csv =
  "id,size\n" +
  Object.keys(sizes)
    .map((id) => `${id},${sizes[id]}`)
    .join("\n");

console.log(csv);
fs.writeFileSync("sizes.csv", csv);
