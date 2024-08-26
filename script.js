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
/*
const input = prompt('Введите строку:');
const string = String(input);
let reversed = '';

for(let i = string.length -1; i >=0; i--) {
  reversed += string[i];
}
alert(string + ' наоборот будет: ' + reversed);
*/

//3. Напишите программу, которая запрашивает у пользователя числа и находит все простые числа меньше или равные этому числу
/*
const input = prompt('Введите число');
const number = Number(input);
let simpleNum = null;

for(let i = 0; i<=number; i++) {
  if (Number.isInteger(i,10)) {
    simpleNum += i + ', ';
  }
  console.log(simpleNum);
  
}
*/

// ФУНКЦИИ!!!!

// 1. Напиши функцию находящую площадь круга
/*
const radiusStr = prompt('Введите радиус круга в сантиметрах');
const radius = Number(radiusStr);

function sCircle () {
  let s = 3.14 * (Math.pow(radius, 2))
  alert('Площадь круга с радиусом ' + radius + ' сантиметра = ' + s);
}
sCircle();
*/

// 2. Вывести в консоль все переданные в функцию аргументы
/*
function logArgsToConsole() {
  //console.log(arguments);
  for (let argument of arguments) {
    console.log(argument);
  }
  console.log('Больше аргументов нет');
}
logArgsToConsole(55, 332, 52, 342, 2);
*/

// 3. Напиши функцию,принимающую в качестве агрументов 2 числа и возвращает максимальное из них
/*
function findMax (a, b){
  if (a > b) {
    console.log(a);
  }
  if (b > a) {
    console.log(b);
  }
  if (a === b) {
    console.log('Значения равны');
  }
}
*/