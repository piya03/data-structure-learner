export default function Fibonacci(num) {
  const fibArr = [0, 1];
  for (let i = 2; i <= num; i++) {
    fibArr.push(fibArr[i - 2] + fibArr[i - 1]);
  }
  return fibArr;
}
