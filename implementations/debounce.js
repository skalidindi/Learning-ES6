// function debounce(fn, delay, immediate) {
//   var timeout = undefined;

//   return function() {
//     var context = this;
//     var originalArguments = Array.prototype.slice.call(arguments, 0);

//     var callNow = !timeout && immediate;

//     if (timeout) {
//       clearTimeout(timeout);
//     }
//     timeout = setTimeout(function() {
//       fn.apply(context, originalArguments);
//     }, delay);

//     if (callNow) {
//       fn.apply(context, originalArguments);
//     }
//   };
// }

function debounce(fn, delay, immediate) {
  var timeout = undefined;

  return function() {
    var context = this;
    var args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) fn.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, delay);
    if (callNow) fn.apply(context, args);
  }
}

module.exports = debounce;

module.exports = debounce;
