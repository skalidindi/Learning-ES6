Array.prototype.map = function map(mappingFunction) {
  var results = [];
  this.forEach(function(item) {
    results.push(mappingFunction(item));
  });
  return results;
}

Array.prototype.filter = function(predicateFunction) {
  var results = [];
  this.forEach(function(item) {
    if (predicateFunction(item)) {
      results.push(item);
    }
  });
  return results;
}

Array.prototype.reduce = function(reducingFunction, initialValue) {
  var result = initialValue;
  this.forEach(function(x) {
    reducingFunction(result, x)
  });
  return result;
}

Array.prototype.concatAll = function() {
  var results = [];
  this.forEach(function(subArray) {
    subArray.forEach(function(item) {
      results.push(item);
    });
  });
  return result;
}

Array.prototype.zip = function(left, right, combinerFunction) {
  var counter;
  var results = [];
  for(counter = 0; counter < Math.min(left.length, right.length); counter++) {
    results.push(combinerFunction(left[counter],right[counter]));
  }
  return results;
};
