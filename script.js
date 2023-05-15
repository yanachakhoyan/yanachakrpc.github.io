

//////////////////////////////////////////////////////

function showBtn2() {
    document.getElementById("btn1").style.display = "none";
    document.getElementById("btn2").style.display = "block";
  }

function funcTie(){
  document.getElementById("win").style.display = "none";
  document.getElementById("lost").style.display = "none";
  document.getElementById("tie").style.display = "block";
}

function funcWon(){
  document.getElementById("win").style.display = "block";
  document.getElementById("lost").style.display = "none";
  document.getElementById("tie").style.display = "none";
}

function funcLost(){
  document.getElementById("win").style.display = "none";
  document.getElementById("lost").style.display = "block";
  document.getElementById("tie").style.display = "none";
}

/////////////// ROCK /////////////////////////////////

  document.addEventListener("DOMContentLoaded", function() {
    var chooserock = document.getElementById("Rock");
    
    chooserock.addEventListener("click", function() {
      document.getElementById("btn2").style.display = "none";
      document.getElementById("chosenrock").style.display = "block";
      console.log("Rock! (player)");
      computersChoice()
      winner()
    });

/////////////// PAPER /////////////////////////////////

var choosepaper = document.getElementById("Paper");
choosepaper.addEventListener("click", function() {
  document.getElementById("btn2").style.display = "none";
  document.getElementById("chosenpaper").style.display = "block";
  console.log("Paper! (player)");
  computersChoice()
  winner()
});


/////////////// SCISSORS /////////////////////////////////

var choosesci = document.getElementById("Scissors");
    
choosesci.addEventListener("click", function() {
  document.getElementById("btn2").style.display = "none";
  document.getElementById("chosensci").style.display = "block";
  console.log("Scissors! (player)");
  computersChoice()
  winner()
  });


  });




/////////////////////// COMPUTERS CHOICE ///////////////////////////////

var r = 0;
var p = 1;
var s = 2;

const choice = Math.floor(Math.random() * 3);

function computersChoice(){
    
    if(choice == r){
      document.getElementById("comprock").style.display = "block";
    } else if (choice == p){
      document.getElementById("comppaper").style.display = "block";
    } else if (choice == s){
      document.getElementById("compsci").style.display = "block";
    }
  }


 
/////////////////////// WINNER CHOOSING ///////////////////////////////

function winner(){
  if(document.getElementById("chosenrock").style.display === "block" && choice === r){
    funcTie();
    
  } else if(document.getElementById("chosenrock").style.display === "block" && choice === p){
    funcLost();
    document.getElementById("restart").style.display === "block"
  } else if(document.getElementById("chosenrock").style.display === "block" && choice === s){
    funcWon();
    document.getElementById("restart").style.display === "block"
  } else if(document.getElementById("chosenpaper").style.display === "block" && choice === r){
    funcWon();
    document.getElementById("restart").style.display === "block"
  } else if(document.getElementById("chosenpaper").style.display === "block" && choice === p){
    funcTie();
    document.getElementById("restart").style.display === "block"
  } else if(document.getElementById("chosenpaper").style.display === "block" && choice === s){
    funcLost();
    document.getElementById("restart").style.display === "block"
  } else if(document.getElementById("chosensci").style.display === "block" && choice === r){
    funcLost();
    document.getElementById("restart").style.display === "block"
  } else if(document.getElementById("chosensci").style.display === "block" && choice === p){
    funcWon();
    document.getElementById("restart").style.display === "block"
  } else if(document.getElementById("chosensci").style.display === "block" && choice === s){
    funcTie();
    document.getElementById("restart").style.display === "block"
  }


}

