function run(object) {
    var arr = [];
    for (var key in object) {
        if(key === 'name'){
            arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
        }else{
            arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
        }
    }
    return arr;
}

// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]