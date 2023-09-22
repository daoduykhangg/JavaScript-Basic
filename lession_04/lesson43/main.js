function writeLog(message, message2) {
   console.log(message);
   console.log(message2);
}
writeLog('TEST', 'TEST_2');


//Arguments
function writeLog2() {
    var myString = '';
for (var param of arguments){
    myString += `${param} - `
}
console.log(myString)
}
writeLog2('Log 1', 'Log 2', 'Log 3');