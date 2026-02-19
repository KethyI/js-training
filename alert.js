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

// function f(x, y) {
//   alert("x: " + x + " , y: " + y);
// }

// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 5000);

// f1000("1", "2");
// f1500("тест");

// task3

// function debounce(f, ms) {
//   let delay;
//   return function() {
//     clearTimeout(delay);
//     delay = setTimeout(() => {
//       f.apply(this, arguments);
//     }, ms);
//   }
// }

// let f = debounce(alert, 1000);

// f("a");
// setTimeout( () => f("b"), 200);
// setTimeout( () => f("c"), 500);

//task4
function throttle(func, ms) {

  let isThrottled = false,
    savedArgs,
    savedThis;
    let count = 1;
  

  function wrapper() {

    if (isThrottled) { // (2)
      savedArgs = arguments;
      savedThis = this;
      console.log(savedArgs, savedThis, count);
      count++;
      return;
    }
    isThrottled = true;

    func.apply(this, arguments); // (1)

    setTimeout(function() {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

function f(a) {
  console.log(a);
}

// f1000 передає виклики до f максимум один раз на 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показує 1
f1000(2); // (обмеження, 1000 мс ще не закінчилися)
f1000(3); // (обмеження, 1000 мс ще не закінчилися)