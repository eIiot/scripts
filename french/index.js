const sounds = [
  {
    id: 1,
    mp3: "./sounds/1.mp3",
    french: "Comment tu vas ajourd'hui?",    
    english: "How are you today?"
  },
  {
    id: 2,
    mp3: "./sounds/2.mp3",
    french: "Qu'est-ce que tu as fait hier soir?",
    english: "What did you do last night?"
  },
  {
    id: 3,
    mp3: "./sounds/3.mp3",
    french: "Quelle ville aimes-tu visiter et pourquoi?",
    english: "Which city do you like to visit and why?"
  },
  {
    id: 4,
    mp3: "./sounds/4.mp3",
    french: "Quelle est ta sujet préférée à l'école et pourquoi?",
    english: "What is your favorite subject at school and why?"
  },
  {
    id: 5,
    mp3: "./sounds/5.mp3",
    french: "Comment est-ce que tu viens à l'école en général?",
    english: "How do you come to school in general?"
  },
  {
    id: 6,
    mp3: "./sounds/6.mp3",
    french: "Quel âge avais-tu quand tu as appris à lire?",
    english: "How old were you when you learned to read?"
  },
  {
    id: 7,
    mp3: "./sounds/7.mp3",
    french: "Quel temps faisait-il hier?",
    english: "What was the weather like yesterday?",
  },
  {
    id: 8,
    mp3: "./sounds/8.mp3",
    french: "Quand es-tu allé à San Francisco?",
    english: "When did you go to San Francisco?",
  },
  {
    id: 9,
    mp3: "./sounds/9.mp3",
    french: "As-tu jamais visité un pays étranger? Lequel?",
    english: "Have you ever visited a foreign country? Which one?"
  },
  {
    id: 10,
    mp3: "./sounds/10.mp3",
    french: "Qu'est-ce que tu aimes faire quand tu as du temps libre?",
    english: "What do you like to do when you have free time?"
  }
]

const englishDropdown = document.querySelector("#english-dropdown");
const englishMeaning = document.querySelector("#english-meaning");
const frenchDropdown = document.querySelector("#french-dropdown");
const frenchMeaning = document.querySelector("#french-meaning");
const checkBox = document.querySelector("#checkbox");

// reset checkbox to false
checkBox.checked = false;

function play() {
  // Get a random number between 0 and the length of the sounds array
  const randomNumber = Math.floor(Math.random() * sounds.length);
  // Get the sound object from the sounds array
  const sound = sounds[randomNumber];
  // Create a new Audio object
  let audio = new Audio(sound.mp3);
  // Play the audio
  audio.play();
  // Update the divs with the meaning of the sound, with the appropriate "summary" class
  englishMeaning.textContent = sound.french;
  frenchMeaning.textContent = sound.english;

  if (checkBox.checked) {
    englishDropdown.removeAttribute("open");
    frenchDropdown.removeAttribute("open");
  };
};