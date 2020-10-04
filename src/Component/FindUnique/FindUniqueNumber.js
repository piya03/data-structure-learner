export default function FindUniqueNumber() {
  let res = [];
  let args = [...arguments];
  console.log(args.length, "f");
  let concat = [].concat(...args);
  console.log(concat, "concat");
  for (let i = 0; i < concat.length; i++) {
    if (concat.indexOf(concat[i]) === i) {
      res.push(concat[i]);
    }
  }
  return res;
}

// let se = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
// console.log(se)
