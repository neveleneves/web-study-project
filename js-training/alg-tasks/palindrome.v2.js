// Palindrome v2.0

// ("Ш4л4ш") => true
// ("Eva, can I see bees in a cave?") => true
// ("Яндекс") => false
// ("Elma ade eeda am le")

const ToPalindrome = (inputWord) => {
  const updatedWord = inputWord.replace(/[^a-z0-9a-я]/gi, "");
  const lowerCaseWord = updatedWord.toLowerCase();

  let countSymbols = lowerCaseWord.length;
  let countSymbolsWord =
    countSymbols % 2 !== 0 ? (countSymbols - 1) / 2 : countSymbols / 2;

  let normalWord = lowerCaseWord.substring(0, countSymbolsWord);
  const palindromeWord = lowerCaseWord.substring(
    countSymbolsWord,
    countSymbols
  );

  let reverseWord = palindromeWord.split("").reverse().join("");
  if (normalWord.length > reverseWord.length) {
    normalWord = normalWord.slice(0, -1);
  } else if (normalWord.length < reverseWord.length) {
    reverseWord = reverseWord.slice(0, -1);
  }
  return normalWord === reverseWord;
};
const wordToPalindrome = "Eva, can I see bees in a cave?";
console.log(ToPalindrome(wordToPalindrome));
