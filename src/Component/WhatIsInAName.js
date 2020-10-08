export default function WhatIsInAName(collection, source) {
  let sourceKey = Object.keys(source);
  console.log(sourceKey, "sourceKey");
  return collection.filter((each) => {
    console.log(each);
    for (let i = 0; i < sourceKey.length; i++) {
      if (
        each.hasOwnProperty(sourceKey[i]) &&
        each[sourceKey[i]] === source[sourceKey[i]]
      ) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  });
}

//   let s = whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }],

//    { "apple": 1, "bat": 2 })

//   console.log(s)
