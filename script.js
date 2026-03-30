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

