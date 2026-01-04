// task1
let num1 = +prompt("Give first number", 0);
let num2 = +prompt("Give second number", 0);

sum = num1 + num2;

alert(sum);

// task2
function readNumber() {
  let num;

  do { 
    num = +prompt("Give number", "");
  } while (!isFinite(num));

  if (num === null || num === "") {
    return null;
  }

  return num;
  
}

alert(`${readNumber()}`);

//task3
function random(min, max) {
  let numRandom = Math.random()*(max - min) + min;
  return numRandom;
}