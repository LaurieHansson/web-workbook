


var myNodelist = document.getElementsByTagName("li"); //Targets the list items
var i;

for (i = 0; i < myNodelist.length; i++) { //will add 1 to the list
  var span = document.createElement("button"); //will add a button
  var txt = document.createTextNode("remove"); //will add text to the button
  span.className = "close"; //on clicking this, it will close the list item
  span.appendChild(txt); //this will put the newly created buttons onto the list
  myNodelist[i].appendChild(span); //this will add the  li
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) { //hits eery list item
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none"; //This will make the list items dissapear
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

setListMessage();

function setListMessage(){
let list = document.getElementsByTagName('ul');
let message = "This list has " + list[0].children.length + " items";
alert(message);
}

createListCountHeaderElement();


function createListCountHeaderElement(message){
let listHeading = document.createElement("h2");
let h1 = document.getElementsByTagName("h1");

let count = document.getElementsByTagName("ul");

listHeading.innerHTML = "There are "+ count[0].children.length +" items in your shopping cart";

h1[0].appendChild(listHeading);
}
