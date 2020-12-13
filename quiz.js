console.log("hello World");

//HTML Elements
var homepage = document.getElementById("homepage");
var startButton = document.getElementById("start-button");
var timer = document.getElementById("timer");
var question = document.getElementById("question");
var choices = document.getElementById("answer-choices");
var quizBody = document.getElementById("quiz-content");


//Array of Objects containing 5 questions and answer choices
var quizQuestions = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "alerts",
  },

  {
    question: "The condition in an if/else statement is enclosed within _____.",
    choice1: "quotes",
    choice2: "curly brackets",
    choice3: "parentheses",
    choice4: "square brackets",
  },

  {
    question: "Arrays in JavaScript can be used to store ____.",
    choice1: "numbers and strings",
    choice2: "other arrays",
    choice3: "booleans",
    choice4: "all of the above",
  },

  {
    question:
      "String values must be enclosed within _____ when being assigned to variables",
    choice1: "commas",
    choice2: "curly brackets",
    choice3: "quotes",
    choice4: "parentheses",
  },

  {
    questions:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choice1: "JavaScript",
    choice2: "terminal/bash",
    choice3: "for loops",
    choice4: "console log",
  },
];

var quizQuestionsIndex = 0;

console.log(quizQuestions);

//starts the quiz after the button is clicked
function startQuiz() {
  //clears jumbotron from page
  homepage.style.display = "none";
  //timer element starts counting down

  askQuestions();
}

function askQuestions() {
  question.textContent = quizQuestions[quizQuestionsIndex].question;
  document.body.append(question);

   var choices = document.createElement("ul");

  for (var i = 0; i < 4; i++) {
    var listEl = document.createElement("li");
    var buttonEl = document.createElement("button");
    buttonEl.setAttribute("data-index", i);
    buttonEl.textContent = (i + 1) + ". " + quizQuestions[quizQuestionsIndex].choices[i];

    listEl.appendChild(buttonEl);
    choices.appendChild(listEl);

    console.log(buttonEl);
    console.log(listEl);

  }

  document.body.append(choices);
  



  console.log(question);

  
}

//waits for user to click start game
startButton.addEventListener("click", startQuiz);
