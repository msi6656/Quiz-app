const questions = [
    {
        question: "What does a yield curve inversion typically indicate?",
        answers: [
            {text: "Strong economic expansion", correct: false},
            {text: "Potential recession", correct: true},
            {text: "Rising inflation only", correct: false},
            {text: "Higher corporate profits", correct: false},
        ]
    },
    {
        question: "What is the primary purpose of a central bank raising interest rates?",
        answers: [
            {text: "Increase inflation", correct: false},
            {text: "Reduce inflation", correct: true},
            {text: "Increase exports", correct: false},
            {text: "Boost stock prices", correct: false},
        ]
    },
    {
        question: "In trading, what does 'liquidity sweep' mean?",
        answers: [
            {text: "Large market trend", correct: false},
            {text: "Price taking out stops before reversing", correct: true},
            {text: "Broker manipulation fee", correct: false},
            {text: "Closing all positions", correct: false},
        ]
    },
    {
        question: "Which financial ratio measures a company's ability to meet short-term obligations?",
        answers: [
            {text: "Debt-to-Equity Ratio", correct: false},
            {text: "Current Ratio", correct: true},
            {text: "P/E Ratio", correct: false},
            {text: "ROE", correct: false},
        ]
    },
    {
        question: "What is an Order Block in Smart Money Concepts?",
        answers: [
            {text: "A broker's order list", correct: false},
            {text: "Last opposing candle before an impulsive move", correct: true},
            {text: "A support line", correct: false},
            {text: "A moving average", correct: false},
        ]
    },
    {
        question: "Which Greek measures an option's sensitivity to time decay?",
        answers: [
            {text: "Delta", correct: false},
            {text: "Theta", correct: true},
            {text: "Gamma", correct: false},
            {text: "Vega", correct: false},
        ]
    },
    {
        question: "What does P/E Ratio stand for?",
        answers: [
            {text: "Price-to-Earnings Ratio", correct: true},
            {text: "Profit-to-Equity Ratio", correct: false},
            {text: "Price-to-Equity Ratio", correct: false},
            {text: "Performance-to-Earnings Ratio", correct: false},
        ]
    },
    {
        question: "Which market structure indicates a bullish trend?",
        answers: [
            {text: "Lower Highs and Lower Lows", correct: false},
            {text: "Higher Highs and Higher Lows", correct: true},
            {text: "Equal Highs and Equal Lows", correct: false},
            {text: "Sideways Consolidation", correct: false},
        ]
    },
    {
        question: "What is the Sharpe Ratio used for?",
        answers: [
            {text: "Measuring risk-adjusted returns", correct: true},
            {text: "Calculating dividends", correct: false},
            {text: "Measuring volatility only", correct: false},
            {text: "Determining market capitalization", correct: false},
        ]
    },
    {
        question: "What does CPI stand for in economics?",
        answers: [
            {text: "Corporate Price Index", correct: false},
            {text: "Consumer Price Index", correct: true},
            {text: "Consumer Profit Indicator", correct: false},
            {text: "Capital Price Indicator", correct: false},
        ]
    },
    {
        question: "What is a Fair Value Gap (FVG)?",
        answers: [
            {text: "Gap between bid and ask", correct: false},
            {text: "Price imbalance left by aggressive movement", correct: true},
            {text: "Stock split gap", correct: false},
            {text: "Broker spread", correct: false},
        ]
    },
    {
        question: "Which financial statement shows a company's profitability?",
        answers: [
            {text: "Balance Sheet", correct: false},
            {text: "Income Statement", correct: true},
            {text: "Cash Flow Statement", correct: false},
            {text: "Statement of Equity", correct: false},
        ]
    },
    {
        question: "What is the risk of using excessive leverage?",
        answers: [
            {text: "Lower profits", correct: false},
            {text: "Magnified losses", correct: true},
            {text: "Reduced volatility", correct: false},
            {text: "Guaranteed liquidation protection", correct: false},
        ]
    },
    {
        question: "What does DXY represent?",
        answers: [
            {text: "Dow Jones Yield Index", correct: false},
            {text: "US Dollar Index", correct: true},
            {text: "Daily Exchange Yield", correct: false},
            {text: "Dollar Yield Exchange", correct: false},
        ]
    },
    {
        question: "In institutional trading, what is a Break of Structure (BOS)?",
        answers: [
            {text: "Violation of a significant swing point", correct: true},
            {text: "Broker outage", correct: false},
            {text: "Market closure", correct: false},
            {text: "Option expiration", correct: false},
        ]
    },
    {
        question: "What is Beta in stock analysis?",
        answers: [
            {text: "Dividend growth rate", correct: false},
            {text: "Market volatility relative to benchmark", correct: true},
            {text: "Company revenue growth", correct: false},
            {text: "Interest rate sensitivity", correct: false},
        ]
    },
    {
        question: "Which event usually has the strongest impact on Forex markets?",
        answers: [
            {text: "Company Earnings", correct: false},
            {text: "FOMC Interest Rate Decision", correct: true},
            {text: "Stock Split", correct: false},
            {text: "Dividend Announcement", correct: false},
        ]
    },
    {
        question: "What does ROE measure?",
        answers: [
            {text: "Return on Equity", correct: true},
            {text: "Rate of Expansion", correct: false},
            {text: "Revenue over Expenses", correct: false},
            {text: "Return on Earnings", correct: false},
        ]
    },
    {
        question: "What is the purpose of hedging?",
        answers: [
            {text: "Increase leverage", correct: false},
            {text: "Reduce risk exposure", correct: true},
            {text: "Maximize commissions", correct: false},
            {text: "Predict market direction", correct: false},
        ]
    },
    {
        question: "Which concept describes institutions accumulating positions before a major move?",
        answers: [
            {text: "Distribution", correct: false},
            {text: "Accumulation", correct: true},
            {text: "Liquidation", correct: false},
            {text: "Capitulation", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;

    questionElement.innerHTML =
        questionNo + ". " + currentQuestion.question;

        currentQuestion.answers.forEach(answer => {

        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";

    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {

        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }

        // Sab buttons disable
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore() {
    resetState();

    questionElement.innerHTML =
        `You scored ${score} out of ${questions.length}!`;

    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {

    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }

});

startQuiz();