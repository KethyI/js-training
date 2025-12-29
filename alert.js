// task 1
let user = {};

user.name = "Ivan";
user.surname = "Smith";
user.name = "Peter";

delete user.name;

// task2
function isEmpty(obj) {
  for (let key in obj) return false;

  return true;
}

//task3
  let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };

function salariesSum(){
  let sum = 0;
  for ( let key in salaries) {
    sum += salaries[key];
  }
  return sum;
}

 salariesSum(salaries);

// task4
function multiplyNumeric(obj){
  for (let key in obj) {
    if (typeof obj[key]  === "number") {
      obj[key] *= 2;
      console.log(typeof obj[key]);

    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "Моє меню"
};
console.log(menu);
multiplyNumeric(menu);

console.log(menu);
