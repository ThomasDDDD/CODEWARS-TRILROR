console.clear();

let input = "akjlvlsuklvaikiiwg";

function onlyDuplicates(str) {
  // your code here
  let safe = str.split("");
  let out = "";

  for (let i = 0; i < str.length; i++) {
    safe.splice(i, 1);
    console.log(safe);
    if (safe.includes(str[i])) {
      safe.splice(i, 0, str[i]);
      out += `${str[i]}`;
    }
  }
  str = out;
  console.log(str);
  return str;
}
onlyDuplicates(input);
