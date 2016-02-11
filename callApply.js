/**
 * The difference is that apply lets you invoke the function
 * with arguments as an array; call requires the parameters
 * be listed explicitly. A useful mnemonic is "A for array and C for comma."
 *
 * apply: fun.apply(thisArg, [argsArray]) (Accepts and array)
 * call: fun.call(thisArg[, arg1[, arg2[, ...]]])
 * (Accepts a dynamic series of params)
 *
 * Conversions
 * Array.prototype.slice.apply(arguments) converts arguments into an ARRAY.
 *
 * Turns arguments into an array for a function to call with
 * someFunction.apply(this, strings);
 */

function theFunction(name, profession) {
    console.log("My name is " + name + " and I am a " + profession + ".");
}
theFunction("John", "fireman");
theFunction.apply(undefined, ["Susan", "school teacher"]);
theFunction.call(undefined, "Claude", "mathematician");
theFunction("Santosh", "chemist");


// min/max number in an array
var numbers = [5, 6, 2, 3, 7];
// using Math.min/Math.max apply
var max = Math.max.apply(null, numbers);
// This about equal to Math.max(numbers[0], ...)
// or Math.max(5, 6, ...)
var min = Math.min.apply(null, numbers);
// vs. simple loop based algorithm
max = -Infinity, min = +Infinity;
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
  if (numbers[i] < min) {
    min = numbers[i];
  }
}

// Using call with i scoped as the this pointer
function greet() {
  var reply = [this.person, 'Is An Awesome', this.role].join(' ');
  console.log(reply);
}
var i = {
  person: 'Douglas Crockford', role: 'Javascript Developer'
};
greet.call(i); // Douglas Crockford Is An Awesome Javascript Developer


/**
 * Apply can be the best way to monkey-patch a built-in function of
 * Firefox, or JS libraries. Given someobject.foo function, you
 * can modify the function in a somewhat hacky way, like so:
 */
var originalMax = Math.max;
Math.max = function() {
  // Do stuff before calling function
  console.log(Array.prototype.slice.apply(arguments));
  // Call the function as it would have been called normally:
  return originalMax.apply(this, arguments);
  // Run stuff after, here.
}
console.log(Math.max(2,9,4,5));

