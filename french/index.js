const sounds = [
  {
    id: 0,
    mp3: "./sounds/1.mp3",
    french: "Comment tu vas ajourd'hui?",    
    english: "How are you today?"
  },
  {
    id: 1,
    mp3: "./sounds/2.mp3",
    french: "Qu'est-ce que tu as fait hier soir?",
    english: "What did you do last night?"
  },
  {
    id: 2,
    mp3: "./sounds/3.mp3",
    french: "Quelle ville aimes-tu visiter et pourquoi?",
    english: "Which city do you like to visit and why?"
  },
  {
    id: 3,
    mp3: "./sounds/4.mp3",
    french: "Quelle est ta sujet préférée à l'école et pourquoi?",
    english: "What is your favorite subject at school and why?"
  },
  {
    id: 4,
    mp3: "./sounds/5.mp3",
    french: "Comment est-ce que tu viens à l'école en général?",
    english: "How do you come to school in general?"
  },
  {
    id: 5,
    mp3: "./sounds/6.mp3",
    french: "Quel âge avais-tu quand tu as appris à lire?",
    english: "How old were you when you learned to read?"
  },
  {
    id: 6,
    mp3: "./sounds/7.mp3",
    french: "Quel temps faisait-il hier?",
    english: "What was the weather like yesterday?",
  },
  {
    id: 7,
    mp3: "./sounds/8.mp3",
    french: "Quand es-tu allé à San Francisco?",
    english: "When did you go to San Francisco?",
  },
  {
    id: 8,
    mp3: "./sounds/9.mp3",
    french: "As-tu jamais visité un pays étranger? Lequel?",
    english: "Have you ever visited a foreign country? Which one?"
  },
  {
    id: 9,
    mp3: "./sounds/10.mp3",
    french: "Qu'est-ce que tu aimes faire quand tu as du temps libre?",
    english: "What do you like to do when you have free time?"
  }
]

// sounds created with https://soundoftext.com/

// get url parameters
const urlParams = new URLSearchParams(window.location.search);

const englishDropdown = document.querySelector("#english-dropdown");
const englishMeaning = document.querySelector("#english-meaning");
const frenchDropdown = document.querySelector("#french-dropdown");
const frenchMeaning = document.querySelector("#french-meaning");
const settingsDropdown = document.querySelector("#settings-dropdown");
const autoCloseCheckBox = document.querySelector("#autoClose");
const playThroughCheckBox = document.querySelector("#playThroughAll");

const uncheckedSounds = JSON.parse(localStorage.getItem("uncheckedSounds")) || [];

// add all sounds to the settings dropdown with a checkbox, and a label
sounds.forEach(sound => {
  const p = document.createElement("p");
  const checkbox = document.createElement("input");
  const label = document.createElement("label");
  checkbox.type = "checkbox";
  checkbox.id = `sound${sound.id}`;
  checkbox.checked = !uncheckedSounds.includes(sound.id);
  checkbox.addEventListener("change", () => {
    if (!checkbox.checked) {
      uncheckedSounds.push(sound.id);
    } else {
      uncheckedSounds.splice(uncheckedSounds.indexOf(sound.id), 1);
    }
    localStorage.setItem("uncheckedSounds", JSON.stringify(uncheckedSounds));
  });
  label.setAttribute("for", `sound${sound.id}`);
  label.textContent = sound.french + " - " + sound.english;
  p.appendChild(checkbox);
  // whitespace
  p.appendChild(document.createTextNode(" "));
  p.appendChild(label);
  settingsDropdown.appendChild(p);
});

const playedSounds = [];

var lastSound = null;

function getRandomSound() {
  const randomSoundNum = Math.floor(Math.random() * sounds.length);
  const soundChecked = document.querySelector(`#sound${randomSoundNum}`);

  if (lastSound == randomSoundNum || playedSounds.includes(randomSoundNum)) {
    console.log("already played " + randomSoundNum);
    return getRandomSound();
  } else if (!soundChecked.checked) {
    console.log(randomSoundNum + " is not checked");
    return getRandomSound();
  } else {
    console.log("Got Sound: " + randomSoundNum);
    lastSound = randomSoundNum;
    return sounds[randomSoundNum];
  };
};

// reset checkbox to false
autoCloseCheckBox.checked = false;

function play() {
  if (playedSounds.length == sounds.length) {
    alert("You have finished all the sounds. Restarting with a new random order.");
    playedSounds.length = 0;
  };
  // Get a random sound
  const sound = getRandomSound();

  console.log(sound)
  // Create a new Audio object
  let audio = new Audio(sound.mp3);
  // Play the audio
  audio.play();
  // Update the divs with the meaning of the sound, with the appropriate "summary" class
  englishMeaning.textContent = sound.english;
  frenchMeaning.textContent = sound.french;

  if (autoCloseCheckBox.checked) {
    englishDropdown.removeAttribute("open");
    frenchDropdown.removeAttribute("open");
  };

  if (playThroughCheckBox.checked) {
    playedSounds.push(sound.id);
  };
};

// reload page on playThroughCheckBox change
playThroughCheckBox.addEventListener("change", function() {
  window.location.reload();
}); 