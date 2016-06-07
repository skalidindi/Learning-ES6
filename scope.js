function b() {
  console.log(myVar);
}

function a() {
  var myVar = 2;
  // function b() {
  //   console.log(myVar);
  // }
  console.log(myVar);
  b();
}

var myVar = 1;
console.log(myVar);
a();
