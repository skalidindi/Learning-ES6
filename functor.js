function plus1(value) {
   return value + 1;
}

console.log(plus1(3)); // 4
console.log(plus1([3, 4])); // Breaks

console.log([1,2].map(plus1));

let stringMap = (value, fn) => {
   let chars = value.split('');
   return chars.map((char) => {
      return String.fromCharCode(fn(char.charCodeAt(0)));
   });
};

let minus1 = (value) => {
   return value - 1;
}

console.log(stringMap('ABC', plus1));
console.log(stringMap('XYZ', minus1));

// Note map and stringFunctor are both functors.
// Functors are objects that implement a map method. For example,
// Array is a functor because it has an implementation of map.
//
// Most common example: Javascript array, stream, promises, trees.
