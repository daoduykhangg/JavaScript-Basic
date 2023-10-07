Array.prototype.forEach2 = function(callback) {
  for(var index in this){
    if(this.hasOwnProperty(index)){
      callback(this[index], index, this);
    }
  }
}

courses = [
  'Javascript',
  'Python',
  'NodeJS'
]

courses.forEach2(function(course, index, arrOri) {
  console.log(course, index, arrOri);
})