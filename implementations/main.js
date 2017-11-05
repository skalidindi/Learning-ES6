var curry = require('./curry');
var map = require('./map');
var debounce = require('./debounce');

function add(a,b) {
  console.log("A plus b equals: ", a + b);
  return a + b;
}

// function multiplyBy2(a) {
//   return 2 * a;
// }

// var curried = curry(add);
// console.log(curried(29)(21));

// var by2 = map([1,2,3,4], multiplyBy2);
// console.log(by2);

var debouncedAdd = debounce(add, 1000, true);
debouncedAdd(5,2);
// debouncedAdd(9,4);
// debouncedAdd(3,7);
// debouncedAdd(8,7);
// debouncedAdd(1,2);




