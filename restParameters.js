// Rest parameters
let vegetables = ['parsnip', 'potato'];
let moreVegs = ['celery', 'beetroot'];
let copyVegetables = [];
let copyVegetablesNew = [];

// es6
copyVegetables.push(...vegetables, ...moreVegs);

// old way
Array.prototype.push.apply(copyVegetablesNew, vegetables);
Array.prototype.push.apply(copyVegetablesNew, moreVegs);

console.log(copyVegetables); // ['parsnip', 'potato', 'celery', 'beetroot']
console.log(copyVegetablesNew);

let sum = function() {
   return Array.prototype.reduce.call(arguments, (prev,curr) => {
      return prev + curr;
   });
};
let sum2 = function(...args) {
   return args.reduce((prev,curr) => {
      return prev + curr;
   });
};
console.log( sum2(2,3,4,5) );

let numbers = [4,6,3,8];
let max = Math.max.apply(null, numbers);
let max = Math.max(...numbers);

