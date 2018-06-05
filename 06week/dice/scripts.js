"use strict"

let dieChar = ["&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;", "&#9861;"]

roll();


function roll() {
  document.querySelector("#dice").innerHTML = "";
  for (let i = 0; i < 5; i++) {
    let roll = Math.floor(Math.random() * 6) + 1;
    document.querySelector("#dice").innerHTML += `<span class="die" data-roll="${roll}">${dieChar[roll - 1]}</span>`;
  }
  report();
}



function report() {
  document.querySelector("#report").innerHTML = "";
  let diceHtml = document.querySelectorAll('.die');
  let numbers = [0,0,0,0,0,0];
  let pair = 0;
  let threeOf = 0;
  let fourOf = 0;
  let five = 0;
  let straightNum = 0;
  for (let i = 0; i < 5; i++) {
    if (Number(diceHtml[i].getAttribute('data-roll') == 1)) {
      numbers[0] += 1;
    }
    else if (Number(diceHtml[i].getAttribute('data-roll') == 2)) {
      numbers[1] += 1;
    }
    else if (Number(diceHtml[i].getAttribute('data-roll') == 3)) {
      numbers[2] += 1;
    }
    else if (Number(diceHtml[i].getAttribute('data-roll') == 4)) {
      numbers[3] += 1;
    }
    else if (Number(diceHtml[i].getAttribute('data-roll') == 5)) {
      numbers[4] += 1;
    }
    else {
      numbers[5] += 1;
    }
  }
  // For loop to look
  for (let i = 0; i < 6; i++) {
    if (numbers[i] === 5) {
      five = 1;
    }
    else if (numbers[i] === 4) {
      fourOf = 1;
    }
    else if (numbers[i] === 3) {
      threeOf = 1;
    }
    else if (numbers[i] === 2) {
      pair += 1;
    }
  }

  if (numbers[0] === 0 && numbers[1] === 1 && numbers[2] === 1 && numbers[3] === 1 && numbers[4] === 1 && numbers[5] === 1) {
    document.querySelector("#report").innerHTML += `Big Straight`;
  }

  else if (numbers[0] === 1 && numbers[1] === 1 && numbers[2] === 1 && numbers[3] === 1 && numbers[4] === 1 && numbers[5] === 0) {
    document.querySelector("#report").innerHTML += `Small Straight`;
  }

  else if (pair === 1 && threeOf === 1) {
    document.querySelector("#report").innerHTML += ` Full House`;
  }

  else if (five === 1) {
    document.querySelector("#report").innerHTML += ` five of a kind`;
  }

  else if (fourOf === 1) {
    document.querySelector("#report").innerHTML += ` four of a kind`;
  }

  else if (pair === 2) {
    document.querySelector("#report").innerHTML += `two pairs`;
  }

  else if (threeOf === 1) {
    document.querySelector("#report").innerHTML += `three of a kind`;
  }

  else if (pair === 1) {
    document.querySelector("#report").innerHTML += ` pair`;
  }
}
