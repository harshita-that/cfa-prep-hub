// =========================================================
// Study tracker: DATA + PAGE LOGIC
// ---------------------------------------------------------
// Saves which topics you've ticked in localStorage — a small
// storage box inside YOUR browser. It stays after refreshing,
// but doesn't follow you to another device or browser.
// =========================================================

// ---------- The topic data ----------
// Weights are CFA Institute's published ranges for 2026 Level 1 exams.
// (CFA Institute changes them for 2027 exams — check their website.)
// "mid" is the middle of the range, used for the weighted progress bar.
const topics = [
  { name: "Ethical and Professional Standards", weight: "15–20%", mid: 17.5 },
  { name: "Quantitative Methods",               weight: "6–9%",   mid: 7.5 },
  { name: "Economics",                          weight: "6–9%",   mid: 7.5 },
  { name: "Financial Statement Analysis",       weight: "11–14%", mid: 12.5 },
  { name: "Corporate Issuers",                  weight: "6–9%",   mid: 7.5 },
  { name: "Equity Investments",                 weight: "11–14%", mid: 12.5 },
  { name: "Fixed Income",                       weight: "11–14%", mid: 12.5 },
  { name: "Derivatives",                        weight: "5–8%",   mid: 6.5 },
  { name: "Alternative Investments",            weight: "7–10%",  mid: 8.5 },
  { name: "Portfolio Management",               weight: "8–12%",  mid: 10 }
];

// The name of our "drawer" in localStorage
const STORAGE_KEY = "cfaPrepHub.trackerProgress";


// ---------- Saving and loading ----------

// Load the list of ticked topic names. Returns [] if nothing saved yet.
function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    // localStorage can be blocked (e.g. some private browsing modes)
    return [];
  }
}

// Save the list of ticked topic names
function saveProgress(doneTopics) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(doneTopics));
  } catch (error) {
    // If saving fails, the tracker still works for this visit
  }
}


// ---------- Grab the HTML elements we need ----------
const topicList = document.getElementById("topic-list");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const weightedBar = document.getElementById("weighted-bar");
const weightedText = document.getElementById("weighted-text");
const resetButton = document.getElementById("reset-btn");


// ---------- Draw the checklist ----------
function renderTopics() {
  const doneTopics = loadProgress();
  topicList.innerHTML = "";

  topics.forEach(function (topic) {
    // Build: <li><label><input type="checkbox"> Name <span>weight</span></label></li>
    const item = document.createElement("li");
    const label = document.createElement("label");
    label.className = "topic-row";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = doneTopics.includes(topic.name);
    checkbox.addEventListener("change", function () {
      toggleTopic(topic.name, checkbox.checked);
    });

    const nameSpan = document.createElement("span");
    nameSpan.className = "topic-name";
    nameSpan.textContent = topic.name;

    const weightSpan = document.createElement("span");
    weightSpan.className = "topic-weight";
    weightSpan.textContent = topic.weight;

    label.appendChild(checkbox);
    label.appendChild(nameSpan);
    label.appendChild(weightSpan);
    item.appendChild(label);
    topicList.appendChild(item);
  });

  updateProgress();
}


// ---------- When a box is ticked or unticked ----------
function toggleTopic(topicName, isDone) {
  let doneTopics = loadProgress();

  if (isDone) {
    doneTopics.push(topicName);
  } else {
    // Keep every topic EXCEPT the one being unticked
    doneTopics = doneTopics.filter(function (name) {
      return name !== topicName;
    });
  }

  saveProgress(doneTopics);
  updateProgress();
}


// ---------- Update both progress bars ----------
function updateProgress() {
  const doneTopics = loadProgress();

  // 1) Simple progress: topics done out of 10
  const doneCount = topics.filter(function (t) {
    return doneTopics.includes(t.name);
  }).length;
  const simplePercent = Math.round((doneCount / topics.length) * 100);

  progressBar.style.width = simplePercent + "%";
  progressText.textContent = doneCount + " of " + topics.length + " topics (" + simplePercent + "%)";

  // 2) Weighted progress: heavier exam topics count for more
  let totalWeight = 0;
  let doneWeight = 0;
  topics.forEach(function (t) {
    totalWeight = totalWeight + t.mid;
    if (doneTopics.includes(t.name)) {
      doneWeight = doneWeight + t.mid;
    }
  });
  const weightedPercent = Math.round((doneWeight / totalWeight) * 100);

  weightedBar.style.width = weightedPercent + "%";
  weightedText.textContent = weightedPercent + "% of the exam (by weight)";
}


// ---------- Reset everything ----------
resetButton.addEventListener("click", function () {
  saveProgress([]);
  renderTopics();
});


// Draw the list when the page loads
renderTopics();
