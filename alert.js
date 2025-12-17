function a(){
    let question = prompt("Write any number", 0);
    if(question > 0){
        alert("1");
    }
    else if (question < 0 ) {
        alert("-1");

    }
    else {
             alert("0");   
    }
}

a();

//task2
let result = (a + b < 4) ?  'Нижче' : 'Вище';

//task3
let message = (login == 'Працівник') ? 'Привіт':
 (login == 'Директор') ? 'Вітаю':
 (login == '') ? 'Немає логіну' :
  '';

  //task4
  let value = prompt('Яка "офіційна" назва JavaScript?', '');

    if (value == 'ECMAScript') {
      alert('Правильно!');
    } else {
      alert('Ви не знаєте? ECMAScript!');
    }

    // task5
    let value = prompt('Введіть число', 0);

if (value > 0) {
  alert( 1 );
} else if (value < 0) {
  alert( -1 );
} else {
  alert( 0 );
}