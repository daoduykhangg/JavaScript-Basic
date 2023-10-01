var course1 = [
  'Java',
  'Python',
  'JavaScript',
  'NodeJS'
]
var course2 = [
  'C#',
  'Python',
  'JavaScript',
  'Golang'
]

var course3 = course1.concat(course2);
var course4 = [];
course3.forEach(course => {
  if(!course4.includes(course)){
    course4.unshift(course);
  }
})
console.log(course4);