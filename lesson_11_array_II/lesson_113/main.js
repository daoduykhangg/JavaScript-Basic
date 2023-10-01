// Expected results:
var arr = [
  ['name', 'Sơn Đặng'],
  ['age', 18],
];
function arrToObj(arr) {
  var objectInfor = arr.reduce((object, array) => {
    object[array[0]] = array[1];
    return object;
  },{});
  return objectInfor;
}
// arrToObj(arr)
console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }
