Array.prototype.reduce2 = function (calback, results) {
  var i = 0
  if(arguments.length < 2){
    results = this[0];
    i = 1;
  }
  for (; i < this.length; i++){
    results = calback(results, this[i], i, this);
  }
  return results;
}
const numbers = [1,2,3,4,5];

const result = numbers.reduce2((total, num) => {
  return total + num;
})
console.log(result);
