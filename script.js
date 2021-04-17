let n = Math.round(Math.random() * 50);
let m = n - 1; //possible max value at first

let a;

alert("N = " + n);

const computerGetNumber = (n, m) => {
  let myChoice = 1;
  if (n - m <= 0) {
    alert("my choice is" + n);
    alert("You loose");
    return false;
  }
  for (let i = 1; i <= m; i++) {
    if ((n - i) % (i * 3 + 1) && i * 3 < n - i) {
      myChoice = i;
    }
  }
  alert("my choice is" + myChoice);
  return myChoice;
};

const game = (m) => {
  if (n <= 0) {
    return;
  }
  a = prompt(`select a number from 1 to ${m}`);
  while (a < 1 || a > m) {
    a = prompt(`select a number from 1 to ${m}`);
  }
  if (n - a <= 0) {
    alert("Congrats You Won...");
    return true;
  }
  m = a * 3;
  n -= a;
  if (n <= 0) {
    return;
  }
  alert("N1 = " + n);
  a = computerGetNumber(n, m);
  if (!a) {
    return;
  }
  m = a * 3;
  n -= a;
  if (n <= 0) {
    return;
  } else {
    alert("N2 = " + n);
    game(m);
  }
};

game(m);

// if(n%(m+1)===0){
// console.log('second player wins')
// }else{
// console.log('first player wins')
// }
