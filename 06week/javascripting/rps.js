"use strict"
var userChoice=prompt("Rock paper or scissors, bro?");
var compChoice= Math.Random();
if(computerChoice <0.56){
  computerChoice="ROCK";
}
else if(computerChoice <= 0.76){
  computerChoice="PAPAH";
}
else{
  computerChoice="scissors";
  }

document.write(computerChoice);
}

var compare = function(x,y);{
if(x===y){
  return "Tie";
}
else if(x==="Rock" && y==="paper");
return "DINGUS!"
}
else if (x==="paper"&&y==="rock"){
  return "You Win";
}
}
}
compare(computerChoice,userChoice);

document.write("computer chose" +computerChoice);
