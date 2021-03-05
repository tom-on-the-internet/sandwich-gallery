const synth = window.speechSynthesis;

const sandwichThought = [
  "That sandwich looks so yummy",
  "What a yummy sandwich",
  "Munch munch munch",
  "Get in my belly you yummy sandwich",
  "Uh, yes please!",
  "Christ! Now that's a sandwich",
  "Sandwich time!!",
  "Look at that thing! Wowza!",
];

fetch(
  "https://pixabay.com/api/?key=1104590-c66d2c68dbb582ba6e0d74373&q=sandwich&image_type=photo&per_page=200&category=food"
).then((res) => {
  res.json().then((res) => {
    const hits = res.hits;
    const hitsIndex = Math.floor(Math.random() * hits.length);
    const hit = hits[hitsIndex];
    const imageURL = hit.largeImageURL;

    const $sandwich = document.getElementById("sandwich");
    $sandwich.addEventListener("load", () => {
      console.log("loaded");
      const thoughtIndex = Math.floor(Math.random() * sandwichThought.length);
      const saying = sandwichThought[thoughtIndex];
      const utterance = new SpeechSynthesisUtterance(saying);
      utterance.rate = 0.7;
      synth.speak(utterance);
    });
    $sandwich.src = imageURL;
  });
});
