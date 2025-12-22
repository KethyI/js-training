// task 1.1
function checkAge(age) { 
  return (age > 18) ? true : confirm('Батьки дозволили?');
  }

//task 1.2
function checkAge(age) { 
  return (age > 18) || confirm('Батьки дозволили?');
  }

//task 2
function min(a, b) {
  return (a < b) ? a : b;
}

//task 3
function pow() {
  let x = +prompt("Give natural number for exponentiation")
  let n = +prompt("Give second number to use as exponent ")
  return (x%1==0 && n >= 0 && x >= 1 && n%1 == 0) ? (x**n) : alert("use only natural numbers");
}