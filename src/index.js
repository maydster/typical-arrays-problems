
exports.min = function min (array) {
  if(array == null) return 0;
  let min = 0;
  for(let i of array) {
    if(i < min) min = i;
  }
  return min;
}

exports.max = function max (array) {
  if(array == null) return 0;
  let max = 0;
  for(let i of array) {
    if(i > max) max = i;
  }
  return max;
}

exports.avg = function avg (array) {
  if(!(Array.isArray(array)) || array.length == 0) return 0;
  let avg=0;
  for(let i of array) {
    avg+=i;
  }
  return (avg)/array.length;
}
