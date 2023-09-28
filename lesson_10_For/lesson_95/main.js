var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]
 
function getTotal(arr) {
     var arrlength = arr.length
     var total = 0;
     for(var i =0; i < arrlength; i++){
        total += arr[i].price;
     }
     return total;
}


// Expected results:
console.log(getTotal(orders)); // Output: 8700000
