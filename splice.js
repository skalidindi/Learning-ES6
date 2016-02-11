var arrayOne = ["a", "b", "c"],
    arrayTwo = [1, 2, 3, 4, 5],
    index = 2;

// array.splice(start, deleteCount[, item1[, item2[, ...]]])

// We want to push the starting index and the number of values we want
// to delete (in this case 0) onto the beginning of the first array.
arrayOne.unshift(index, 0);

// arrayOne = [2, 0, "a", "b", "c"]

// Next we want to apply the native splice method to arrayOne under
// the context of arrayTwo
Array.prototype.splice.apply(arrayTwo, arrayOne);

// [1, 2, "a", "b", "c", 3, 4, 5]
console.log(arrayTwo);
