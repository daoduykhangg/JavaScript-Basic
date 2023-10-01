var courses = [
  {
    id: 1,
    name: 'Python',
    coin: 200
  },
  {
    id: 2,
    name: 'C#',
    coin: 0
  },
  {
    id: 3,
    name: 'Ruby',
    coin: 450
  },
  {
    id: 4,
    name: 'JavaScript',
    coin: 200
  },
  {
    id: 5,
    name: 'NodeJS',
    coin: 300
  },
  {
    id: 6,
    name: 'Python',
    coin: 200
  },
  {
    id: 7,
    name: 'Python',
    coin: 200
  }
]

courses.forEach((course, index) => {
  console.log(index);
    console.log(course);
})

var isFree = courses.every((course, index) => {
  console.log(index);
  return course.coin === 0;
})
console.log(isFree);

var isFree = courses.some((course, index) => {
  console.log(index);
  return course.coin === 0;
})
console.log(isFree);

var course = courses.find((course, index) => {
  return course.name === 'Python';
})

console.log(course);

var courseList = courses.filter((course, index) => {
  return course.name === 'Python';
})

console.log(courseList);