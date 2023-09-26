function User(firstName, lastanme, avatar){
    this.firstName = firstName,
    this.lastanme = lastanme,
    this.avatar = avatar
}

user = new User('Khang','Dao','Avatar');
user2 = new User('Duyen','Nguyen','Avatar');

//object prototype
User.prototype.className = 'F8';
User.prototype.getClassName = function() {
    return this.className;
}
console.log(user.className);
console.log(user2.getClassName());