const getFile = require("./getFile.js");
data = getFile.func("03", false);

let oxygen = data;
let co2 = data;

const length = oxygen[0].length;

for (let i = 0; i < oxygen[0].length; i++) {
  let zeros = 0;
  let ones = 0;
  oxygen.forEach((row) => {
    if (row[i] == "0") {
      zeros++;
    } else {
      ones++;
    }
  });
  const mostCommon = ones > 0 && zeros > ones ? "0" : "1";

  oxygen = oxygen.filter((element) => {
    return element.charAt(i) == mostCommon;
  });
}

for (let i = 0; i < length; i++) {
  let zeros = 0;
  let ones = 0;
  co2.forEach((row) => {
    if (row[i] == "0") {
      zeros++;
    } else {
      ones++;
    }
  });
  let leastCommon = "0";
  if (zeros > 0 && ones > 0) {
    leastCommon = ones < zeros ? "1" : "0";
  } else if (ones > 0) {
    leastCommon = "1";
  }

  co2 = co2.filter((element) => {
    return element.charAt(i) == leastCommon;
  });
}

console.log(parseInt(oxygen[0], 2) * parseInt(co2[0], 2));
