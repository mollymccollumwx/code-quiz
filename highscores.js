

var highscoresList = document.getElementById("highscores-list");
  
var initialsEl = localStorage.getItem("initials");
  
highscoresList.textContent = initialsEl;
  
console.log(initialsEl);
    
  
    
