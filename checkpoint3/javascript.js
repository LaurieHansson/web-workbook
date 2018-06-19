//How many of everything you have to start out with
var coffee = 0;
 var clicks = 0;
 var  tumbler = 0;
 var intern = 0;
 var  franchise = 0;

//How much everything costs to start with
var clickCost = 50;
 var  tumblerCost = 15;
 var   internCost = 100;
var  franchiseCost = 1100;
  
//How much CPS you get (it starts as 0 but gets higher every time you buy one)
var click = 1;
var  tumblers = 0;
 var  interns = 0;
var  franchises = 0;
 
//Every time you click, you get X number of cookies
document.querySelector(".coffee").addEventListener("click", function() {
  coffee = coffee + click;
  document.getElementById("coffee").innerHTML = coffee + " coffees";
});

document.querySelector(".mrcoffee").addEventListener("click", function() {
  if (coffee - clickCost >= 0) {
    coffee = coffee - 50;
    click = click * 2;
    clicks = clicks + 1;
    clickCost = clickCost * 5;
    cursors = cursors * 2;
    document.getElementById("pp").innerHTML = "You have " + clicks + " Coffee Machines | Cost: " + clickCost + " coffees";
    document.getElementById("messages").innerHTML = "You bought 1 Coffee Machine (s). Now you have " + clicks + ".";
  } else {
    coffee = coffee;
    clicks = clicks;
    clickCost = clickCost;
  }
});

var TumblerRun = function() {
  coffee = coffee + tumblers;
  coffee = Math.ceil(coffee * 10) / 10;
  document.getElementById("coffee").innerHTML = coffee + " coffee";
};

document.querySelector(".tumbler").addEventListener("click", function() {
  if (coffee - tumblerCost >= 0) {
    console.log("clicker is equal to " + tumblerCost);
    coffee = coffee - tumblerCost;
    tumblerCost = Math.round(tumblerCost * 1.5);
    tumblers = tumblers + 0.1;
    setInterval(TumblerRun, 1000);
    tumbler = tumbler+ 1;
    document.getElementById("pc").innerHTML = "You have " + tumbler + " Clickers | Cost: " + tumblerCost + " coffee";
    document.getElementById("messages").innerHTML = "You bought 1 Tumbler. Now you have " + tumbler + ".";
  }
});

var internRun = function() {
    coffee = coffee + interns;
    document.getElementById("coffee").innerHTML = coffee + " coffee"
  }
 
document.querySelector(".intern").addEventListener("click", function() {
  if (coffee - internCost >= 0) {
    coffee = coffee - internCost;
    internCost = Math.round(internCost * 1.5);
    interns = interns + 1;
    setInterval(grandmaRun, 1000);
    interns = interns + 1;
    document.getElementById("pg").innerHTML = "You have " + grandma + " nterns | Cost: " + internCost + " coffees";
    document.getElementById("messages").innerHTML = "You bought 1 intern. Now you have " + intern + ".";
  }
});

var franchiseRun = function() {
    coffee = coffee + farms;
    document.getElementById("coffee").innerHTML = coffee + " coffee"
  }
  
document.querySelector(".dunkin").addEventListener("click", function() {
  if (coffee - franchiseCost >= 0) {
    coffee = coffee - franchiseCost;
    franchiseCost = Math.round(farmCost * 1.5);
    franchise = fanchise + 3;
    setInterval(franchiseRun, 1000);
    franchise = franchise + 1;
    document.getElementById("pf").innerHTML = "You have " + franchise + " Farms | Cost: " + franchiseCost + " coffee";
    document.getElementById("messages").innerHTML = "You bought 1 Franchise. Now you have " + fanchise + ".";
  }
});
