function getRandNumbers(min, max, length) {
    var array = [];
    for (var i = 0; i < length; i++){
        var randNumber = Math.floor(Math.random() * (max - min) + min);
        array.unshift(randNumber);
    }
    return array;
}

console.log(getRandNumbers(10,100,5));