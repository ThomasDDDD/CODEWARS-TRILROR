console.clear();

let input = "jspvowbwopriosvn";

function solution(str) {
  const array = str.split("");
  let result = [];
  for (let i = 0; i < str.length; i += 2) {
    if ((array.length % 2 !== 0 && array.length > 2) || array.length % 2 === 0) {
      result.push(`${str[i]}${str[i + 1]}`);
      array.splice(0, 2);
    } else {
      result.push(`${str[i]}_`);
    }
  }
  console.log(result);
  return result;
}

solution(input);
