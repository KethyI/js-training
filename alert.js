// task1
// function unique(arr) {

//   return Array.from(new Set(arr));
 
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(values) );

// task2
function aclean(arr) {
  let noAnagram = new Map ();

  for (let word of arr) {
    let key = word.toLowerCase().split("").sort().join("");  
    if (!noAnagram.has(key)) {
      noAnagram.set(key, word);
      console.log(noAnagram);
    }
  }

  return [...noAnagram.values()];
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"

