//Object Contructor
function User(firstName, lastName, avatar) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.avatar = avatar,
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

var author = new User('Khang','Dao','Avatar');
var student = new User('Duyen','Nguyen','Avatar');

author.title = 'Senior QA Automation';
student.comment = 'very good!'

console.log(author);
console.log(student);
console.log(author.getFullName());
console.log(student.getFullName());