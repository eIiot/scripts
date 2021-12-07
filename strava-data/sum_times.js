const fs = require('fs');

fs.readFile('./output/activities.json', 'utf8', (err, data) => {
  if (err) throw err;
  let activities = JSON.parse(data);
  let sum = 0;
  for (let i = 0; i < activities.length; i++) {
    sum += activities[i].elapsed_time;
  }
  console.log(sum);
});