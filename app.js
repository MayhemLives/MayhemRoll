const tables = {
  battleCries: ["Let chaos reign!", "For the glitter gods!", "This one's for mayhem!"],
  wildMagic: ["You glow like a disco ball.", "Your nose grows 3 inches.", "You summon a goat."],
  disasterSeverity: ["You flip a table.", "You accidentally explode.", "The floor collapses."],
  introLines: ["I'm the wind that blows your spellbook away.", "I'm the squeaky hinge in your stealth roll.", "I'm the glitter in your potion."]
};

let score = 0;
let lastResults = {};
let history = [];

function rollTable() {
  const select = document.getElementById("table-select").value;
  const results = tables[select];
  let result;
  let attempts = 0;
  do {
    result = results[Math.floor(Math.random() * results.length)];
    attempts++;
  } while (result === lastResults[select] && attempts < 10);

  lastResults[select] = result;
  document.getElementById("result").textContent = result;
  logHistory("Rolled from " + select, result);
}

function updateScore(delta) {
  score += delta;
  document.getElementById("score").textContent = score;
  logHistory("Score " + (delta > 0 ? "increased" : "decreased"), score);
}

function logHistory(action, value) {
  const timestamp = new Date().toLocaleTimeString();
  const line = `[${timestamp}] ${action}: ${value}`;
  history.unshift(line);
  document.getElementById("history-log").innerHTML = `<strong>Session History:</strong>
    <textarea id="history-text" readonly style="width: 100%; height: 100px; margin-top: 1rem; background: #222; color: #ccc; border: 1px solid #444; font-family: monospace; font-size: 0.8rem;">${history.join("\n")}</textarea>`;
}

function clearHistory() {
  history = [];
  document.getElementById("history-log").innerHTML = "<strong>Session History:</strong><textarea id='history-text' readonly style='width: 100%; height: 100px; margin-top: 1rem; background: #222; color: #ccc; border: 1px solid #444; font-family: monospace; font-size: 0.8rem;'></textarea>";
}

function exportHistory() {
  const blob = new Blob([history.join("\n")], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = "mayhem_history.txt";
  link.href = url;
  link.click();
  URL.revokeObjectURL(url);
}

function copyResult() {
  const resultText = document.getElementById("result").innerText;
  if (!resultText) return;
  const temp = document.createElement("textarea");
  temp.value = resultText;
  document.body.appendChild(temp);
  temp.select();
  try {
    document.execCommand("copy");
    const feedback = document.getElementById("copy-feedback");
    if (feedback) {
      feedback.style.display = "inline";
      setTimeout(() => feedback.style.display = "none", 1500);
    }
  } catch (err) {
    alert("Copy failed. Please copy manually.");
  }
  document.body.removeChild(temp);
}

function saveFavorite() {
  const result = document.getElementById("result").textContent;
  if (!result) return;
  let favorites = JSON.parse(localStorage.getItem("mayhemFavorites") || "[]");
  if (!favorites.includes(result)) {
    favorites.push(result);
    localStorage.setItem("mayhemFavorites", JSON.stringify(favorites));
    alert("Favorite saved!");
    logHistory("Favorite saved", result);
  } else {
    alert("Already in favorites.");
  }
}

function showFavorites() {
  const favorites = JSON.parse(localStorage.getItem("mayhemFavorites") || "[]");
  alert("Favorites:\n\n" + favorites.join("\n"));
}
