"use strict"


function ListHeader(){ //This allows the user to know the value of items in the shopping cart.
  var h2 = document.createElement('h2');
  h2.setAttribute('id', 'itemCount');
  h2.innerHTML = 'You have ' + document.getElementsByTagName('ul')[0].children.length
   + ' items in your shopping cart';
  document.getElementsByTagName("h1")[0].append(h2);
}

function addItemBox(){ //This will put a button next to an input field, which will allow you to append what you wrote to the list
  
  var textField = document.createElement("input");
  textField.setAttribute("type", "text");
  textField.setAttribute('id', 'itemInput');
  textField.setAttribute("placeholder", "enter item name");
  document.getElementsByTagName('ul')[0].after(textField);
}

function addItemToCart(){ //This is a button that will add the items to the list
  var addButton = document.createElement("button");
  addButton.innerHTML = "Add Item";
  document.getElementById('itemInput').after(addButton);
  addButton.onclick=addItem;
}

function addItem(event){
  event.preventDefault(); //negates the natural behavior of how the event would typically run

  var newItemText = document.getElementById("itemInput").value;
  var newItem = document.createElement("li");
  
  newItem.innerHTML=newItemText;
  
  document.getElementsByTagName('ul')[0].appendChild(newItem);
  addRemoveButton(newItem);
  //will call the function to update the value in the cart
  updateCartNumber();
  document.getElementById('itemInput').value = '';
}


function updateCartNumber(){ //updates the value & inidcates how many items are in the cart 
  document.getElementById('itemCount').innerHTML = 'You have ' +
  document.getElementsByTagName('ul')[0].children.length +
   ' items in your shopping cart';
}
function addRemoveButton(item){ //will add buttons that will allow user to remove items
  var removeButton = document.createElement("button");
  removeButton.innerHTML = "Remove Item";
  item.append(removeButton);
  removeButton.onclick = removeItem;
}
function addRemoveButtons(){ //this gives the functionality to the remove buttons
  for (let i = 0; i < document.getElementsByTagName("ul")[0].children.length; i++){
    var removeButton = document.createElement("button");
    removeButton.innerHTML = "Remove Item";
    document.getElementsByTagName("li")[i].appendChild(removeButton);
    removeButton.onclick = removeItem;
  }
}
function removeItem(){
 this.closest('li').remove();
  updateCartNumber();
}
window.onload = function() {
 
  ListHeader();
  addItemBox();
  addItemToCart();

  updateCartNumber();
  addRemoveButtons();
}