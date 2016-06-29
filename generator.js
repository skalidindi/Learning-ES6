function* bears() {
  yield 'grizzly'
  yield 'polar'
  return 'done';
}

var bear = bears();
console.log(bear.next());
console.log(bear.next());
console.log(bear.next());
