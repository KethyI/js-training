// task1
let styles = ["Jazz", "Blues"];

styles.push("Rock-n-Roll");

styles[Math.floor(styles.length - 1 / 2)] = "Classics";

alert( styles.shift());

styles.unshift("Rap, Reggae");

// task2
function sumInput() {
  let nums = [];
  let result = 0;

  while (true) {  
    let number = prompt("give number", "");
    if (number === "" || number === null || !isFinite(+number)) break;
    nums.push (+number);
  }  

  for (let n of nums) {
    result += n;
  }
  
  return result;

}


// task3
function getMaxSubSum(arr) {

  let partArr = 0;
  let maxSum = 0;

  for (let num of arr) {

    partArr = Math.max(0, partArr + num);

    maxSum = Math.max(maxSum, partArr);

  }

  return maxSum;
}