// Check array for sameness

//!!!!!!!!!!!!!!!!!!!!!!!
const checkSameness = (listToCheck) => {
  for (let i = 0, prev = null; i != listToCheck.length; i++) {
    if (prev > listToCheck[i] && i) {
      return false;
    }
    prev = listToCheck[i];
  }
  return true;
};
const arrayCheckSameness = [0, 1, 5, 15, 4];
console.log(checkSameness(arrayCheckSameness));
