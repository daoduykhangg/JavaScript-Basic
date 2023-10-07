Array.prototype.myFilter = function(cb) {
  var arrOut = [];
  for (var index in this){
    if(this.hasOwnProperty(index)){
      var result = cb(this[index], index, this);
      if(result === true){
        arrOut.push(this[index]);
      }
    }
  }
  return arrOut;
}

/**
Expected results:

const numbers = [1, 2, 3, 4];

console.log(numbers.myFilter(function (number) {
    return number % 2 === 0;
})); Output: [2, 4]

console.log(numbers.myFilter(function (number, index) {
    return index % 2 === 0;
})); Output: [1, 3]

console.log(numbers.myFilter(function (number, index, array) {
    return array.length % 2 === 0;
})); Output: [1, 2, 3, 4]
 */


