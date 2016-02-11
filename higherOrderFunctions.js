import _ from 'lodash';
import fs from 'fs';

// Sample higher order function
var triple = function(x) {
   return x * 2;
}
var waffle = triple;
console.log(waffle(30));

var animals = [
   { name: 'Fluffykins', species: 'rabbit'},
   { name: 'Caro', species: 'dog'},
   { name: 'Hamilton', species: 'dog'},
   { name: 'Harold', species: 'fish'},
   { name: 'Ursula', species: 'cat'},
   { name: 'Jimmy', species: 'fish'}
];

// filter
var isDog = animal => animal.species === 'dog';
var dogs = animals.filter(isDog);
var otherAnimals = _.reject(animals, isDog);
console.log(dogs);
console.log(otherAnimals);

// map
var names = animals.map(animal => animal.name + ' is a ' + animal.species);
console.log(names);

// reduce
var orders = [
   { amount: 250 },
   { amount: 400 },
   { amount: 100 },
   { amount: 325 }
];

var totalAmount = orders.reduce((sum, order) => sum += order.amount , 0);
console.log(totalAmount);

// advanced reduce
var output = fs.readFileSync('data.txt', 'utf8')
   .trim()
   .split('\n')
   .map(line => line.split(','))
   .reduce((customers, line) => {
      customers[line[0]] = customers[line[0]] || [];
      customers[line[0]].push({
         name: line[1].trim(),
         price: line[2].trim(),
         quantity: line[3].trim()
      });
      return customers;
   }, {});
console.log('output', JSON.stringify(output, null, 2));


// find
var isFish = animal => animal.species === 'fish';
var firstFish = animals.find(isFish);
console.log(firstFish);
