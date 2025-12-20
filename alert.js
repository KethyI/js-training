// // task1
// // let i = 0;
// // while (++i < 5) alert( i );
// // //1, 2, 3, 4

// // let i = 0;
// // while (i++ < 5) alert( i );
// // //0, 1, 2, 3, 4, 5

// // //task2
// // for (let i = 0; i < 5; i++) alert( i );
// // //0, 1, 2, 3, 4

// // for (let i = 0; i < 5; ++i) alert( i );
// //0, 1, 2, 3, 4

// //task3
// for(let i=2; i <= 10; i++) 
//   {
//     if (i % 2 == 0) {
//       alert(i);
//     }
//   }

//   //task4
//   let i = 0;
//   while (i < 3) {
//   alert( `число ${i}!` );
//   i++;
// }

// //task5
// let num;
// do {
//   num = prompt("Type number over 100", "");
// } while (num <= 100 && num);

//task6
let n = 10;
  for (let i = 2; i<=n; i++) {
    let isPrime = true;
    for (let j=2; j<i; j++) {
      if (i%j==0) {isPrime = false; break;}
    } 
    if (isPrime) alert (i);
  }




//   let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) { // 2, 3, 4, 5, 6, 7, 8, 9, 10

//   for (let j = 2; j < i; j++) { // шукаємо дільник..
//     if (i % j == 0) continue nextPrime; // не просте, беремо наступне i
//   }

//   alert( i ); // 2, 3, 5,
// }