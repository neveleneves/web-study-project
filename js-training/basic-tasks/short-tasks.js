//_________________________________________________________//
// let b = {};
// let c;

// b.b = 1;
// c = b; //by link
// c.b = 2;

// console.log("b =", b); // {b: 2}
// console.log("b.b =", b.b); // 2
// console.log("c =", c); // {b: 2}
// console.log("c.b =", c.b); // 2
//_________________________________________________________//

// console.log(1)

// const a = new Promise((resolve, reject) => resolve(console.log(2)))

// a.then(res => console.log(3))

// setTimeout(() => {
//     console.log(4)
// }, 0)

// console.log(5)

//_________________________________________________________//

// console.log(typeof typeof undefined)                   //string
// console.log(typeof)                                    //ERROR
// console.log(typeof [1,2,3,4,5])                        //object
// console.log(typeof Math.max())                         //number
// console.log(typeof ''.split('').reverse().join(''))    //string
// console.log(typeof null)                               //object (БАГ)
// console.log(typeof undefined)                          //undefined

// const a = () => {} // console.log(typeof a)            //function

// (function() { return console.log(typeof arguments)})() //object

// let symbol = Symbol("id")
// console.log(typeof symbol)

//_________________________________________________________//

// console.log([2,2,2,2].map((item, index) => {
//     console.log(parseInt(item, index))                 //[2,NaN,NaN,2]
//     console.log('item - ' + item)
//     console.log('index - ' + index)
// }))

//_________________________________________________________//

// for (let i=0; i < 10; i++) {                            // При let - 10 десяток, каждую секунду
//     setTimeout(function() {                             // При var - от 0 до 9, каждую секунду
//         console.log(i)
//     }, i * 1000)
// }

//_________________________________________________________//

// function another() {
//   const compareNumbers = () => {
//     if (true) {
//       let a = 15;
//       console.log("in if block: ", a);
//     }
//     console.log(this);
//       console.log("in if block: ", a);
//   };
//   compareNumbers();
//   console.log(this);
// }
// another();

//_________________________________________________________//

// const a = null
// const b = 2

// let check = a ?? b
// console.log(check)

//_________________________________________________________//

// console.log(sayHi())
// const sayHi = function () {return 1}                    // Не инцилизирована
// const sayHi = () => {return 2}                          // Не инцилизирована
// function sayHi () {return 3}                            // 3

//_________________________________________________________//

// const obj = {
//     key: "Yes"
// }
// console.log("key" in obj)

//_________________________________________________________//

// const user = {
//   name: "Hloya",
//   say() {
//     console.log(this.name);                              // Hloya
//   },
// };
// user.say();
// //_______________________________________________________//

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

const arr = [1, 2, 3, 4, 5];

const a = (arr) => {
  arr[0] = 10;
  arr[1] = 20;
  console.log(arr);
};
a(arr);
console.log(arr);

// _______________________________________________________//
