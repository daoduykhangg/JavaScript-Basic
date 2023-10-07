Array.prototype.myEvery = function(callback) {
  for (var index in this){
    if(this.hasOwnProperty(index)){
      var result = callback(this[index], index, this);
      if(result === false){
        return false;
      }
    }
  }
  return true;
}

courses = [
  {
    name: 'JavaScript',
    coin: 860
  },
  {
    name: 'PHP',
    coin: 680
  },
  {
    name: 'Python',
    coin: 980
  }
]

var result = courses.myEvery(function(course, index, arrOri) {
  return course.coin > 700;
})

console.log(result);