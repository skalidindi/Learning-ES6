const food = {
   init: function (type) {
      this.type = type;
   },
   eat: function () {
      console.log('you ate the ' + this.type);
   }
}

// food.init('waffle');
// food.eat();

const waffle = Object.create(food);
const carrot = Object.create(food); // note object.create does not create a copy

food.eat = function() {
   console.log('YOU TOTALLY ATE THE '  + this.type.toUpperCase());
}
console.log(waffle);
waffle.init('waffle');
waffle.eat();

carrot.init('carrot');
carrot.eat();
