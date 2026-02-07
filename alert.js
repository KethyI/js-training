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

// task2
function factorial(n){
  if (n === 1) return n;
  return n * factorial(n-1);
}

// task3
function fib(n) {
  let result = 0;
  if (n <= 0) return undefined;
  if (n === 1) return 1;
  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    let sum = a + b;
    a = b;
    b = sum;
  }
  return b;
}

// task4.1
// function printList(list){
//   let container = list;
//   while (container !== null) {
//     alert(container.value);
//     container = container.next;
    
//   }

// }

// task4.2
function printList(list){
  if (list.value !== null) {
    alert(list.value);
    printList(list.next);
  }
}

// task5.1
function printReverse(list){
  let arr = [];

  while(list) {
    arr.push(list.value);
    list = list.next;
  }

  let reverseArr = arr.reverse();

  for (let item of reverseArr) {
    alert(item);
  }
}

// task5.2
// function printReverse(list){
//    if (list === null) return;
//    printReverse(list.next);
//    alert(list.value);
// }

