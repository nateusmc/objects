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

//4. Arrays of Objects

// const myarr = [];

// const obj1 = {
//   name: 'Nate',
//   job_title: 'Developer'
// };

// const obj2 = {
//   name: 'Adam',
//   job_title: 'Developer'
// };

// const obj3 = {
//   name: 'Elias',
//   job_title: 'Instructor'
// };

// myarr.push(obj1, obj2, obj3);
// console.log(myarr[0].name, myarr[0].job_title);
// console.log(myarr[1].name, myarr[1].job_title);
// console.log(myarr[2].name, myarr[2].job_title);


//5 Properties that aren't there

const myarr = [];

const obj1 = {
  name: 'Nate',
  title: 'Developer',
  boss: 'Chief'
};

const obj2 = {
  name: 'Adam',
  title: 'Developer',
  boss: 'Chieftess'
};

const obj3 = {
  name: 'Elias',
  title: 'Company Owner'
};


myarr.push(obj1, obj2, obj3);
 
myarr.forEach((worker) => {
  // console.log(worker.name, worker.title);
  if (worker.boss) {
    console.log(`${worker.title} ${worker.name} reports to ${worker.boss}`);
  } else {
    console.log(`${worker.title} ${worker.name} doesn't report to anybody.`);
  }
});


// console.log(let key in myarr[0]);

// console.log(myarr[0].name, myarr[0].title);
// console.log(myarr[1].name, myarr[1].title);
// console.log(myarr[2].name, myarr[2].title);
// console.log(myarr[0[0][1]]);