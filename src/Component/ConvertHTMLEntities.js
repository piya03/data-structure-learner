export default function ConvertHTMLEntities(str) {
  console.log("ConvertHTMLEntities -> str", str);
  var splitStr = str.split("");
  for (var i = 0; i < splitStr.length; i++) {
    switch (splitStr[i]) {
      case "<":
        splitStr[i] = "&lt;";
        break;
      case "&":
        splitStr[i] = "&amp;";
        break;
      case ">":
        splitStr[i] = "&gt;";
        break;
      case '"':
        splitStr[i] = "&quot;";
        break;
      case "'":
        splitStr[i] = "&apos;";
        break;
    }
  }

  splitStr = splitStr.join("");
  return splitStr;
}

//test here
//   let s = ConvertHTMLEntities("Dolce & Gabbana");
//   console.log(s)
