function b() {
  console.log(myVar);
}

function a() {
  var myVar = 2;
  // this is relative to the object it lives in.....
  console.log(this == global);
  console.log(myVar);
  b();
}

var myVar = 1;
console.log(this); // this would be window in browser... but empty in node
console.log(myVar);
a();
