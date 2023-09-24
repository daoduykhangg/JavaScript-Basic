// create Array

var languages = [
    'Python',
    'Java',
    'JavaScript',
    function() {

    },
    {}
]
// Not use
 var language = new Array(1,2,3);
console.log(languages);
console.log(language);

// check is Array

console.log(Array.isArray(languages));
console.log(Array.isArray(new Array('a',2,3)));