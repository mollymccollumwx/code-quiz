console.log("hello World");

//HTML Elements
var homepage = document.getElementById("homepage");
var startButton = document.getElementById("start-button");
var timer = document.getElementById("timer");

//Array of Objects containing 5 questions and answer choices
var quizQuestions = [{
    question: "Commonly used data types DO NOT include:",
    choice1: "strings",
    choice2: "booleans",
    choice3: "alerts",
    choice4: "numbers"},

    {question: "The condition in an if/else statement is enclosed within _____.",
    choice1: "quotes",
    choice2: "curly brackets",
    choice3: "parentheses",
    choice4: "square brackets"},

    {question: "Arrays in JavaScript can be used to store ____.",
    choice1: "numbers and strings",
    choice2: "other arrays",
    choice3: "booleans",
    choice4: "all of the above"},

    {question: "String values must be enclosed within _____ when being assigned to variables",
    choice1: "commas",
    choice2: "curly brackets",
    choice3: "quotes",
    choice4: "parentheses"},

    {questions: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choice1: "JavaScript",
    choice2: "terminal/bash",
    choice3: "for loops",
    choice4: "console log"}   
]

var quizQuestionsIndex = 0;

console.log(quizQuestions);

//starts the quiz after the button is clicked
function startQuiz(){
    //clears jumbotron from page
    homepage.style.display = "none";

    var questionDisplay = 
    
    

    //timer element starts counting down
}


//waits for user to click start game
startButton.addEventListener("click", startQuiz);



