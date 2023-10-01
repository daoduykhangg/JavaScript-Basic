var courses = [
  {
    id: 1,
    name: 'Python',
    coin: 1
  },
  {
    id: 2,
    name: 'Java',
    coin: 2
  },
  {
    id: 3,
    name: 'NodeJS',
    coin: 3
  },
  {
    id: 4,
    name: 'C#',
    coin: 4
  },
  {
    id: 5,
    name: 'TypeScript',
    coin: 5
  },
  {
    id: 6,
    name: 'JavaScript',
    coin: 6
  },
  {
    id: 7,
    name: 'PHP',
    coin: 7
  },
];

var coursesList = courses.map((course, index) => {
  return {
    id: course.id,
    name: `Khoa hoc: ${course.name}`,
    coin: course.coin,
    coinText: `Gia ${course.coin}`,
    index: index
  }
})
console.log(coursesList);

var coursesNameList = courses.map((course) => {
  return {
    name: `Khoa hoc: ${course.name}`,
  } 
})
console.log(coursesNameList);