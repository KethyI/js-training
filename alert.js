// task1.1
// function printNumbers(from, to) {
//   let count = from;

//   function timer() {
//     alert(count);
//     count++;

//     if (count <= to){      
//       setTimeout(timer, 1000);
//     }
//   }

//   setTimeout(timer, 1000);
  
// }

// printNumbers(5, 10);

// task1.2
function printNumbers(from, to) {
  let count = from;
  
  let timeOut = function timer(){
    
    if (count <= to){   
      alert(count);
      count++;
    }

    clearInterval(timeOut);
  
  }
  
  setInterval(timeOut, 1000);
  
}

printNumbers(5, 10);