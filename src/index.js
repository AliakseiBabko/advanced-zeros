module.exports = function getZerosCount(number, base) {
  // your implementation
  let divisor = base;
  let simpleNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127];
  let zeros = 0, reminder, temp, counter = 0, i = 0;
  while (simpleNumbers[i] <= base/2) {
    if (base % simpleNumbers[i] == 0) {
      divisor = simpleNumbers[i];
    }
    i++;
  }
 let pow = divisor;
  while (number >= pow) {
    zeros += Math.floor(number / pow);
    pow *= divisor;
  }
  temp = base;
  while (temp % divisor == 0) {
    counter++;
    temp /= divisor; 
  }
  return Math.floor(zeros/counter);
}
