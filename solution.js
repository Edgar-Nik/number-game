let initialNumber = document.querySelector("#number");
let playerNumber = document.querySelector("#playerNumber");
let computerNumber = document.querySelector("#computerNumber");
let submitBtn = document.querySelector("#submit");
let max = document.querySelector("#max");

let looseScreen = document.querySelector(".looseScreen");
let winScreen = document.querySelector(".winScreen");
let computerFinalChoice = document.querySelector("#computerFinalChoice");

let playAgain1 = document.querySelector("#playAgain1");
let playAgain2 = document.querySelector("#playAgain2");

let n = Math.round(Math.random() * 50) + 3;
let m = n - 1; //possible max value at first
let a;

initialNumber.innerHTML = n;
max.innerHTML = m;

const computerGetNumber = (n, m) => {
  let myChoice = 1;
  if (n - m <= 0) {
    computerNumber.innerHTML = n;
    computerFinalChoice.innerHTML = n;
    return false;
  }
  for (let i = 1; i <= m; i++) {
    if ((n - i) % (i * 3 + 1) && i * 3 < n - i) {
      myChoice = i;
    }
  }
  computerNumber.innerHTML = myChoice;

  return myChoice;
};

const game = (m, a) => {
  if (n <= 0) {
    return;
  }

  if (a < 1 || a > m) {
    return;
  }
  if (n - a <= 0) {
    winScreen.style.display = "flex";
    return true;
  }
  m = a * 3;
  max.innerHTML = m;

  n -= a;
  if (n <= 0) {
    return;
  }
  initialNumber.innerHTML = n;
  a = computerGetNumber(n, m);
  if (!a) {
    looseScreen.style.display = "flex";

    return;
  }
  m = a * 3;
  max.innerHTML = m;

  n -= a;
  if (n <= 0) {
    return;
  } else {
    initialNumber.innerHTML = n;
  }
};

// if(n%(m+1)===0){
// console.log('second player wins')
// }else{
// console.log('first player wins')
// }

submitBtn.addEventListener("click", () => {
  let a = playerNumber.value;
  game(m, a);
  playerNumber.value = "";
});

const resetGame = () => {
  n = Math.round(Math.random() * 50) + 3;
  m = n - 1;
  a = null;
  winScreen.style.display = "none";
  looseScreen.style.display = "none";
  playerNumber.value = "";
  initialNumber.innerHTML = n;
  max.innerHTML = m;
};

playAgain1.addEventListener("click", () => {
  resetGame();
});
playAgain2.addEventListener("click", () => {
  resetGame();
});
