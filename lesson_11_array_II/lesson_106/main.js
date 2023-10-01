const sports = [
  {
      name: 'Bóng rổ',
      like: 6
  },
  {
      name: 'Bơi lội',
      like: 5
  },
  {
      name: 'Bóng đá',
      like: 10
  },
]

function getMostFavoriteSport(sports) {
  var sportsList = sports.filter((sport) => {
      return sport.like > 5;
    })
  return sportsList;
  }


// Kỳ vọng
console.log(getMostFavoriteSport(sports)) 
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]





