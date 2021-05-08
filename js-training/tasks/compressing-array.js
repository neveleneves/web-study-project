// Compress unsorted array of integers
const compressArray = (inputArray) => {
  if (!inputArray) return "Array is empty";

  let sortedArray = inputArray.sort((a, b) => a - b);
  let resultArray = [],
    range = 0;

  for (let i = 0, prev = 0; i !== sortedArray.length; i++) {
    if (sortedArray[i] - 1 !== prev && i) {
      if (!range) {
        resultArray.push(prev);
      } else {
        resultArray.push(`${sortedArray[i - (range + 1)]}-${prev}`);
        range = 0;
      }
      if (i === sortedArray.length - 1) {
        resultArray.push(sortedArray[i]);
        break;
      }
    } else if (sortedArray[i] - 1 === prev && i) {
      if (i === sortedArray.length - 1) {
        resultArray.push(`${prev}-${sortedArray[i]}`);
        break;
      }
      range++;
    }
    prev = sortedArray[i];
  }
  return resultArray.toString();
};
const arrayForCompress = [-24, 1, 6, 2, 3, 5, 9, 8, 41, 11, 42, 52, 10];
console.log(compressArray(arrayForCompress));
