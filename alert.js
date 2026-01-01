// task 1


function Calculator () {
  this.read = function() {
    this.a = +prompt("Give first number", 0);
    this.b = +prompt("Give second number", 0);
  };

  this.sum - function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  }
};

let calculator = new Calculator();

// task 2
function Accumulator(startingValue){
  this.value = startingValue;

  this.read = function () {
    this.value += +prompt("What to add?", 0);
    return this.value;
  }
};

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);
