function countWords(sentence) {
    sentence = sentence.trim();
    if (sentence === '') {
      return 0;
    }
    
    const words = sentence.split(' ');
    return words.length;
  }
  const sentence = "пупупуп пупуп уппу";
const wordCount = countWords(sentence);
console.log(wordCount);