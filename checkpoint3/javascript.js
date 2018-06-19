 var cookies = 0;
 var  taps = 0;
 var  cursor = 0;
 var  grandma = 0;
 var mill = 0;
 
//intial costs 
var tapCost = 50;
var  cursorCost = 40;
var  bakerCost = 100;
var  millCost = 1100;


//How many cookies per second with different clickers and purchases
var   taps = 1;
  var tapper = 0;
var   baker= 0;
 var  mills = 0;

//Every time you click, you get a specific number of cookies 
  document.querySelector(".mainCookie").addEventListener("click", function() {
  cookies = cookies + click;
  document.getElementById("cookies").innerHTML = cookies + "cookies";
});
//Every time you buy a power tap your taps and clicks double
document.querySelector(".powerClick").addEventListener("click", function() {
  if (cookies - clickCost >= 0) {
    cookies = cookies - 50;
    taps = taps * 2;
    taps = taps 1;
    tapCost = tapCost * 5;
    cursors = cursors * 2;
    document.getElementById("powertaps").innerHTML = "You have " + clicks + " Power Clicks | Cost: " + clickCost + " cookies";
    document.getElementById("messages").innerHTML = "You bought 1 Power Click. Now you have " + clicks + ".";
  } else {
    cookies = cookies;
    clicks = clicks;
    clickCost = clickCost;
  }
});
// tap function
function tapper() {
  cookies = cookies + cursors;
  cookies = Math.ceil(cookies * 10) / 10;
  document.getElementById("cookies").innerHTML = cookies + " cookies";
};
// tapper changes
document.querySelector(".tapper").addEventListener("click", function() {
  if (cookies - cursorCost >= 0) {
    console.log("tapper is equal to " + cursorCost);
    cookies = cookies - cursorCost;
    
    cursors = cursors + 0.2;
    setInterval(clickerRun, 1000);
    cursor = cursor + 1;
    cursorCost = Math.round(cursorCost * 1.15 ^ cursor);
    document.getElementById("tappertext").innerHTML = "You have " + cursor + " Clickers | Cost: " + cursorCost + " cookies";
    document.getElementById("messages").innerHTML = "You bought 1 Clicker. Now you have " + cursor + ".";
  }
});
//another increment option for when you buy a baker package
function bakers() {
    cookies = cookies + grandmas;
    document.getElementById("cookies").innerHTML = cookies + " cookies"
  }
  //taps applied//html changes
document.querySelector(".baker").addEventListener("click", function() {
  if (cookies - grandmaCost >= 0) {
    cookies = cookies - grandmaCost;
    grandmas = grandmas + 1;
    setInterval(grandmaRun, 1000);
    grandma = grandma + 1;
    grandmaCost = Math.round(grandmaCost * 1.15 ^ grandma);
    document.getElementById("bakertext").innerHTML = "You have " + baker + " baker| Cost: " + bakersCost + " cookies";
    document.getElementById("messages").innerHTML = "You bought 1 baker. Now you have " + baker + ".";
  }
});

 function mill() {
    cookies = cookies + mills;
    document.getElementById("cookies").innerHTML = cookies + " cookies";
  };

document.querySelector(".mill").addEventListener("click", function() {
  if (cookies - millCost >= 0) {
    cookies = cookies - millCost;
    farmCost = Math.round(millCost * 1.5);
    mill = mill + 3;
    setInterval(farmRun, 1000);
    mill = mill + 1;
    document.getElementById("milltext").innerHTML = "You have " + mills + " mills | Cost: " + millCost + " cookies";
    document.getElementById("messages").innerHTML = "You bought 1 millss. Now you have " + mill + ".";
  }
});

