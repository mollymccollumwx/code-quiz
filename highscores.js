

 var highscoresList = document.getElementById("highscores-list");
  
// var initialsAndScoresEl = JSON.parse(localStorage.getItem("storedScores"));
  
// highscoresList.textContent = storedScores[0];
console.log("welcome to highscores")

var initialsAndScore = JSON.parse(localStorage.getItem("initialsAndScore"));
for (var i = 0; i < initialsAndScore.length; i++){
    var pEl = document.createElement("p");
    pEl.textContent = initialsAndScore[i].name + ":  "+ initialsAndScore[i].points;
    highscoresList.append(pEl);
    // create an element
    // give content
    //append to page
}

    
  
    
