module.exports = function zeros(expression) {
  const factorials = expression.split("*");
  let result = [0, 0];

  let twoCount = 0,
    fiveCount = 0;

  let factorialType;
  let factorialsMap = [];

  for (let i = 0; i < factorials.length; i++) {
    if (factorials[i].endsWith('!!')) {
      factorialsMap.push([factorials[i].slice(0, -2), 2]);
    } else {
      factorialsMap.push([factorials[i].slice(0, -1), 1]);
    }
  }

  for (let i = 0; i < factorialsMap.length;) {
      let fact = factorialsMap[i];
      if (fact[0] % 2 == 0) {
        fact[0] /= 2;
        twoCount++;
        continue;
      }
      if (fact[0] % 5 == 0) {
        fact[0] /= 5;
        fiveCount++;
        continue;
      }

      fact[0] *= Math.pow(2, twoCount);
      result[1] += twoCount;
      twoCount = 0;

      fact[0] *= Math.pow(5, fiveCount);
      result[0] += fiveCount;
      fiveCount = 0;
      

      fact[0] -= fact[1];

      if (fact[0] < 2) {
        i++;
      }
  }
  return Math.min(...result);
}