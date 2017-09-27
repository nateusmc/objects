'use strict';
// //1

// const loaf = {
//   flour: 300,
//   water: 210,
//   hydration: function(){
//     return (loaf.water / loaf.flour) * 100;
//   }
// };

// console.log(loaf.flour, loaf.water);

// console.log(loaf.hydration());


//2

const object1 = {
  foo: 'Martial Art',
  bar: 'Watering Hole',
  fum: 5,
  quux: function(){
    return 'Fee fi fo fum';
  },
  spam: 'meat',
};

for (let key in object1) {
  console.log(key);
}

//   let i = 0; i < object1.length; i++
// }