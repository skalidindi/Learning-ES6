// Given an unsorted array of n integers, find the highest product of k of the integers in the array.

var inputArray = [-5,-9,99,12,2,-81,54];
var k = 3;

function kLargestIntegers(arr, k) {
  var kLargestArr = [];
  arr = arr.sort(function(a, b) { return a - b });
  console.log('Sorted array', arr);
  var arrayStart = 0;
  var arrayEnd = arr.length - 1;

  if (arr.length < 1 || k < 1) return [];

  while(k > 0) {
    // var arrSize = arrayEnd - arrayStart + 1;

    // Even case
    if (k % 2 === 0) {
      k = k - 2;
      if (arr[arrayStart] * arr[arrayStart + 1] > arr[arrayEnd] * arr[arrayEnd - 1]) {
        console.log("Ran here!");
        kLargestArr.push(arr[arrayStart]);
        kLargestArr.push(arr[arrayStart + 1]);
        arrayStart += 2;
      } else {
        console.log("Ran here!");
        kLargestArr.push(arr[arrayEnd]);
        kLargestArr.push(arr[arrayEnd - 1]);
        arrayEnd -= 2;
      }
    }
    // Odd case
    else {
      k--;
      kLargestArr.push(arr[arrayEnd]);
      arrayEnd -= 1;
    }
  }

  return kLargestArr;
}

console.log(kLargestIntegers(inputArray, k));
