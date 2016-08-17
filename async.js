import Rx from 'rx';

let source = Rx.Observable.interval(1000)
  .take(10)
  .flatMap(x => Rx.Observable.timer(1000).map(() => 2 * x));

source.subscribe(x => console.log(x));
