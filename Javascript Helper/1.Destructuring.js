// With Object
const person = {
   firstName: "yoshi",
   age: 30,
   favColor: "green",
};

// const firstName = person.firstName;
// const favColor = person.favColor;

const { firstName, favColor, age } = person;

console.log(firstName, favColor, age);

// With numbers
const nums = [7, 9, 3, 5, 2];
const [a, b, c] = nums;
console.log(a, b, c);

// With function
const getCalculations = (a, b) => {
   //    return {
   //       sum: a + b,
   //       diff: Math.abs(a - b),
   //       product: a * b,
   //    };

   return [a + b, Math.abs(a - b), a * b];
};

// const { sum, product, diff } = getCalculations(7, 9);
// console.log(sum, product, diff);

const [sum, diff, product] = getCalculations(7, 9);
console.log(sum, product, diff);

// Props in React component
const doSomething = ({ name }) => {
   console.log(name);
};

doSomething({ name: "shaun", age: 35 });
