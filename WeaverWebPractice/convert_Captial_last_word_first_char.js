let str="I am a developer"
const words = str.split(' ');
const lastWordIndex = words.length - 1;
words[lastWordIndex] = words[lastWordIndex].charAt(0).toUpperCase()+words[lastWordIndex].slice(1)
console.log(words.join(' '))