

var course = {
    name: 'JavaScript',
    coin: 250
}

// if(course.coin > 0){
//     console.log(`${course.coin} coins`);
// }else{
//     console.log('Miễn phí');
// }

var result = course.coin > 0 ? `${course.coin} coins` : 'Miễn phí';

console.log(result);

