export {};

// EXAMPLE 1 - Deep clone an Object and preserve its Type in TypeScript

const obj = {
  person: {
    name: {
      first: 'Bobby',
      last: 'Hadz',
    },
    address: {
      country: 'Chile',
      city: 'Santiago',
    },
  },
};

const copy = JSON.parse(JSON.stringify(obj)) as typeof obj;

console.log(copy);

// ---------------------------------------------------

// // EXAMPLE 2 - Create a Deep Copy of an Object using Lodash

// import cloneDeep from 'lodash.clonedeep';

// const obj = {
//   person: {
//     name: {
//       first: 'Bobby',
//       last: 'Hadz',
//     },
//     address: {
//       country: 'Chile',
//       city: 'Santiago',
//     },
//   },
// };

// const copy = cloneDeep(obj);

// console.log(copy);
