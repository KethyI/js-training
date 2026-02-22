// task1
// function askPassword(ok, fail) {
//   let password = prompt("Пароль?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: 'Іван',

//   loginOk() {
//     alert(`${this.name} увійшов`);
//   },

//   loginFail() {
//     alert(`${this.name} виконав невдалу спробу входу`);
//   },

// };

// askPassword(user.loginOk.bind(user), () => user.loginFail());

//task2
function askPassword(ok, fail) {
  let password = prompt("Пароль?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'Іван',

  login(result) {
    alert( this.name + (result ? ' увійшов' : ' виконав невдалу спробу входу') );
  }
};

askPassword(user.login.bind(user, true), () => user.login(false));