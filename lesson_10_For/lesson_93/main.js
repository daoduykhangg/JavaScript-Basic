function getTotal(arr) {
    var total = 0;
    var arrayLength = arr.length;
    for (var i = 0; i < arrayLength; i++) {
        total += arr[i];
    }
    return total;
}

// Expected results
console.log(getTotal([1, 2, 3])); // Output: 6
console.log(getTotal([4, 5, -3])); // Output: 6
console.log(getTotal([4, 5, 3, 5])); // Output: 17
