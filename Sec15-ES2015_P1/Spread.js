var arr1 = [1,2,3];
var arr2 = [4,5,6];
var arr3 = [7,8,9];

var combined;

// ES5
combined = arr1.concat(arr2).concat(arr3);

// ES6
combined = [...arr1, ...arr2, ...arr3];

console.log(combined);
