// 1. Напиши программу на JS, которая спрашивает у пользователя число и находит сумму всех чисел от 1 до этого числа

/*
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
*/

// 2. Напишите код, которые принимает от пользователя строку и выводит на экран все символы этой строки в обратном порядке

const input = prompt('Введите строку:');
const string = String(input);
let reversed = '';

for(let i = string.length -1; i >=0; i--) {
  reversed += string[i];
}
alert(string + ' наоборот будет: ' + reversed);