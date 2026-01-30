// task1
function sumSalaries(salaries) {
  return Object.values(salaries).reduce((sum, salary) => sum + salary, 0);
}

let salaries = {
  "Іван": 100,
  "Петро": 300,
  "Марія": 250
};

alert( sumSalaries(salaries) ); 

// task2
function count(obj) {
  return Object.keys(obj).length;
}

let user = {
  name: 'Іван',
  age: 30
};

alert( count(user) );