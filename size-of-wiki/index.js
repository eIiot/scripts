import fetch from "node-fetch";
import fs from "fs";

const sizes = {};

const timer = (ms) => new Promise((res) => setTimeout(res, ms));

for (let i = 0; i < 1000; i++) {
  console.log("Fetching", i);
  const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&titles=${i}%20(number)&prop=revisions&rvprop=size`;
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      const size =
        json.query.pages[Object.keys(json.query.pages)[0]].revisions[0].size;
      sizes[i] = size;
      fs.writeFileSync("sizes.json", JSON.stringify(sizes));
      console.log("Wrote size", i, size);
    })
    .catch((err) => {
      console.log("Page does not exist", err);
    });
  await timer(100);
}
