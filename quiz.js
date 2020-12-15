//HTML Elements: DOM Manipulation
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
    choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
  },

  {
    title: "The condition in an if/else statement is enclosed within _____.",
    choices: ["1. quotes", "2. curly brackets","3. parentheses", "4. square brackets"],
    answer: "2. curly brackets"
  },

  {
    title: "Arrays in JavaScript can be used to store ____.",
    choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
    answer: "4. all of the above"
    
  },

  {
    title:"String values must be enclosed within _____ when being assigned to variables",
    choices: ["1. commas", "2. curly brackets", "3. quotes","4. parentheses"],
    answer: "3. quotes"
  },

  {
    title: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console log"],
    answer: "4. console log"
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

//countdown timer
function timer (){
  var timerInterval = setInterval(function(){
    timeLeft--;
    timerEl.textContent = timeLeft;

    //stops the clock at zero and ends the game
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
  //adds question list to the HTML
  questionEl.append(ulEl);
  
  quizContent.addEventListener("click", checkAnswer)

  //creates a list of buttons with answer choices
  for (var i = 0; i < 4; i++){
    var listEl = document.createElement("li");
    ulEl.appendChild(listEl);
    var buttonEl = document.createElement("button");
    buttonEl.className = "btn btn-primary btn-lg";
    buttonEl.textContent = quizQuestions[index].choices[i];

    //appends the button to the list
    listEl.appendChild(buttonEl);
    
  }
  
  
}

//when the user selects an answer choice button
function checkAnswer(event) {
  console.log(event.target);
  if (event.target.matches("button")){
    //if the user selects the correct answer button
    if (event.target.textContent === quizQuestions[index].answer){
      //adds 10 to the score
      score += 20;
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
  //Adds one to the index so that the next question in the array is asked
  index++;

  //ends the game if out of questions or the time runs out
  if (index > 4 || timeLeft === 0){
    endGame();
  } else {
  askQuestions();
  }
}

function endGame(){
    //removes the quiz content container and displays the end of game message
    quizContent.classList.add("d-none");
    gameOver.classList.remove("d-none");

    //Final Score
    endMessage.textContent = "Game Over!";
    finalScore.textContent = "Your final score is: " + score + ".";

   //targets the submit button at the end of the game
    var highScoresButton = document.getElementById("high-scores-button");

    highScoresButton.addEventListener("click", function(){
        //takes in user input after the button is clicked
        var initials = document.getElementById("input").value;
        //empty array to pass input and score into
        var storedScores = [];
        //object of initials and scores to pass into empty array
        var initialsAndScore = {name: initials, 
                                points: score};

        //putting the initials/score into local storage if there is nothing in there
        if (localStorage.getItem("initialsAndScore") === null){
        storedScores.push(initialsAndScore);
        localStorage.setItem("initialsAndScore" , JSON.stringify(storedScores));
        //adding the initials/score to the array that already has information and putting it in local storage
        } else {
          storedScores = JSON.parse(localStorage.getItem("initialsAndScore"));
          storedScores.push(initialsAndScore);
          localStorage.setItem("initialsAndScore" , JSON.stringify(storedScores));

        }
        //sends the user to the highscore page
        window.location.replace("highscores.html");
    })
  
}






