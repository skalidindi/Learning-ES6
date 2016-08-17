var _ = require('lodash');

var person = {
  firstName: 'Default',
  lastName: 'Default',
  getFullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};

var santosh = {
  firstName: 'Santosh',
  lastName: 'Kalidindi'
};

// Don't do this but simply to show inheritance
santosh.__proto__ = person;
console.log(santosh.getFullName());

// -------------------------------------------------------------------------------------------------

// Instead do this with functional constructors...
function Person(firstName, lastName) {
  console.log('Person consturctor ran!');
  this.firstName = firstName;
  this.lastName = lastName;
}
Person.prototype.getFullName = function () {
  return this.firstName + ' ' + this.lastName;
}

function Santosh(firstName, lastName) {
  console.log('Santosh consturctor ran!');
  Person.call(this, firstName, lastName);
  this.age = 25;
}
Santosh.prototype = Object.create(Person.prototype, {
    p: {
      writable: true,
      configurable: true,
      value: function() {
        return "WOAH!";
      }
    }
  }
); // creates new scope
// Santosh.prototype = Person.prototype; // this is bad because modifying santosh's prototype changes person's as well.
Santosh.prototype.constructor = Santosh; // important so type is Santosh and not Person
Santosh.prototype.awesome = function () {
  return this.firstName + ' is awesome!';
}

// The new keyword create an empty object and invokes the function with this pointing to the
// newly created empty object
var person = new Person('John', 'Doe');
var santosh = new Santosh('Santosh', 'Kalidindi');
console.log(person.getFullName());
console.log(santosh);
console.log(santosh.p());
console.log(santosh.awesome());
console.log(santosh.getFullName());
// console.log(person.awesome()); // should fail

// -------------------------------------------------------------------------------------------------

// Another example from
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create

// Shape - superclass
function Shape() {
  this.x = 0;
  this.y = 0;
}

// superclass method
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};

// Rectangle - subclass
function Rectangle() {
  Shape.call(this); // call super constructor.
}

// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();
console.log(rect);

console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle);// true
console.log('Is rect an instance of Shape?', rect instanceof Shape);// true
rect.move(1, 1); // Outputs, 'Shape moved.'

// -------------------------------------------------------------------------------------------------

// // If you wish to inherit from multiple objects then mixins are possible...
function SuperClass() {
  this.varA = 'a';
}
SuperClass.prototype.a = function() {
  return 'SuperClass';
}

function OtherSuperClass() {
  this.varB = 'b';
}
OtherSuperClass.prototype.b = function() {
  return 'OtherSuperClass';
}

function MyClass() {
  SuperClass.call(this);
  OtherSuperClass.call(this);
  this.varC = 'c';
}

MyClass.prototype = Object.create(SuperClass.prototype); // inherit
_.extend(MyClass.prototype, OtherSuperClass.prototype); // mixin
MyClass.prototype.constructor = MyClass;

MyClass.prototype.c = function() {
  return 'MyClass';
};

var myClass = new MyClass();
console.log(myClass);
console.log(myClass.a());
console.log(myClass.b());
console.log(myClass.c());
