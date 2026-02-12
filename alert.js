// task1
function makeCounter(){
  
  let count = 0;

  function counter(){
    return count++;
  }
    
    counter.set = function(num){
      return count = num;
    };

    counter.decrease = function(){
      return count--;
    };

    return counter;
  
}

let counter = makeCounter();
  
alert( counter() ); // 0
alert( counter() ); // 1
  
counter.set(10); // set the new count
  
alert( counter() ); // 10
  
counter.decrease(); // decrease the count by 1
  
alert( counter() ); // 10 (instead of 11)

// task2
function sum(a){
  let result = a;
  function add (b) {
    result += b;
    return add;
  }

  add.toString = function(){
   return result;
  }

  return add;
}

sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15