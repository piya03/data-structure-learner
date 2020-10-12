export default function SearchAndReplace(str, before, after) {
  console.log("SearchAndReplace -> after", after);
  console.log("SearchAndReplace -> before", before);
  console.log("SearchAndReplace -> str", str);
  let upperCase = after.charAt(0).toUpperCase() + after.slice(1);
  console.log(upperCase, "upperCase");
  let res = str.replace(before, upperCase);
  console.log(res);
  return res;
}
let see = SearchAndReplace(
  "He is Sleeping on the couch",
  "Sleeping",
  "sitting"
);
