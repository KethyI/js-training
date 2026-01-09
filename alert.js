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
filterRangeInPlace(arr, 1, 4); // видаляє всі числа крім тих, що в діапазоні від 1 до 4

alert( arr );