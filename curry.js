import _ from 'lodash';

let dragon =
   name =>
      size =>
         element =>
            name + ' is a ' +
            size + ' dragon that breathes ' +
            element + '!';
let fluffykinsDragon = dragon('fluffykins');
let tinyDragon = fluffykinsDragon('tiny');
console.log(tinyDragon('lightning'));
console.log(dragon('fluffykins')('tiny')('lightning'));

let dragon2 = (name, size, element) =>
   name + ' is a ' +
   size + ' dragon that breathes ' +
   element + '!';
dragon2 = _.curry(dragon2);
console.log(dragon2('fluffykins')('tiny')('lightning'));

let dragons = [
   {name: 'fluffykins', element: 'lightning'},
   {name: 'noomi', element: 'lightning'},
   {name: 'kari', element: 'fire'},
   {name: 'doomer', element: 'timewarp'}
];

let hasElement =
   _.curry((element, obj) => obj.element === element);

let lightningDragons = dragons.filter(hasElement('lightning'));
console.log(lightningDragons)

let curry = (fx, ...args) => {
  let arity = fx.length;
  return (...args2) => {
    if (args.length >= arity) {
      console.log(args);
      return fx.apply(null, args);
    }
    else {
      return () => {
        return fx.apply(args.concat(args2));
      }
    }
  }
}

function curry(fx) {
  var arity = fx.length;

  return function f1() {
    var args = Array.prototype.slice.call(arguments, 0);
    if (args.length >= arity) {
      return fx.apply(null, args);
    }
    else {
      return function f2() {
        var args2 = Array.prototype.slice.call(arguments, 0);
        return f1.apply(null, args.concat(args2));
      }
    }
  };
}

let curry = (fx) => {
  let arity = fx.length;
  let f1 = (...args) => {
    console.log(args);
    if (args.length >= arity) {
      return fx.apply(null, args);
    } else {sdf
      return (...args2) => {
        // let args2 = Array.prototype.slice.call(arguments, 0);
        return f1.apply(null, args.concat(args2));
      }
    }
  };
  return f1;
}

let sumFour = curry((w,x,y,z) => {
  return w + x + y + z;
});

let f1 = sumFour(10)(4)(3)(2);
let f2 = sumFour(10,4)(3)(2);
let f3 = sumFour(10)(2,3)(4);

console.log(f1);
console.log(f2);
console.log(f3);
