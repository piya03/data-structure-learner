export default function PrintAllPrimeNo(num) {
  let res = [];
  function isPrime(anynum) {
    for (let i = 2; i < anynum; i++) {
      if (anynum % i === 0) return false;
    }
    return anynum !== 1 && anynum !== 0;
  }

  return res;
}
