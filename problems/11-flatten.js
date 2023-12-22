/***********************************************************************
  Write a recursive function called `flatten` that takes a single array with
  any number of nested arrays and returns and array with all the nested
  contents on one level.

  Do not use the built in Array.flat.

  Examples:

  flatten([]); // []
  flatten([1, 2]); // [1, 2]
  flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(arr) {
  // if(arr.length === 0) return [];
  // for (const element of arr) {
  //   if(Array.isArray(element)) {
  //     return flatten(element);
  //   }
  //   return Array.of(element, ...flatten(arr.splice(1)));
  // }

  let result = [];

  arr.forEach(element => {
    if(Array.isArray(element)) result = result.concat(flatten(element))
    else result.push(element);
  });

  return result;
}
  
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
  