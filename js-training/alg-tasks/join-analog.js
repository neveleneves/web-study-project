// join() analog

const joinAnalog = (...inputArray) => {
  let resultJoinMethod = [];
  let symbolSeparation = typeof inputArray[0] === "string" ? inputArray[0] : "";

  inputArray.forEach((elem) => {
    if (typeof elem !== "string") {
      resultJoinMethod.push(elem);
      resultJoinMethod.push(symbolSeparation);
    }
  });
  return resultJoinMethod.join("");
};
console.log(joinAnalog(1, 0, 5, -11, 5, -11, 5, -11, 5, -11, 5, -11));
