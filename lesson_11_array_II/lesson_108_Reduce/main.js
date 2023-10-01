var courses = [
  {
    id: 1,
    name: 'Python',
    coin: 100
  },
  {
    id: 2,
    name: 'Java',
    coin: 200
  },
  {
    id: 3,
    name: 'NodeJS',
    coin: 300
  },
  {
    id: 4,
    name: 'C#',
    coin: 400
  },
  {
    id: 5,
    name: 'TypeScript',
    coin: 500
  },
  {
    id: 6,
    name: 'JavaScript',
    coin: 600
  },
  {
    id: 7,
    name: 'PHP',
    coin: 700
  },
];

var total = courses.reduce((accumulator,currentValue) => {
  return accumulator + currentValue.coin;
}, 0)

console.log(total);