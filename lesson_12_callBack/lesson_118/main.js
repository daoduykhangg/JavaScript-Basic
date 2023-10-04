//Map
Array.prototype.map2 = function(callback) {
  var arrayOut = [];
  var arrayLength = this.length;
  for(var i = 0;i<arrayLength;i++){
    var results = callback(this[i],i);
    arrayOut.push(results);
  }
  return arrayOut;
}

var courses = [
  "JavaScript",
  "Python",
  "NodeJS",
  "JavaScript"
]

var htmls = courses.map2(function(course) {
  return `<h1>${course}</h1>`;
})

console.log(htmls.join(''));

//Filter
Array.prototype.filter2 = function(callback) {
  var arrayOut = [];
  var arrayLength = this.length;
  for(var i = 0; i<arrayLength; i++){
    var results = callback(this[i],i);
    if(results === true){
      arrayOut.push(this[i]);
    }
  }
  return arrayOut;
}
var courseList = courses.filter2(function(course) {
  return course === 'JavaScript';
})

console.log(courseList);

//Find
Array.prototype.find2 = function(callback) {
  var arrayOut = [];
  var arrayLength = this.length;
  for(var i = 0; i<arrayLength; i++){
    var results = callback(this[i],i);
    if(results === true){
      arrayOut.push(this[i]);
      break;
    }
  }
  return arrayOut;
}
var courseList = courses.find2(function(course) {
  return course === 'JavaScript';
})

console.log(courseList);