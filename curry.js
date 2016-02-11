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
