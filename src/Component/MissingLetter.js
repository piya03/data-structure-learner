export default function MissingLetter(str) {
  console.log("MissingLetter -> str", str);
  for (let i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);
    console.log(code);
    if (code !== str.charCodeAt(0) + i) {
      /* if current character has escaped one character find previous char and return */
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}
