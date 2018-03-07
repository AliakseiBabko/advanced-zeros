module.exports = function getZerosCount(number, base) {
  // your implementation
  let divisors = [], pow, zeros = [], temp, counter = 0, i = 0;
  let simpleNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127];
  while (simpleNumbers[i] <= base/2) {
    if (base % simpleNumbers[i] == 0) {
      divisors.push(simpleNumbers[i]);
    }
    i++;
  }
  if (divisors.length === 0) {
    divisors.push(base);
  }
  for (let j = 0; j < divisors.length; j++) {
  pow = divisors[j];
  zeros.push(0);
  while (number >= pow) {
    zeros[j] += Math.floor(number / pow);
    pow *= divisors[j];
  }
  temp = base;
  counter = 0;
  while (temp % divisors[j] == 0) {
    counter++;
    temp /= divisors[j]; 
  }
  zeros[j] = Math.floor(zeros[j]/counter)
 }
 zeros.sort(function (a, b) {return a - b});
 return zeros[0];
}
