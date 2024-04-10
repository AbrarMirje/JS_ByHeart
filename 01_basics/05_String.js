const gameName = new String('java-script')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

// slice can take negative values also
const anotherString = gameName.slice(-6, 8)
console.log(anotherString);


const newStringOne = "    abrar    "
console.log(newStringOne.trim());

const url = "https://www.google.com/wikipidia%20wildanimals"
console.log(url.replace("%20", "-"));
console.log(url.includes('google'))



const userName = 'abrar-ab-cd'
console.log(userName.split('-')); // returns an array of strings