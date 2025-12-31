// task 1
let calculator = {
  read() {
    this.a = +prompt("Give first number", 0);
    this.b = +prompt("Give second number", 0);
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  }
};

// task 2
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // показує поточний крок
    alert( this.step );
    return this;
  }
};


