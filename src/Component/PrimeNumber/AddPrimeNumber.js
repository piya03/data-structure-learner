export default function AddPrimeNumber(num) {
  let res = 0;
  let j = 1;
  function isPrime(anynum) {
    for (let i = 2; i < anynum; i++) {
      if (anynum % i === 0) return false;
    }
    return anynum !== 1 && anynum !== 0;
  }

  while (j <= num) {
    if (isPrime(j)) {
      console.log(j, "hh");
      res += j;
    }
    j++;
  }
  return res;
}

// for(let j = 1; j <= num; i++){
//   if(isPrime(i)){
//    // console.log(i)
//     res += j
//   }
// }
