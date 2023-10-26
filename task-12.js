function reverseStringWithException(str, exception) {
    const words = str.split(' ');
  
    for (let i = 0; i < words.length; i++) {
      if (words[i] === exception) {
        continue;
      }
  
      words[i] = words[i].split('').reverse().join('');
    }
    const reversedString = words.join(' ');
  
    return reversedString;
  }
  const string = "Hello World";
const exception = "World";

const reversedString = reverseStringWithException(string, exception);
console.log(reversedString); 