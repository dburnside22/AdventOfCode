module.exports.func = function (number, test) {
  const fs = require("fs");
  let fileName = `./${number}_data.txt`;
  if (test) {
    fileName = `./${number}_test_data.txt`;
  }
  const data = fs.readFileSync(fileName, "utf8");
  return data;
};
