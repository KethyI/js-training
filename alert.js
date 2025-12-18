// alert( alert(1) || 2 || alert(3) );

// alert( alert(1) && alert(2) );

let age = prompt("What's your age?", "");

//task 2
if (age >= 14 && age <= 90) {
  alert("you are fine")
}

// task3
if (age > 90 || age < 14) {
  alert ("you are too much")
}

// task3.5
if (!(age >= 14 && age <= 90)) {
  alert ("you are too much")
}

//tast 4
if (-1 || 0) alert( 'перший' ); //-1
if (-1 && 0) alert( 'другий' ); //not shown
if (null || -1 && 1) alert( 'третій' ); //1

//task 5
let login = prompt("what's your login?", "");

if (login == "Admin") {
let password = prompt("What's your password?", "");
if (password == "Owner") {
  alert("Welcome!");
  
}
else if (password == "" || password == null) {
  alert("Canceled");
}
else {
   alert("Wrong") 
  }
}
else if (login == "" || login == null) {
  alert("Canceled");

} else {
  alert("We don't know you");
}