// task1

function sum(a) {

  return function (b) {
    return a+b;
  }
}

// task 2.1
function inBetween(a, b) {
  return function(arg) {
    return arg >= a && arg <= b;
  }
}

// task2.2
function inArray(arr){
  return function(item) {
    return arr.includes(item);
  }
}

// task3
function byField(fieldName) {
  
  return function (a, b){
    return a[fieldName] > b[fieldName] ? 1 : -1;
  }
}

//task4
function makeArmy() {
  let shooters = [];
 

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function() { 
      
      alert( j ); 
    };
    shooters.push(shooter); 
    i++;
  }

  
  return shooters;
}
