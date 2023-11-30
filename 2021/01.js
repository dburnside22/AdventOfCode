const getFile = require("./getFile.js");
data = getFile.func("01");

let totalIncreases = 0;

for (let i = 0; i < data.length; i++) {
  let firstThree = Number(data[i]) + Number(data[i + 1]) + Number(data[i + 2]);
  let secondThree =
    Number(data[i + 1]) + Number(data[i + 2]) + Number(data[i + 3]);

  if (firstThree < secondThree) {
    totalIncreases++;
  }
}

console.log(totalIncreases);
