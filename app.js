const tables = {
  battleCries: [
  ["Let chaos reign!", 0],
  ["For the glitter gods!", 0],
  ["This one's for mayhem!", 0],
  ["You just triggered my trap monologue!", 0],
  ["By the beard of my barista!", 0],
  ["May my aim be messy and magnificent!", 0],
  ["For doom! For snacks!", 0],
  ["No refunds!", 0],
  ["Hope you have insurance!", 0],
  ["This one's going on my mixtape!", 0],
  ["I rage... artistically.", 0],
  ["For the honor of poorly drawn maps!", 0],
  ["Scream now, question later!", 0],
  ["By dice and destiny!", 0],
  ["With great power comes great irresponsibility!", 0],
  ["In the name of the utterly avoidable!", 0],
  ["FOR THE MEME!", 0],
  ["Time to fail forward!", 0],
  ["I cast fist!", 0],
  ["This is for last Tuesday’s TPK!", 0],
  ["Let's roll for damage and dignity!", 0],
  ["Who wants a concussion with confetti?", 0],
  ["This one's for the glitter gods!", 0],
  ["I fight for the thrill, the flair, and the follow-through!", 0],
  ["Bring me my lutekelele... it's time.", 0],
  ["My soul is punk, my sword is jazz.", 0],
  ["Try me. I double dare you.", 0],
  ["Who's got backup? I don't need it.", 0],
  ["Oops, was that your spell slot?", 0],
  ["Let chaos reign!", 0],
  ["Say goodbye to the fourth wall!", 0],
  ["I'm not angry. I'm just drawn this way.", 0],
  ["I didn't come here to win--I came here to entertain.", 0],
  ["Now entering: Maximum Mayhem Mode.", 0],
  ["I roll to ruin your vibe.", 0],
  ["Chaos is my co-pilot.", 0],
  ["Messy? Yes. Magical? Also yes.", 0],
  ["Sparkles now, apologies never.", 0],
  ["Time to weaponize whimsy.", 0],
  ["If you liked it, you should've counterspelled it.", 0]
  ],
  wildMagic: [
   ["You swap bodies with the nearest ferret.", 1],
  ["Everything turns polka-dot for 1d4 hours.", 2],
  ["You summon a mariachi band that follows you around.", 3],
  ["Your voice echoes like you're in a cavern.", 1],
  ["You sneeze and cast Fireball centered on yourself.", 3],
  ["You grow a long, silken wizard beard. It grants no power.", 1],
  ["Gravity is now optional for your pants.", 2],
  ["You shout 'BANG!' and a firework goes off… somewhere.", 2],
  ["You glow like a disco ball in combat.", 2],
  ["For the next minute, you must narrate your actions in rhyme.", 2],
  ["Your next spell is accompanied by a kazoo orchestra.", 3],
  ["All beverages within 30 feet turn into soda.", 1],
  ["You briefly become a cartoon version of yourself.", 2],
  ["You become magnetic, but only to forks and spoons.", 2],
  ["Everyone sees your childhood imaginary friend.", 3],
  ["Roll again. But louder.", 1],
  ["You’re stuck singing everything you say for the next 10 minutes.", 3],
  ["Your shadow detaches and starts mimicking others.", 2],
  ["You get a theme song for 1d4 rounds. It’s loud.", 3],
  ["You smell like victory. And bubblegum.", 1]
  ],
 disasterSeverity: [
  ["Mildly inconvenient: A shoe flies off.", 1],
  ["Someone’s hat catches fire, but it’s fine.", 1],
  ["You trip, but make it look intentional.", 1],
  ["Awkward silence. And then a loud crash.", 1],
  ["Moderate disruption: A table flips.", 2],
  ["Spilled drinks everywhere—someone screams.", 2],
  ["Something explodes. No one knows why.", 2],
  ["A rival shows up mid-battle.", 2],
  ["You accidentally summon a goat. It’s angry.", 2],
  ["Chaotic mess: Your loot is now cursed.", 2],
  ["A storm begins inside the tavern.", 2],
  ["All lights dim. A disembodied laugh echoes.", 2],
  ["A wall collapses, revealing… another wall.", 1],
  ["Someone starts a slow clap. No one joins in.", 1],
  ["You turn invisible, but only from yourself.", 2],
  ["Total catastrophe: An elder god appears. Hungry.", 3],
  ["Reality wavers. Roll to resist becoming a musical.", 3],
  ["You fall through the floor—into another campaign setting.", 3],
  ["The villain monologues. You’re in the splash zone.", 3],
  ["You win initiative but forget what you were doing.", 2]
],
  introLines: [
   ["I'm the wind that blows your spellbook away.", 0],
  ["I'm the squeaky hinge in your stealth roll.", 0],
  ["I'm the glitter in your potion.", 0],
  ["I'm the shadow behind the DM screen.", 0],
  ["I'm the natural one in your final attack.", 0],
  ["I'm the duck you didn't see coming.", 0],
  ["I'm the wild surge in your bedtime story.", 0],
  ["I'm the mimicked treasure chest of fate.", 0],
  ["I'm the table flip before initiative.", 0],
  ["I'm the potion labeled 'Trust Me.'", 0],
  ["I'm the forest critter with a death wish.", 0],
  ["I'm the reason your torch went out.", 0],
  ["I'm the riddle with no answer and no reward.", 0],
  ["I'm the wand set to explode.", 0],
  ["I'm the third failed perception check.", 0],
  ["I'm the fart that echoed in the silence spell.", 0],
  ["I'm the random encounter at 2AM.", 0],
  ["I'm the cursed loot you forgot to identify.", 0],
  ["I'm the trap disguised as a healing fountain.", 0],
  ["I'm the bard your party told you not to worry about.", 0],
  ["I'm a slippery floor in a tavern brawl.", 0],
  ["I'm the wind that blows your skirt up mid-duel.", 0],
  ["I'm the torch that lights the wrong end of the fuse.", 0],
  ["I'm the reason your d20 betrayed you.", 0],
  ["I'm the glitter in your healing potion.", 0],
  ["I'm the trap labeled 'Not a trap.'", 0],
  ["I'm the song that gets stuck in your head mid-spellcast.", 0],
  ["I'm the reason your backpack is heavier.", 0],
  ["I'm the pun you regret laughing at.", 0],
  ["I'm the fake mustache on your wanted poster.", 0],
  ["I'm the owlbear in your rearview mirror.", 0],
  ["I'm the lockpick that breaks at the worst time.", 0],
  ["I'm the potion labeled 'Maybe.'", 0],
  ["I'm the thunderwave at a wedding.", 0],
  ["I'm the bard your DM warned you about.", 0],
  ["I'm the wink before the wild magic surge.", 0],
  ["I'm the scroll with mystery stains.", 0],
  ["I'm the feather in your chaos cap.", 0],
  ["I'm the echo when you say 'Hello?' in a dungeon.", 0],
  ["I'm the third wish you didn\u2019t think through.", 0],
  ["I'm the unstable illusion that still fooled you.", 0],
  ["I'm the mirror that winks back.", 0],
  ["I'm the dice that never land square.", 0],
  ["I'm the sidekick who takes center stage.", 0],
  ["I'm the wild surge in your stable plan.", 0],
  ["I'm the charisma check that ruins diplomacy.", 0],
  ["I'm the banana peel in the boss fight.", 0],
  ["I'm the haunting refrain of last session's joke.", 0],
  ["I'm the confetti cannon in the stealth mission.", 0],
  ["I'm the nat 1 on your concentration check.", 0]
]
};


let score = 0;
let lastResults = {};
let history = [];

function rollTable() {
  const select = document.getElementById("table-select").value;
  const results = tables[select];
  let result;
  let attempts = 0;
  let text = "";
  let scoreValue = 0;

  if (select === "disasterSeverity" || "wildMagic") {
    do {
      result = results[Math.floor(Math.random() * results.length)];
      text = result[0];
      scoreValue = result[1];
      attempts++;
    } while (text === lastResults[select] && attempts < 10);

    lastResults[select] = text;
    document.getElementById("result").textContent = text;
    updateScore(scoreValue);
    logHistory("Rolled from " + select, text);
  } else {
    do {
      result = results[Math.floor(Math.random() * results.length)];
      attempts++;
    } while (result === lastResults[select] && attempts < 10);

    lastResults[select] = result;
    document.getElementById("result").textContent = result;
    logHistory("Rolled from " + select, result);
  }
}

function updateScore(delta) {
  score += delta;
  document.getElementById("score").textContent = score;
  logHistory("Score " + (delta > 0 ? "increased" : "decreased"), score);
  updateMayhemMeter(score);
}

function updateMayhemMeter(score) {
  const fill = document.getElementById("chaos-meter-fill");
  const label = document.getElementById("chaos-meter-label");

  const cappedScore = Math.min(Math.max(score, 0), 100);
  fill.style.width = Math.min(cappedScore, 100) + "%";

  if (score < 10) {
    fill.style.background = "limegreen";
    label.textContent = "Chill";
  } else if (score < 30) {
    fill.style.background = "gold";
    label.textContent = "Chaotic";
  } else {
    fill.style.background = "crimson";
    label.textContent = "Total Mayhem";
  }
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
