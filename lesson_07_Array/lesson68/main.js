var languages = [
    'JavaScript',
    'PHP',
    'Ruby',
];

// toString
console.log(languages.toString());

//join
console.log(languages.join(' - '));

//pop
console.log(languages.pop());// return deleted element
console.log(languages);

//push
console.log(languages.push('Java', 'Ruby'));// return length of array
console.log(languages);

//Shift
console.log(languages.shift());// return deleted element
console.log(languages);

//Unshift
console.log(languages.unshift('Golang','Node'));// return length of array
console.log(languages);

//Splicing
languages.splice(1,2);
console.log(languages);

languages.splice(1,1,'C#');
console.log(languages);

languages.splice(1,2,'Dart');
console.log(languages);

//Concat
var languages2 = [
    'Java',
    'Python'
];
var languages3 = languages.concat(languages2)
console.log(languages3);

//Slicing
console.log(languages3.slice(1,3));