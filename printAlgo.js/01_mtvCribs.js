//! Print a house in the Terminal
//* input gives you the floors

let input = 25;

function myCrib(n) {
  let img = "";
  let space = " ";
  let bottom = "_";
  for (let i = 0; i < n; i++) {
    img += `${space.repeat(n - i)}/${space.repeat(i * 2)}\\${space.repeat(
      n - i
    )}\n`;
  }
  img += `/${bottom.repeat(n * 2)}\\\n`;
  for (let i = 1; i < n; i++) {
    img += `|${space.repeat(n * 2)}|\n`;
  }
  img += `|${bottom.repeat(n * 2)}|`;
  console.log(img);
  return img;
}
myCrib(input);
