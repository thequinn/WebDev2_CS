// ES5
function sumArguments() {
  var total = 0;
  for (var  i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

// ES6
var sumArguments_3 = (...args) => args.reduce((acc, next) => acc + next);


var result;
//result = sumArguments(5,5,6);
//result = sumArguments_2(5,5,6);
result = sumArguments_3(5,5,6);
console.log(result);

