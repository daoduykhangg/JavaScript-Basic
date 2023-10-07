Array.prototype.mySome = function(callback) {
  for (var index in this){
    if(this.hasOwnProperty(index)){
      var result = callback(this[index], index, this);
      if(result){
        return true;
      }
    }
  }
  return false;
}

courses = [
  {
    name: 'JavaScript',
    coin: 680
  },
  {
    name: 'PHP',
    coin: 860
  },
  {
    name: 'Python',
    coin: 980
  }
]

var result = courses.mySome(function(course, index, arrOri) {
  return course.coin > 700;
})

console.log(result);