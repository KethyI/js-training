// task1
let browser;
if (browser == "Edge") {
    alert( "You've got the Edge!" );}
else if (browser == "Chrome" 
  || browser == "Firefox" 
  || browser == "Safari" 
  || browser == "Opera") {
    alert( 'Ми підтримуємо і ці браузери' );}
else {
    alert( 'Маємо надію, що ця сторінка виглядає добре!' );
}
  

//task2

let a = +prompt('a?', '');

switch (a){
  case 0: 
   alert (0);
  break;

  case 1: 
    alert (1);
    break;

  case 2:
  case 3: 
    alert ("2, 3");
    break;
}
