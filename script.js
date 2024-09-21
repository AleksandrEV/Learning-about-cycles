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

// 4. Создайте функцию countVowels, которая принимает строку в качестве аргумента и возвращает количество гласных в этой строке. Строка может содержать как строчные, так и прописные буквы.
/*
const input = prompt('Введите строку');
let string = input.toLowerCase();
const vowels = 'уеёаыоэяию';
let count = 0;

function countVowels () {
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      count++;
    }
  }
  alert('В строке: "' + input + ' " - ' + count + ' глассных букв');
};
countVowels();
*/


// 5. Напиши стрелочну функцию преобразующую сломанные сслыки типа 'vk', 'youtube', 'facebook' в работающие типа 'https://vk.com'
/*
const brokenLinks = ['vk', 'youtube', 'facebook'];

function fixLinks () {
  let correctLinks = [];
  for (let argument of brokenLinks) {
    correctLinks.push('https://'+argument+'.com');
  }
  console.log(correctLinks);
};
fixLinks();
*/

// 6. Напишите программу, которая запрашивает у пользователя число и выводит сообщение, является ли это число чётным или нечётным.
/*
const numInput = prompt('Введите число:')
const num = Number(numInput);

function evenOrOdd () {
  if (typeof num === 'number' && !isNaN(num) && num !== 0) {
    if (num % 2 === 0) {
      alert(`Число ${num} является четным`);
    } else {
      alert(`Число ${num} является нечетным`);
    };
  } else {
    alert(`Попробуйте еще раз!
      Возможно "${numInput}" не является числом`);
  };
}
evenOrOdd();
*/

// 7. Напишите функцию sumArray(arr), которая принимает массив чисел и возвращает их сумму.
/*

function sumArray (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
};

// 8. Напишите функцию sumPositiveNumbers(arr), которая принимает массив чисел и возвращает сумму только положительных чисел в массиве. Если в массиве нет положительных чисел, функция должна вернуть 0.

function sumPositiveNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  console.log(sum);
}

// 9. Напишите функцию findMax(arr), которая принимает массив чисел и возвращает наибольшее число в этом массиве. Если массив пустой, функция должна вернуть null.

function findMax(arr) {
  let maxSum = 0;
  if (arr.length === 0){
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    if (maxSum < arr[i]) {
      maxSum = arr[i];
    }
  }
  console.log(maxSum);
}

//10. Напишите функцию findAverage(arr), которая принимает массив чисел и возвращает их среднее значение. Если массив пустой, функция должна вернуть null.

function findAverage(arr) {
  let sum = 0;
  if (arr.length === 0) {
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(`Среднее значение чисел = ${sum / arr.length}`);
}
*/
// 11. Тернарный оператор
/*
( function () {
  const numOne = 8, numTwo = 3;

  let verb = (numOne !== 1) ? 'are' : 'is';
  console.log(`There ${verb} ${numOne}`)

  let parity = (numOne % 2 !== 0) ? 'Odd' : 'Even';
  console.log(`${numOne} is ${parity}`);

  parity = (numTwo % 2 !== 0) ? 'Odd' : 'Even';
  console.log(`${numTwo} is ${parity}`);

  let max = (numOne > numTwo) ? numOne : numTwo;
  console.log(`${max} is the greater Number`);
  
} ) ()
*/

// 12. Привести разные типы значений к булевым.
/*
console.log(Boolean(0)); //false
console.log(Boolean('0')); //true
console.log(Boolean(false)); //false
console.log(Boolean('false')); //true
console.log(Boolean([])); //true
console.log(Boolean([].length)); //false
console.log(Boolean("")); //false
console.log(Boolean("something")); //true
*/

// 13. Баловство с prototype
/*
const womenNasty = {
  age: 22,
  hight: 165,
  firstName: 'nasty',
  sayHelloy: function () {
    console.log('Hellow!');
  }
}
Object.prototype.sayGoodbye = function(){
  console.log('Goodbye');
}

// 14. Напиши программу принимающая чилсо n, надо вернуть 2 строки со сведеньями о том, сколько четных числел и нечетных от 0 до n.

function sumOddAndEven (n) {
  let odd = 0;
  let even = 0;
  for (let i = 1; i <= n; i++) { 
    if (i % 2 === 1) {
      odd += 1;
    } else {
      even += 1;
    }
  }
  console.log(`От 1 до ${n} - ${even} четных числа и ${odd} нечетных числа`);
}

// 15. Напишите функцию multiplyArray(arr, multiplier), которая принимает массив чисел и множитель. Функция должна возвращать новый массив, где каждый элемент массива умножен на переданный множитель.

function multiplyArray(arr, multiplier = 2) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]*multiplier);
  }
  console.log(newArr);
}
multiplyArray([1,2,3,4,5,7,9,13,17,21], 9)
*/

/*
// 16. Напишите функцию findMostFrequent(arr), которая принимает массив и возвращает элемент, который встречается чаще всего. 
// Если таких элементов несколько, функция должна вернуть любой из них.

function findMostFrequent (arr) {
  let frequency = {};

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    
    if (frequency[item]) {
      frequency[item]++;
    } else {
      frequency[item] = 1;
    }
  };

  let maxCount = 0;
  let mostFrequencyItem = null;

  for (let item in frequency) {
    if (frequency[item] > maxCount) {
      maxCount = frequency[item];
      mostFrequencyItem = item;
    };
  };
  console.log(mostFrequencyItem);
};

findMostFrequent([1, 2, 3, 2, 3, 5, 6, 7, 3, 7, 7, 8, 7]);
*/