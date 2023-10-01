
var sports = [
  {
      name: 'Bơi lội',
      gold: 11
  },
  {
      name: 'Boxing',
      gold: 3
  },
  {
      name: 'Đạp xe',
      gold: 4
  },
  {
      name: 'Đấu kiếm',
      gold: 5
  },
]
function getTotalGold(sports) {
var totalGold = sports.reduce((accumulator, currentVariable) => {
  return accumulator + currentVariable.gold;
}, 0)
return totalGold;
}


// Expected results:
console.log(getTotalGold(sports)) // Output: 23






