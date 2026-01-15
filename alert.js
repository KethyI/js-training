// // task1
// function camelize(str) {
//   let arr = str.split("-");
//   let newStr = arr.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join("");

//   return newStr;
  
// }

// //task2
// function filterRange(arr, a, b) {
//   let filterArr = arr.filter(item => item >= a && item <= b);
//   return filterArr;
// }

// //task3
// function filterRangeInPlace(arr, a, b) {
//   for (let i = 0; i < arr.length; i++) {
//     if (a > arr[i] || arr[i] > b)  {
//           arr.splice(i, 1);
//           i--;
//       }
//   }
// }

// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); 

// alert( arr );

// //task4
// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a)

// alert( arr ); 

// //task5
// function copySorted(arr) {
//   let sortedArr = arr.slice().sort();
//   return sortedArr
// }

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted );
// alert( arr );

// //task6
// function Calculator(){

//   this.methods = {
//     "+": (a, b) => a + b,
//     "-": (a, b) => a - b,
//   }
  
//   this.calculate = function(str){
//     let arr = str.split(" ");
//     let result;
//     let a = +arr[0];
//     let operator = arr[1];
//     let b = +arr[2];

//     if (isNaN(a) || isNaN(b) || !this.methods[operator]) return alert (" Format is `a + b`");
//     result = this.methods[operator](a, b);
//     return result;
//   } 

//   this.addMethod = function(name, func) {
//     this.methods[name] = func;
//   }
  
// }

// // task7
// let ivan = { name: "Іван", age: 25 };
// let petro = { name: "Петро", age: 30 };
// let mariya = { name: "Марія", age: 28 };

// let users = [ ivan, petro, mariya ];

// let names = users.map(user => user.name);

// alert( names ); // Іван, Петро, Марія

// task8
// let ivan = { name: "Іван", surname: "Іванко", id: 1 };
// let petro = { name: "Петро", surname: "Петренко", id: 2 };
// let mariya = { name: "Марія", surname: "Мрійко", id: 3 };

// let users = [ ivan, petro, mariya ];

// let usersMapped = users.map(user => ({
//   fullName: `${user.name} ${user.surname}`, 
//   id: user.id,
// }));


// // usersMapped = [
// //   { fullName: "Іван Іванко", id: 1 },
// //   { fullName: "Петро Петренко", id: 2 },
// //   { fullName: "Марія Мрійко", id: 3 }
// // ]


// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Іван Іванко

// // task9
// function shuffle(array) {
//   array.sort(() => Math.random() - 0.5);
// }

// // task10
// function sortByAge(users) {
//   users.sort( function (a, b) {
//     if (a.age > b.age) return 1;
//     if (a.age < b.age) return -1;
//     return 0;
//   } )
// }

// let ivan = { name: "Іван", age: 25 };
// let petro = { name: "Петро", age: 30 };
// let mariya = { name: "Марія", age: 28 };

// let arr = [ petro, ivan, mariya ];

// sortByAge(arr);

// // task11
// function getAverageAge(users) {
//   let sumAge = users.reduce((sum, current) => sum + current, 0 );
//   return sumAge / users.length;

// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// alert( getAverageAge(arr) );

// // task12
// function unique(arr) {
//   let uniqueWords = arr.filter((item, index) => arr.indexOf(item) === index)
    
//   return uniqueWords;
// }

// let strings = ["Привіт", "Світ", "Привіт", "Світ",
//   "Привіт", "Привіт", "Світ", "Світ", ":-O"
// ];

// alert( unique(strings) );

// task13
function groupById(arr) {

  let obj = arr.reduce((obj, user) => { obj[user.id] = user; return obj; }, {})
  console.log(obj);
  return obj;
  
}

let users = [
  {id: 'іван', name: "Іван Іванко", age: 20},
  {id: 'ганна', name: "Ганна Іванко", age: 24},
  {id: 'петро', name: "Петро Петренко", age: 31},
];

let usersById = groupById(users);
