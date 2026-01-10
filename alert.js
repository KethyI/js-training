// task1
function camelize(str) {
  let arr = str.split("-");
  let newStr = arr.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join("");

  return newStr;
  
}

//task2
function filterRange(arr, a, b) {
  let filterArr = arr.filter(item => item >= a && item <= b);
  return filterArr;
}

//task3
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (a > arr[i] || arr[i] > b)  {
          arr.splice(i, 1);
          i--;
      }
  }
}

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); 

alert( arr );

//task4
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a)

alert( arr ); 

//task5
function copySorted(arr) {
  let sortedArr = arr.slice().sort();
  return sortedArr
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted );
alert( arr );

//task6
function Calculator(str){
  
  let arr = str.split(" ");
  let result = "";

  arr.find("+") ? result = arr[0] + arr[1] : result =  arr[0] - arr[1];

  return result;
}