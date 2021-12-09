const button = document.getElementById('beatButton');
const bpmDiv = document.getElementById('bpm') 

var stop = false;
var firstClick = true;
const clickTimes = []; // number is time since last click

const average = (array) => array.reduce((a, b) => a + b) / array.length;

function click() {
  var timeNow = Date.now();
  if (!firstClick) {
    clickTimes.push(timeNow-lastClicked);
    if (clickTimes.length > 4) {
      clickTimes.shift()
    };
    var averageMS = average(clickTimes);
    var bpm = (60000/averageMS);
    bpmDiv.innerHTML = bpm.toFixed();
  };
  firstClick = false;
  ms = 0;
  console.log(ms);
  lastClicked = timeNow;
};

button.addEventListener("click",function() {
  click()
});