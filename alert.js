// task1
function ucFirst(str) {
  if (str === "") return str;

  let copyStr = str.at(0).toLowerCase() + str.slice(1);

  return copyStr;
}

alert( ucFirst("василь") ); 

// task2
function checkSpam(str) {
  let strLower = str.toLowerCase();
 
  return strLower.includes("viagra") || strLower.includes("xxx");
}

// task3
function truncate(str, maxlength) {
  let srtLength = str.length; 

  if (srtLength > maxlength) {
    return str.slice(0, maxlength - 1) + "...";
  }

  return str;
}

// task4
function extractCurrencyValue(str) {
  let result = "";
  for (let char of str) {
   
    if (!isNaN(+char)) {
      result += char;
    }
   
  }
  return +result;
}