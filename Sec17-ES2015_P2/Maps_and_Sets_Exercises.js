
function countPairs(arr, num){
  var count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if ((arr[i] + arr[j]) === num) {
        count++;      
      }
    }
  }
  return count;
}

function countPairs_2(arr, num){
  var cache = new Set(arr);
  var count = 0;
  for (let val of arr) {
    cache.delete(val);
    if (cache.has(num - val)) {
      count++;
    }
  }
  return count;
}


