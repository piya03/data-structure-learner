// Compare two arrays and return a new array with any items only found
//in one of the two given arrays, but not both. In other words, return the
// symmetric difference of the two arrays.

export default function DiffArray(arr1, arr2) {
  console.log("DiffArray -> arr2", arr2);
  console.log("DiffArray -> arr1", arr1);
  let res = [];
  function onlyInFirst(first, second) {
    for (let i = 0; i < first.length; i++) {
      if (!second.includes(first[i])) {
        res.push(first[i]);
      }
    }
  }
  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);
  return res;
}

//   let s = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
//   console.log(s)
