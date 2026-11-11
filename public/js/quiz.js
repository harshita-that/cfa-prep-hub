// =========================================================
// Quiz page logic
// ---------------------------------------------------------
// The questions themselves live in questions.js (loaded first).
// This file only decides what to SHOW and what happens on CLICK.
// =========================================================

// ---------- Quiz state (what the quiz "remembers") ----------
let currentQuestion = 0;   // which question we're on (0 = first)
let score = 0;             // how many answered correctly

// ---------- Grab the HTML elements we need ----------
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const progressText = document.getElementById("quiz-progress");
const topicText = document.getElementById("question-topic");
const questionText = document.getElementById("question-text");
const optionsList = document.getElementById("options");
const feedbackBox = document.getElementById("feedback");
const nextButton = document.getElementById("next-question-btn");
const scoreText = document.getElementById("score-text");
const scoreMessage = document.getElementById("score-message");
const restartButton = document.getElementById("restart-btn");

const letters = ["A", "B", "C", "D"];

// ---------- Show the current question ----------
function showQuestion() {
  const q = questions[currentQuestion];

  progressText.textContent = "Question " + (currentQuestion + 1) + " of " + questions.length;
  topicText.textContent = q.topic;
  questionText.textContent = q.question;

  // Clear old options and feedback
  optionsList.innerHTML = "";
  feedbackBox.hidden = true;
  feedbackBox.className = "feedback";
  nextButton.hidden = true;

  // Create one button per answer option
  q.options.forEach(function (optionText, index) {
    const button = document.createElement("button");
    button.className = "option";
    button.textContent = letters[index] + ".  " + optionText;
    button.addEventListener("click", function () {
      checkAnswer(index);
    });
    optionsList.appendChild(button);
  });
}

// ---------- Check the answer the user clicked ----------
function checkAnswer(chosenIndex) {
  const q = questions[currentQuestion];
  const optionButtons = optionsList.querySelectorAll(".option");
  const isCorrect = chosenIndex === q.answer;

  // Lock all options so the user can't change their answer
  optionButtons.forEach(function (button) {
    button.disabled = true;
  });

  // Colour the correct answer green, and a wrong pick red
  optionButtons[q.answer].classList.add("correct");
  if (!isCorrect) {
    optionButtons[chosenIndex].classList.add("wrong");
  }

  // Update score and show the explanation
  if (isCorrect) {
    score = score + 1;
    feedbackBox.textContent = "✅ Correct! " + q.explanation;
    feedbackBox.classList.add("feedback-correct");
  } else {
    feedbackBox.textContent = "❌ Not quite. " + q.explanation;
    feedbackBox.classList.add("feedback-wrong");
  }
  feedbackBox.hidden = false;

  // Show "Next" (or "See score" on the last question)
  const isLastQuestion = currentQuestion === questions.length - 1;
  nextButton.textContent = isLastQuestion ? "See my score" : "Next question →";
  nextButton.hidden = false;
  nextButton.focus();
}

// ---------- Move to the next question, or finish ----------
function goToNext() {
  currentQuestion = currentQuestion + 1;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

// ---------- Show the final score ----------
function showResult() {
  quizBox.hidden = true;
  resultBox.hidden = false;

  const percent = Math.round((score / questions.length) * 100);
  scoreText.textContent = score + " / " + questions.length + " (" + percent + "%)";

  // A short message depending on how well they did
  if (percent >= 70) {
    scoreMessage.textContent = "Great work — you're on track. Keep it up!";
  } else if (percent >= 50) {
    scoreMessage.textContent = "Good start. Review the explanations and try again.";
  } else {
    scoreMessage.textContent = "Keep going! Revisit the flashcards, then try again.";
  }
}

// ---------- Start over ----------
function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  resultBox.hidden = true;
  quizBox.hidden = false;
  showQuestion();
}

// ---------- Connect buttons to functions ----------
nextButton.addEventListener("click", goToNext);
restartButton.addEventListener("click", restartQuiz);

// Start the quiz when the page loads
showQuestion();
