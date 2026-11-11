// =========================================================
// Flashcards: DATA + PAGE LOGIC
// ---------------------------------------------------------
// To add a card: copy one { ... } block, paste it at the end
// of the list (before the closing ]), and change the text.
// Don't forget the comma between blocks!
// =========================================================

// ---------- The flashcard data ----------
// Each card has: topic (which CFA area), term (front), definition (back)
const flashcards = [
  {
    topic: "Ethics",
    term: "Mosaic Theory",
    definition: "An analyst may combine public information with non-material, non-public information to reach a conclusion. This is allowed, because no single piece is material non-public information."
  },
  {
    topic: "Ethics",
    term: "Material Non-Public Information",
    definition: "Information not yet available to the public that would likely affect a security's price. CFA Standards prohibit trading on it or causing others to trade on it."
  },
  {
    topic: "Quantitative Methods",
    term: "Standard Deviation",
    definition: "A measure of how spread out returns are around their average. In finance it is the most common measure of an investment's total risk (volatility)."
  },
  {
    topic: "Quantitative Methods",
    term: "Net Present Value (NPV)",
    definition: "The present value of all future cash flows minus the initial investment. A positive NPV means the project is expected to add value."
  },
  {
    topic: "Economics",
    term: "Price Elasticity of Demand",
    definition: "How much the quantity demanded changes when price changes: % change in quantity ÷ % change in price. If the absolute value is greater than 1, demand is elastic."
  },
  {
    topic: "Financial Statement Analysis",
    term: "Accrual Accounting",
    definition: "Revenue is recorded when earned and expenses when incurred, not when cash moves. This is why net income and cash flow can differ."
  },
  {
    topic: "Financial Statement Analysis",
    term: "Current Ratio",
    definition: "Current assets ÷ current liabilities. A liquidity ratio showing whether a company can pay its short-term obligations."
  },
  {
    topic: "Corporate Issuers",
    term: "Weighted Average Cost of Capital (WACC)",
    definition: "The average rate a company pays to finance itself, weighting the cost of debt (after tax) and equity by how much of each it uses. Often used as the discount rate for projects."
  },
  {
    topic: "Equity Investments",
    term: "Price-to-Earnings (P/E) Ratio",
    definition: "Share price ÷ earnings per share. Shows how much investors pay for each unit of earnings; a common relative valuation measure."
  },
  {
    topic: "Equity Investments",
    term: "Efficient Market Hypothesis",
    definition: "The idea that prices reflect available information. Weak form: past prices; semi-strong: all public information; strong: all information, including private."
  },
  {
    topic: "Fixed Income",
    term: "Yield to Maturity (YTM)",
    definition: "The single discount rate that makes the present value of a bond's cash flows equal its price, assuming it is held to maturity and coupons are reinvested at that rate."
  },
  {
    topic: "Fixed Income",
    term: "Modified Duration",
    definition: "Approximate % change in a bond's price for a 1% change in yield. A duration of 5 means the price falls about 5% if yields rise 1%."
  },
  {
    topic: "Derivatives",
    term: "Call Option",
    definition: "The right, but not the obligation, to BUY an asset at a set price (the strike) on or before a set date. The buyer pays a premium for this right."
  },
  {
    topic: "Alternative Investments",
    term: "\"2 and 20\" Fee Structure",
    definition: "A typical hedge fund fee: a 2% annual management fee on assets, plus a 20% incentive (performance) fee on profits."
  },
  {
    topic: "Portfolio Management",
    term: "Systematic Risk",
    definition: "Market-wide risk that cannot be removed by diversification (e.g. recessions, interest rate changes). Measured by beta. Investors are only rewarded for bearing this risk."
  }
];


// ---------- Page logic (runs only on flashcards.html) ----------

// Which card we're showing right now (0 = the first card)
let currentIndex = 0;

// Grab the HTML elements we need to update
const cardElement = document.getElementById("flashcard");
const topicElement = document.getElementById("card-topic");
const termElement = document.getElementById("card-term");
const definitionElement = document.getElementById("card-definition");
const counterElement = document.getElementById("card-counter");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

// Show the card at currentIndex
function showCard() {
  const card = flashcards[currentIndex];

  topicElement.textContent = card.topic;
  termElement.textContent = card.term;
  definitionElement.textContent = card.definition;
  counterElement.textContent = (currentIndex + 1) + " / " + flashcards.length;

  // Always start a new card on the front side
  cardElement.classList.remove("flipped");

  // Disable buttons at the start and end of the deck
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === flashcards.length - 1;
}

// Flip the card over (front <-> back)
function flipCard() {
  cardElement.classList.toggle("flipped");
}

// Go to the next / previous card
function nextCard() {
  if (currentIndex < flashcards.length - 1) {
    currentIndex = currentIndex + 1;
    showCard();
  }
}

function previousCard() {
  if (currentIndex > 0) {
    currentIndex = currentIndex - 1;
    showCard();
  }
}

// Connect buttons and clicks to the functions above
cardElement.addEventListener("click", flipCard);
nextButton.addEventListener("click", nextCard);
prevButton.addEventListener("click", previousCard);

// Keyboard shortcuts: arrow keys move between cards
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    nextCard();
  } else if (event.key === "ArrowLeft") {
    previousCard();
  }
});

// Show the first card when the page loads
showCard();
