function findingBadData(ageNumber) {
  const badData = [];
  for (let i = 0; i < ageNumber.length; i++) {
    if (ageNumber[i] < 0) {
      badData.push(ageNumber[i]);
    }
  }
  return badData.length;
}
const ageNumber = [10, 20, -30, -40, 50, 60, -70, -80];
console.log(findingBadData(ageNumber));