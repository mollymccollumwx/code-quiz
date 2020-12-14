//HTML Elements
var homepage = document.getElementById("homepage");
var startButton = document.getElementById("start-button");
var timerEl = document.getElementById("timer");
var questionEl = document.getElementById("question");
var choicesEl = document.getElementById("answer-choices");
var quizContent = document.getElementById("quiz-content");
var gameOver = document.getElementById("game-over");
var endMessage = document.getElementById("end-message");
var finalScore = document.getElementById("final-score");


//Array of Objects containing 5 questions and answer choices
var quizQuestions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },

  {
    title: "The condition in an if/else statement is enclosed within _____.",
    choices: ["quotes", "curly brackets","parentheses", "square brackets"],
    answer: "curly brackets"
  },

  {
    title: "Arrays in JavaScript can be used to store ____.",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"
    
  },

  {
    title:"String values must be enclosed within _____ when being assigned to variables",
    choices: ["commas", "curly brackets", "quotes","parentheses"],
    answer: "quotes"
  },

  {
    title: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal/bash", "for loops", "console log"],
    answer: "console log"
  },
];
//sets starting index of QuizQuestions Object
var index = 0;
//time when game starts
var timeLeft = 75;
//starting score
var score = 0;


//waits for user to click to start game
startButton.addEventListener("click", startQuiz);

//starts the quiz after the button is clicked
function startQuiz() {
  //clears jumbotron from page
  homepage.classList.add("d-none");
  //displays container for quiz questions
  quizContent.classList.remove("d-none");
  
  //starts the timer
  timer ();

  //calls function to generate questions
  askQuestions();
}

function timer (){
  var timerInterval = setInterval(function(){
    timeLeft--;
    timerEl.textContent = timeLeft;

    if (timeLeft === 0){
      clearInterval(timerInterval);
      endGame();
    }
  }, 1000);
  
}
//generates questions on the page
function askQuestions() {
  //clear out previous question/choices
  questionEl.textContent = "";
  
  //renders the question on the page
  var question = quizQuestions[index].title;
  questionEl.append(question);

  var ulEl = document.createElement("ul");
  
  ulEl.addEventListener("click", checkAnswer)

  //creates a list of buttons with answer choices
  for (var i = 0; i < 4; i++){
    var listEl = document.createElement("li");
    var buttonEl = document.createElement("button");
    buttonEl.className = "btn btn-primary btn-lg";
    buttonEl.textContent = quizQuestions[index].choices[i];

    //appends the button to the list
    listEl.appendChild(buttonEl);
    ulEl.appendChild(listEl);
  }
  //adds question list to the HTML
  questionEl.append(ulEl);
  
}

//when the user selects an answer choice button
function checkAnswer(event) {
  if (event.target.matches("button")){
    //if the user selects the correct answer button
    if (event.target.textContent === quizQuestions[index].answer){
      //adds 10 to the score
      score += 10;
      
    }
    //if the user selects the wrong answer button
    else {
      //deducts 10 points from the score if the score is above 0
      if (score > 0){
        score -= 10;
      }
      //deducts 10 seconds from the time
      timeLeft = timeLeft - 10;
    }
  }
  index++;

  if (index > 4 || timeLeft === 0){
    endGame();
  } else {
  askQuestions();
  }
}

function endGame(){
    quizContent.classList.add("d-none");
    gameOver.classList.remove("d-none");

     

    endMessage.textContent = "Game Over!";
    finalScore.textContent = "Your final score is: " + score + ".";

    





  
}



