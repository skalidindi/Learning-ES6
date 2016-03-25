import Rx from 'rx';
import 'isomorphic-fetch';

// Dynamic value of a (must be assigned during declaration!)
var Observable = Rx.Observable;

var streamA = Observable.of(3, 4);
var streamB = streamA.map(a => 10 * a);

streamB.subscribe(b => console.log(b));

// HTTP Get call which returns a promise
var requestStream = Observable.just('https://api.github.com/users');

let responseStream = requestStream.flatMap(requestUrl => {
      console.log('Fetching data...');
      // Thx to share replay we only make 1 network request
      // and reuse the same json data afterwards....
      return Observable.fromPromise(
         fetch(requestUrl)
         .then(response => response.json())
      )
   }
)
.shareReplay(1);

let createSuggestionStream = (responseStream) => {
   return responseStream.map(listUser => listUser[Math.floor(Math.random() * listUser.length)]
   )
   // c.startWith(null)
   .merge(requestStream.map(ev => null));
}

let suggestion1Stream = createSuggestionStream(responseStream);
let suggestion2Stream = createSuggestionStream(responseStream);
let suggestion3Stream = createSuggestionStream(responseStream);

suggestion1Stream.subscribe(user => {
   console.log(user ? user.login : "Loading user!!")
});

suggestion2Stream.subscribe(user => {
   console.log(user ? user.login : "Loading user!!")
});

suggestion3Stream.subscribe(user => {
   console.log(user ? user.login : "Loading user!!")
});
