Array.prototype.myFilter = function(callback) {
  var arrOut = [];
  for (var index in this){
    if(this.hasOwnProperty(index)){
      var result = callback(this[index], index, this);
      if(result === true){
        arrOut.push(this[index]);
      }
    }
  }
  return arrOut;
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

var listCourse = courses.myFilter(function(course, index, arrOri) {
  return course.coin > 700;
})

console.log(listCourse);