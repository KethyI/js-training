// task1.1
// function sumTo(n) {
//   let sum = 0;
//   for (let i = 0; i <= n; i++){
//     sum += i;
//   } 
//   return sum;
// }

// task1.2
// function sumTo(n) {
//   let sum = 0;
//   if (n === 1) return 1;
//   sum += n + sumTo(n-1);
//   return sum;
// }

// task1.3
function sumTo(n){
  return n*(n+1)/2;
  
}