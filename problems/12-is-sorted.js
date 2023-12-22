/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/


function isSorted(arr) {
  if(arr.length === 2) return arr[0] < arr[1];
  for (let index = 0; index < arr.length; index++) {
    let newArr = [arr[index], arr[index + 1]];
    return isSorted(newArr);
  }
}

console.log(isSorted([1, 2, 4, 3, 5]));
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
