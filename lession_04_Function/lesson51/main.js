// overide function
function showMessage() {
    console.log('Message 1');
}

function showMessage() {
    console.log('Message 2');
}

function showMessage() {
    console.log('Message 3');
}

showMessage();


// Variable in function
function showFullname() {
    var fullName = 'Dao Duy Khang';
    console.log(fullName);
}

showFullname();

// function in function
function showInfor() {
    function showAge() {
        console.log(23);
    }
    showAge();
}

showInfor();