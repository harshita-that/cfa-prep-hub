// =========================================================
// Quiz questions: DATA ONLY
// ---------------------------------------------------------
// To add a question: copy one { ... } block, paste it at the
// end of the list, and change the text.
//   - options: the answer choices (CFA Level 1 uses 3: A, B, C)
//   - answer:  the POSITION of the correct option, counting from 0
//              (0 = first option, 1 = second, 2 = third)
//   - explanation: shown after the user answers
// =========================================================

const questions = [
  {
    topic: "Ethics",
    question: "Under the CFA Institute Standards, a member who comes across material non-public information about a company should:",
    options: [
      "Trade on it only after informing their supervisor",
      "Not act, or cause others to act, on the information",
      "Share it with clients first, so they are treated fairly"
    ],
    answer: 1,
    explanation: "Standard II(A) prohibits acting on, or causing others to act on, material non-public information. Telling a supervisor or clients doesn't make it allowed."
  },
  {
    topic: "Quantitative Methods",
    question: "$1,000 is invested at 5% per year, compounded annually. What is it worth after 2 years?",
    options: ["$1,100.00", "$1,102.50", "$1,105.00"],
    answer: 1,
    explanation: "Future value = 1,000 × (1.05)² = 1,000 × 1.1025 = $1,102.50. Compounding means you earn interest on the interest."
  },
  {
    topic: "Economics",
    question: "The price of a product rises by 10% and the quantity demanded falls by 20%. Demand for this product is:",
    options: ["Elastic", "Inelastic", "Unit elastic"],
    answer: 0,
    explanation: "Price elasticity = % change in quantity ÷ % change in price = −20% ÷ 10% = −2. An absolute value greater than 1 means demand is elastic."
  },
  {
    topic: "Financial Statement Analysis",
    question: "Under accrual accounting, a company delivers a service in December and receives the cash in January. When is the revenue recognised?",
    options: ["December", "January", "Split equally between December and January"],
    answer: 0,
    explanation: "Accrual accounting records revenue when it is earned (the service was delivered in December), not when cash is received."
  },
  {
    topic: "Corporate Issuers",
    question: "A company is financed 60% by equity (cost 10%) and 40% by debt (pre-tax cost 5%). The tax rate is 25%. What is its WACC?",
    options: ["7.50%", "8.00%", "6.75%"],
    answer: 0,
    explanation: "WACC = 0.60 × 10% + 0.40 × 5% × (1 − 0.25) = 6.0% + 1.5% = 7.5%. Debt is cheaper after tax because interest is tax-deductible. 8.00% forgets the tax effect."
  },
  {
    topic: "Equity Investments",
    question: "A share trades at $50 and the company's earnings per share are $2.50. What is the P/E ratio?",
    options: ["12.5", "20", "125"],
    answer: 1,
    explanation: "P/E = price ÷ earnings per share = 50 ÷ 2.50 = 20. Investors pay $20 for every $1 of earnings."
  },
  {
    topic: "Fixed Income",
    question: "Market interest rates rise. What happens to the price of an existing fixed-rate bond?",
    options: ["It rises", "It falls", "It stays the same"],
    answer: 1,
    explanation: "Bond prices and yields move in opposite directions. New bonds now pay more, so existing bonds with lower coupons must become cheaper to compete."
  },
  {
    topic: "Derivatives",
    question: "You buy a call option with a strike price of $40 for a premium of $3. At expiration the stock is $50. What is your profit per share?",
    options: ["$10", "$7", "$13"],
    answer: 1,
    explanation: "Payoff = stock price − strike = 50 − 40 = $10. Profit = payoff − premium paid = 10 − 3 = $7."
  },
  {
    topic: "Alternative Investments",
    question: "Compared with traditional investments (stocks and bonds), alternative investments typically have:",
    options: [
      "Higher liquidity and more transparency",
      "Lower fees and less regulation",
      "Lower liquidity and less transparency"
    ],
    answer: 2,
    explanation: "Alternatives such as private equity, hedge funds, and real estate are usually harder to sell quickly (illiquid), less transparent, and often charge higher fees."
  },
  {
    topic: "Portfolio Management",
    question: "Which type of risk can be reduced by holding a well-diversified portfolio?",
    options: ["Systematic risk", "Market risk", "Unsystematic (company-specific) risk"],
    answer: 2,
    explanation: "Diversification removes risk specific to individual companies. Systematic (market) risk affects everything and cannot be diversified away."
  }
];
