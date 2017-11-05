function map(array, cb, context) {
  return function(array, cb) {
    var returnArray = [];
    for (var i = 0; i < array.length; i++) {
      returnArray.push(cb(array[i], i, array));
    }

    return returnArray;
  }.call(null, array, cb.bind(context))
}

module.exports = map;
