// ask user for number of minutes
// set timer to that number of minutes
// add fullscreen progress bar behind text
// add text to show time remaining

var minutes = 20//prompt("Minutes");

const body = document.querySelector("body");

originalSeconds = minutes * 60;
seconds = minutes * 60;
originalMilliseconds = originalSeconds * 1000;
milliseconds = seconds * 1000;

var barColor = "purple";

console.log({originalSeconds, seconds, originalMilliseconds, milliseconds});

// countdown timer once every second
var countdownInterval = setInterval(function() {
  seconds--;
  if (seconds < 0) {
    clearInterval(countdownInterval);
    return;
  }

  const current = {};

  current.minutes = Math.floor(seconds / 60);
  current.seconds = seconds % 60;

  secondsSinceStart = originalSeconds - seconds;

  if (secondsSinceStart < 90) {
    current.section = "Intro";
  } else if (secondsSinceStart >= 90 && secondsSinceStart < 279.6) {
    current.section = "Subtopic 1 - Milo";
    barColor = "blue";
  } else if (secondsSinceStart >= 279.6 && secondsSinceStart < 549.6) {
    current.section = "Subtopic 2 - Eliot";
    barColor = "green";
  } else if (secondsSinceStart >= 549.6 && secondsSinceStart < 759.6) {
    current.section = "Subtopic 3 - Juliet";
    barColor = "yellow";
  } else if (secondsSinceStart >= 759.6 && secondsSinceStart < 1029.6) {
    current.section = "Subtopic 4 - Eliot";
    barColor = "orange";
  } else if (secondsSinceStart >= 1029.6) {
    current.section = "Note Collection";
    barColor = "red";
  };

  document.querySelector("#timer").innerHTML = `${current.minutes}:${current.seconds} [${current.section}]`;
}, 1000);

// background progress bar - rectangle shrinking from right
var barInterval = setInterval(function() {
  if ((originalMilliseconds - milliseconds) > originalSeconds * 1000) {
    clearInterval(barInterval);
    return;
  };


  milliseconds = milliseconds - 20;
  const progress = document.querySelector("#progress");
  progress.style.width = `${(originalMilliseconds - milliseconds) / originalMilliseconds * 100}%`;
  progress.style.backgroundColor = barColor;
}, 20);
