function countdown(number) {
  if(number > 0) {
    console.log(number);
    countdown(number - 1);
  }
}

countdown(10);
console.log('-----------------')
function tinhGiaiThua(num) {
  if(num > 0){
   return num * tinhGiaiThua(num - 1);
  }
  return 1;
}
console.log(tinhGiaiThua(4));