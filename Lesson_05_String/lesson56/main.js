//String 
var myString = '      Hoc JS tai F8! JS JS      ';

// 1.Length
console.log(myString.length);

// 2.Find index
console.log(myString.indexOf('JS'));

// 3. Cut string
console.log(myString.slice(4));

// 4. Replace
console.log(myString.replace(/JS/g, 'JavaScript'))

// 5. Convert to upper case
console.log(myString.toUpperCase());

// 6. Convert to lower case
console.log(myString.toLowerCase());

// 7. Trim
console.log(myString.trim());

// 8. Split
var languages = 'Javascript, Python, PHP, C#';
console.log(languages.split(', '));
console.log(languages.split(''));

// 9. Get a character by index
var fullName = 'Jackson';
console.log(fullName[4]);
console.log(fullName[15]);

console.log(fullName.charAt(3));
console.log(fullName.charAt(10));
