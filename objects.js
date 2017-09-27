'use strict';
// // //1

// // const loaf = {
// //   flour: 300,
// //   water: 210,
// //   hydration: function(){
// //     return (loaf.water / loaf.flour) * 100;
// //   }
// // };

// // console.log(loaf.flour, loaf.water);

// // console.log(loaf.hydration());


// //2

// const object1 = {
//   foo: 'Martial Art',
//   bar: 'Watering Hole',
//   fum: 5,
//   quux: function(){
//     return 'Fee fi fo fum';
//   },
//   spam: 'meat',
// };

// for (let key in object1) {
//   let value = object1[key];
//   // if the value is a function
//   if (typeof value === 'function'){
//     value = value();
//   }
//   // do something different with the assignment of value;

//   console.log(`The value of ${key} is ${value}.`);
//   // console.log(object1[key]);
// }

// // console.log(object1.quux) // => the body of the function

// // const farm = {
//   dog: 'corgi',
//   cat: 2,
//   cow: 4,
// };

// const desiredAnimal = 'cow';

// const randomProp = farm[desiredAnimal];
// console.log(randomProp);

// 3. Arrays in Objects


// const hobbit = {
//   meals: [
//     'breakfast', 
//     'second breakfast',
//     'elevenses',
//     'lunch',
//     'afternoon tea',
//     'dinner',
//     'supper'
//   ]
// };

// console.log(hobbit.meals[3]);
