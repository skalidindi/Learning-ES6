class Square {
   get area() {
      return this.height * this.width;
   }

   set area(value) {
      this.area = value;
   }

   test() {
      console.log(this.area)
   }

   constructor(length) {
      this.height = length;
      this.width = length;
      this.name = 'Square';

      this.test();
   }
}

let sq = new Square(10);
