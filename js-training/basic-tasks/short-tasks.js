//_________________________________________________________//Копирование по ссылке//
// let b = {};
// let c;

// b.b = 1;
// c = b;
// c.b = 2;

// console.log("b =", b);                                     // {b: 2}
// console.log("b.b =", b.b);                                 // 2
// console.log("c =", c);                                     // {b: 2}
// console.log("c.b =", c.b);                                 // 2

//_________________________________________________________//Порядок вывода sync и async: 1 4 2 3//

// const a = new Promise((resolve, reject) =>
// resolve(console.log(1)))

// a.then(res => console.log(2))

// setTimeout(() => {
//     console.log(3)
// }, 0)

// console.log(4)

//_________________________________________________________//typeof для разных типов операндов//

// console.log(typeof typeof undefined)                       //string
// console.log(typeof)                                        //ERROR
// console.log(typeof [1,2,3,4,5])                            //object
// console.log(typeof Math.max())                             //number
// console.log(typeof ''.split('').reverse().join(''))        //string
// console.log(typeof null)                                   //object (БАГ)
// console.log(typeof undefined)                              //undefined

// const a = () => {} // console.log(typeof a)                //function

// (function() { return console.log(typeof arguments)})()     //object

// let symbol = Symbol("id")
// console.log(typeof symbol)                                 //symbol

//_________________________________________________________//.map и parseInt()//

// console.log([2,2,2,2].map((item, index) => {
//     console.log(parseInt(item, index))                     //[2,NaN,NaN,2]
//     console.log('item - ' + item)
//     console.log('index - ' + index)
// }))

//_________________________________________________________//setTimeout с циклом при let и var//

// for (let i=0; i < 10; i++) {                               // При var - 10 десяток, каждую секунду
//     setTimeout(function() {                                // При let - от 0 до 9, каждую секунду
//         console.log(i)
//     }, i * 1000)
// }

//_________________________________________________________//Стрелочная функция не имеет this и берёт его у родителя//

// function another() {
//   const compareNumbers = () => {
//     if (true) {
//       let a = 15;
//       console.log("in if block: ", a);
//     }
//     console.log(this);
//   };
//   compareNumbers();
//   console.log(this);
// }
// another();

//_________________________________________________________//Оператор объединения с null//

// const a = null
// const b = 2

// let check = a ?? b                                         // a, если значение a определено
// console.log(check)                                         // b, если значение a не определено.

//_________________________________________________________//Вызов функции при разном её объявлении//

// console.log(sayHi())
// const sayHi = function () {return 1}                       // Не инцилизирована
// const sayHi = () => {return 2}                             // Не инцилизирована
// function sayHi () {return 3}                               // 3

//_________________________________________________________//Оператор in, проверка на наличие ключа//

// const obj = {
//     key: "Yes"
// }
// console.log("Yes" in obj)

//_________________________________________________________//Использование свойств объекта в его методе//

// const user = {
//   name: "Hloya",
//   say() {
//     console.log(this.name);                              // Hloya
//   },
// };
// user.say();
//_________________________________________________________//

// function getMaxSubSum(arr) {
//     let maxSum = 0;
//     let partialSum = 0;

//     for (let item of arr) { // для каждого элемента массива
//       partialSum += item; // добавляем значение элемента к partialSum
//       maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
//       if (partialSum < 0) partialSum = 0; // ноль если отрицательное
//     }

//     return maxSum;
//   }

//   console.log( getMaxSubSum([-1, 2, 3, -9]) ); // 5

// _______________________________________________________//

// const resultString = "list-style-image".split("-").map((item, index) => {
//   return index > 0 ? item[0].toUpperCase() + item.slice(1) : item;
// });
// console.log(resultString.join(""));

// _______________________________________________________//

// let arr = [5, 3, 8, 1];
// const filterRangeInPlace = (arr, rangeStart, rangeEnd) => {
//     const resultList = arr.concat();
//     return resultList.filter(item => item <= rangeEnd && item >= rangeStart)
// }

// console.log(filterRangeInPlace(arr, 1, 4)); // [3, 1]

// _______________________________________________________//

// function compare() {
//     let compareValue = 0;

//     return function() {
//         compareValue++;
//         return compareValue;
//     }
// }
// const compareFunc = compare()
// console.log(compareFunc())
// console.log(compareFunc())
// console.log(compareFunc())

// _______________________________________________________//

// const arr = [
//     {name: 'width', value: 10},
//     {name: 'height', value: 10}
// ]

// function f(inputData) {
//     const resultObj = {}

//     for(let item of inputData) {
//         const name = item.name;
//         resultObj[name] = item.value;
//     }
//     return resultObj
// }
// console.log(f(arr))

// _______________________________________________________//

// var a = 5;

// (function () {
//     console.log(a)
//     var a = 10
// })()

// _______________________________________________________//

// const obj1 = {
//   name: "Maxim",
// };
// const obj2 = {
//   name: "Vitaliy",
// };

// function check() {
//   console.log(this.name);
// }
// check.call(obj2, ...args)
// check.apply(obj2, args)
// const newCheck = check.bind(obj2);
// newCheck();

// _______________________________________________________//

// const man = {
//   count_mans: '45%'
// }
// const peoples = {
//   сount: '100%'
// }
// peoples.__proto__ = man
// console.log(peoples.count_mans)

// _______________________________________________________//

// const peoples = {
//   сount: '100%',
//   man: false,
//   woman: false
// }
// const man = {
//   count_mans: '45%',
//   __proto__: peoples
// }
// for(let prop in man) {
//   console.log(Object.keys(prop))
// }

// man.__proto__ = peoples
// console.log(man.man)
// man.man = true
// console.log(man.man)
// console.log(peoples)

// _______________________________________________________//

// function Man(name) {
//   this.name = name;
// }
// const people = {
//   man: true,
// };

// Man.prototype = people;
// const man = new Man("Max");
// console.log(man); //name: 'Max'
// console.log(man.man); //true

// _______________________________________________________//

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// Rabbit.prototype = {};

// console.log(rabbit.eats);

// _______________________________________________________//

// class User {
//   constructor(name) {
//     this.name = name
//   }
//   sayHi() {console.log(this.name)}
// }
// const user = new User('max');
// console.log(user.name)

// _______________________________________________________//

// class Peoples {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }
//   saySurname() {
//     console.log(this.surname);
//   }
// }

// class Man extends Peoples {
//   sayName() {
//     console.log(this.name);
//   }
// }

// const people = new Man("Max", "Nikonov");
// people.sayName();
// people.saySurname();

// _______________________________________________________//

// function a() {

//   console.log(this)
//   c.call(d)

// }
// function c() {
//   console.log(this)
// }

// d = {
//   fa: '333',
// }
// b = {
//   ma: '123',
//   f: a
// }
// b.f()

// _______________________________________________________//

// const arr = [1, 2, 3, 4, 5];

// const a = (arr) => {
//   arr[0] = 10;
//   arr[1] = 20;
//   console.log(arr);
// };
// a(arr);
// console.log(arr);

// _______________________________________________________//

// function compare() {
//   let n = 10;

//   return function() {
//     return n *= n;

//   }
// }
// const compareFunc = compare()
// console.log(compareFunc())
// console.log(compareFunc())
// console.log(compareFunc())

// _______________________________________________________//

// function f() {
//   console.log(this.x);
// }
// f();

// С бекенда приходит массив такого вида:
// var arr = [
//     { name: 'width', value: 10 },
//     { name: 'height', value: 20 },
//     // ...
//   ];

//   // Нужно получить объект такого вида:
//   /*
//   {
//     width: 10,
//     height: 20,
//     ...
//   }
//   */

//   function objFromArr(arr) {
//       const resultObj = {};

//       for (let item of arr) {
//           const name = item.name;
//           resultObj[name] = item.value;
//       }
//       return resultObj;
//   }

//   function objFromArrReduce(arr) {
//       const resultObj = arr.reduce((prev, current) => {
//           const name = current.name;
//           prev[name] = current.value;
//           return prev;
//       }, {})

//       return resultObj;
//   }

//   /*
//   Необходимо написать функцию, которая тестирует входную строку на наличие правильной вложенности для скобок трёх видов "()", "[]", "<>".
//   testBrackets('[a] (b) <>'); // => true
//   testBrackets('[a] (b<)>'); // => false
//   testBrackets('<[(<a>)]>'); // => true
//   testBrackets('hello[ [w]orld(!)] <y[ande]x>!'); // => true
//   testBrackets('[>]'); // => false
//   testBrackets('hello () world ]'); // => false
//   testBrackets('empty'); // => true
//   testBrackets('(('); // => false
//   testBrackets('[>'); // => false
//   testBrackets(''); // => true
//   testBrackets('[]'); // => true
//   */

//   function testBrackets(inputString) {
//       const resultTest = [];
//       const bracketsObj = {
//           '[': ']',
//           '(': ')',
//           '<': '>',
//       };

//       for(let elem of inputString) {
//           if(elem === '(' || elem === '[' || elem === '<') {

//               resultTest.push(elem);
//           }
//           else if(elem === ')' || elem === ']' || elem === '>') {
//               if(elem === bracketsObj[resultTest[resultTest.length-1]]) {
//                   resultTest.pop(elem);
//               } else return false;
//           }
//       }

//       if(!reslutTest.length) return true;
//       else return false;
//   }

// console.log([] == []) //false, тк разные ссылки объектов
// console.log([] === []) //false, тк разные ссылки объектов

// for (var i = 1; i < 10; i++) { // 10 10 10 10 10 10 10 10 10 10
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// console.log(!![]);            //true
// console.log(!!0);             //false
// console.log(!!undefined);     //false
// console.log(!!null);          //false

// const a = { 1: 1, 2: 2, 3: 3 };
// const b = [1, 2, 3, 4, 5];

// for (let item in b) {          //итерирует и объекты и массивы, где item - индекс
//   console.log(b[item]);
// }

// for (let item of b) {          //итерирует только массивы, где item - значение (может итерировать
//   console.log(b[item]);        //объект, в котором присутствует Symbol.Iterator)
// }

// const obj = {                               // Клонирование объекта
//   name: "123",
//   surName: "456",
//   bar: {
//       bad: 2
//   }
// };
// const objClone = { ...obj };                // Через Spread-оператор (геттеры и сетторы игнорируются)
// const objClone = Object.assign({}, obj);    // Через метод Object.assing()
// let a = JSON.stringify(obj)                 // Используя JSON
// a = JSON.parse(a)
// console.log(obj.toString());                // [object Object]

// let arr = [1, 2, [3, 4, [5, 6]]];
// let arrFlat = arr.flat(2)           //[ 1, 2, 3, 4, 5, 6 ]

// __________________________________________________

// const foo = new Promise((resolve) => {})
// foo.then(res => bar = res)

// const bar = await foo();

// __________________________________________________

// const a = { f: 5, c: 6 };
// const b = a;
// console.log(a === b);

// __________________________________________________Closure

// const a = (b) => {
//   return (x) => console.log(`${b} a - ${x}`);
// };

// const firstFun = a("Name of var");
// firstFun("CLOSE");

// __________________________________________________

const a = {
    b: {
        v:1,
        s: {
            vv: 5,
            z: {
                x:2,
            }
        }
    }
}

let f = JSON.stringify(a)
f = JSON.parse(f)
console.log(f.b)

