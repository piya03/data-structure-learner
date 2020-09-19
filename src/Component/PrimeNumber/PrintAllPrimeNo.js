export default function PrintAllPrimeNo(num) {
  let res = [];
  let j = 1;
  function isPrime(anynum) {
    for (let i = 2; i < anynum; i++) {
      if (anynum % i === 0) return false;
    }
    return anynum !== 1 && anynum !== 0;
  }
  while (j <= num) {
    if (isPrime(j)) {
      console.log(j, "all prime no");
      res.push(j);
    }
    j++;
  }
  return res;
}
