//Sum All Odd Fibonacci Numbers
//positive integer num, return the sum of all odd
//Fibonacci numbers that are less than or equal to num.
//The first two numbers in the Fibonacci sequence are 1 and 1. Every additional
//number in the sequence is the sum of the two previous numbers.
//The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

//For example, sumFibs(10) should return 10 because all odd Fibonacci
// numbers less than or equal to 10 are 1, 1, 3, and 5.

export default function SumOddFibonacci(num) {
  let fibNo = [1, 1];
  let sumAllOdd_number = 0;
  for (let i = 2; i < num; i++) {
    fibNo.push(fibNo[i - 2] + fibNo[i - 1]);
  }
  for (let j = 0; j < fibNo.length; j++) {
    if (fibNo[j] % 2 !== 0 && fibNo[j] <= num) {
      sumAllOdd_number += fibNo[j];
    }
  }
  return sumAllOdd_number;
}
