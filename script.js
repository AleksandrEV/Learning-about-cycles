//Напиши программу на JS, которая спрашивает у пользователя число и находит сумму всех чисел от 1 до этого числа

const input = prompt('Введите число');
const number = Number(input);
let n = 0;

  function sum () {
    for (let i = 1; i < number; i++) {
      n= n+i;
    }
    alert('Сумма чисел от 1 до ' + number + ' = ' + n);
  }

sum ();