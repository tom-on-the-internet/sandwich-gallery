const synth = window.speechSynthesis;

const sandwichThought = [
  "That sandwich looks so yummy",
  "What a yummy sandwich",
  "Munch munch munch",
  "Get in my belly you yummy sandwich",
  "Uh, yes please!",
  "Christ! Now that's a sandwich",
];

console.log("hit");
const index = Math.floor(Math.random() * sandwichThought.length);
const saying = sandwichThought[index];
const utterance = new SpeechSynthesisUtterance(saying);
synth.speak(utterance);
