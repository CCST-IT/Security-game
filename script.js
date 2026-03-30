let score = 0;
let streak = 0;
let highscore = localStorage.getItem("highscore") || 0;
// Score + streak + high score
let score = 0;
let streak = 0;
let highscore = localStorage.getItem("highscore") || 0;

document.getElementById("highscore").textContent = highscore;

// Current acronym object
let current;

// Pick a random acronym
function pickRandom() {
  current = ACRONYMS[Math.floor(Math.random() * ACRONYMS.length)];
  document.getElementById("acronym-display").textContent = current.acronym;
  document.getElementById("user-input").value = "";
  document.getElementById("result").textContent = "";
}

// UPDATED checkAnswer() goes HERE
function checkAnswer() {
  const user = document.getElementById("user-input").value.trim().toLowerCase();
  const correct = current.expansion.join(" ").toLowerCase();

  if (user === correct) {
    score++;
    streak++;

    document.getElementById("score").textContent = score;
    document.getElementById("streak").textContent = streak;

    if (score > highscore) {
      highscore = score;
      localStorage.setItem("highscore", highscore);
      document.getElementById("highscore").textContent = highscore;
    }

    document.getElementById("result").textContent = "Correct!";
    document.getElementById("result").style.color = "#22c55e";

  } else {
    streak = 0;
    document.getElementById("streak").textContent = streak;

    document.getElementById("result").textContent = "Incorrect — " + correct;
    document.getElementById("result").style.color = "#ef4444";
  }

  setTimeout(pickRandom, 1200);
}

// Start the game
pickRandom();

document.getElementById("highscore").textContent = highscore;

const themes = [
  "style.css",          // default dark
  "style-neon.css",     // neon
  "style-rainbow.css"   // rainbow
];

let currentTheme = 0;

document.getElementById("theme-btn").addEventListener("click", () => {
  currentTheme = (currentTheme + 1) % themes.length;
  document.getElementById("theme-link").href = themes[currentTheme];
});

