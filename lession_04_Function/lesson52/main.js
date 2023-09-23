// 1.Declaration function

showMessage();
function showMessage() {
console.log('Declaration function');
}

// 2. Expression function
var showMessage2 = function() {
    console.log('Expression function');
}

showMessage2();
setTimeout(function() {

})

var myObject = {
    myFunction : function() {

    }
}
// 3. Arrow function