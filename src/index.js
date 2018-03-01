module.exports = function getZerosCount(number, base) {
  // your implementation
  let divisors = [];
  let zeros = 0, finalDivisor, reminder;  
  if (base < 3) {
    finalDivisor = base
  } else {
    for (let i = 3; i < base; i += 2) {
      if (base % i == 0) {
        divisors.push(i);
      }
    }
  }
  if (divisors.length == 0 && base == 2) {
    finalDivisor = 2;
  }
  else if ((divisors.length == 0) && (base % 2)) {
    finalDivisor = base;
  }
  else if ((divisors.length == 0) && !(base % 2)) {
    finalDivisor = base/2;
  }
  else if (divisors.length == 1) {
    finalDivisor = divisors[0];
  }
  else if (divisors.length == 2) {
    finalDivisor = divisors[1];
  }
  else if (divisors.length > 2) {
    for (let i = divisors.length; i > 1; i--) {
      if ((divisors[i] == divisors [0]*divisors[1]) || (divisors[i] = divisors [0]*divisors [0]) || (divisors[i] = divisors [1]*divisors [1])) {
        divisors.pop();
      };
    }
    finalDivisor = divisors[divisors.length-1];
  }  
  reminder = finalDivisor;
  while (number >= reminder) {
    zeros += Math.floor(number / reminder);
    reminder *= finalDivisor;
  }
  return zeros;
}
