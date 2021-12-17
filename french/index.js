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

// get url parameters
const urlParams = new URLSearchParams(window.location.search);

const englishDropdown = document.querySelector("#english-dropdown");
const englishMeaning = document.querySelector("#english-meaning");
const frenchDropdown = document.querySelector("#french-dropdown");
const frenchMeaning = document.querySelector("#french-meaning");
const checkBox = document.querySelector("#checkbox");

const playthrough = urlParams.get("playthrough");
const playedSounds = [];

var lastSound = null;

function getRandomSound() {
  const randomSoundNum = Math.floor(Math.random() * sounds.length);
  if (lastSound == randomSoundNum || playedSounds.includes(randomSoundNum)) {
    console.log("already played " + randomSoundNum);
    return getRandomSound();
  } else {
    console.log("Got Sound: " + randomSoundNum);
    lastSound = randomSoundNum;
    return sounds[randomSoundNum];
  };
}

// reset checkbox to false
checkBox.checked = false;

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

  if (checkBox.checked) {
    englishDropdown.removeAttribute("open");
    frenchDropdown.removeAttribute("open");
  };

  if (playthrough == "true") {
    playedSounds.push(sound.id);
  };
};

function playAllRedirect() {
  if (playthrough == "true") {
    window.location.href = "./index.html?playthrough=false";
  } else {
    window.location.href = "./index.html?playthrough=true";
  };
}