// Object in Javascript
var myInfor = {
    name: 'KhangDao',
    age: '27',
    address: 'HCM, VN',
    getName: function() {
        return this.name;
    }
}
console.log(myInfor.name);
console.log(myInfor['address']);
console.log(myInfor.age);
myInfor.email = 'duykhang@gmail.com';
var keyCompany = 'company';
myInfor[keyCompany] = 'PizzaHut';

delete myInfor.email;

//Function -> phuong thuc
// Other -> thuoc tinh

console.log(myInfor);
console.log(myInfor.getName());