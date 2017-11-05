function currying(func) {
  var totalArgs = func.length;
  console.log("Total args: ", totalArgs);

  var partial = function(args) {
    console.log("partial outer ran!");
    return function() {
      console.log("partial ran!");
      console.log("Partial Arguments: ", arguments);
      var newArgs = Array.prototype.slice.call(arguments, 0);
      return fn.apply(null, args.concat(newArgs));
    };
  };

  var fn = function() {
    console.log("fn ran!");
    console.log("Arguments: ", arguments);
    var args = Array.prototype.slice.call(arguments, 0);
    if (totalArgs > args.length) {
      return partial(args);
    } else {
      return func.apply(null, args);
    }
  }
  return fn;
}

module.exports = currying;
