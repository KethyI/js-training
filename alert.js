// task1
let user = { name: "Іван", years: 30 };

let {name, years: age, isAdmin = false} = user;

alert( name ); // Іван
alert( age ); // 30
alert( isAdmin ); // false

// task2
function topSalary(salaries) {
  let arr = Object.entries(salaries);
  let topSalary = 0;
  let topWorker = null;

  for (let [name, salary] of arr) {
    if (topSalary < salary) {
      topSalary = salary;
      topWorker = name;
    }
  }

  return topWorker;

}

let salaries = {
  "Іван": 100,
  "Петро": 300,
  "Марія": 250
};

topSalary(salaries);