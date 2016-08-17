const food = {
   init: function (type) {
      this.type = type;
   },
   eat: function () {
      console.log('you ate the ' + this.type);
   }
}

const waffle = Object.create(food);
const carrot = Object.create(food); // note object.create does not create a copy

carrot.init('carrot');
carrot.eat();

// You can defined food's eat to affact waffle's call of eat
food.eat = function() {
   console.log('YOU TOTALLY ATE THE '  + this.type.toUpperCase());
}

console.log(waffle);
waffle.init('waffle');
waffle.eat();
