export default function SeekAndDestroy(arr) {
  console.log("SeekAndDestroy -> arr", arr);
  let args = [...arguments];
  let other = args.slice(1);
  console.log(other, "otherother");
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!other.includes(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
}

// let s = SeekAndDestroy([1, 2, 3, 1, 2, 3], 2, 3);
// console.log(s);
