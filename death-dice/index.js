// Simulation

const fs = require('fs');

let death = 0;

let runs = Infinity;

let desmos = '';

for (let run = 1; run != runs; run++) {
  for (let dieSides = 2; dieSides < 1000000; dieSides += 2) {
    // pick a random number between 2 and die
    const dieOne = Math.floor(Math.random() * dieSides) + 1;
    const dieTwo = Math.floor(Math.random() * dieSides) + 1;

    if (dieOne + dieTwo == 2) {
      death++;
      break;
    }
  }

  console.clear();

  // create csv with runNumber, percentage
  if (run % 10 == 0) {
    desmos += `${run}\t${(run-death)/run}\n`;
    fs.writeFileSync('data.desmos', desmos);
  };
    
  process.stdout.write(`${run-death} immortal of ${run} runs
Currently, ${(((run-death) / run) * 100).toFixed(10)}% of people are immortal.`);
}