function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)]
}


var a = ['Dao','Duy','Khang']
console.log(getRandomItem(a));
console.log(Math.random());