// task1
// function spy(func){
  
//   function secondCall(...args){
//     secondCall.calls.push(args);
//     return func.call(this, ...args);
//   }

//   secondCall.calls = [];

//   return secondCall;

// }

// function work(a, b) {
//   alert( a + b ); 
// }

// work = spy(work);

// work(1, 2);
// work(4, 5); 

// for (let args of work.calls) {
//   alert( 'виклик:' + args.join() ); // "виклик:1,2", "виклик:4,5"
// }

// task2
function delay(f, ms) {
   
  function alarm (...args){
    
    return setTimeout(() => f.call(this, ...args), ms); 

  }   

  return alarm;
}

function f(x, y) {
  alert("x: " + x + " , y: " + y);
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 5000);

f1000("1", "2");
f1500("тест");