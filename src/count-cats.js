const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {    
  let counter = 0;
  for (let item of backyard) {
    for (let innerElem of item) {
      if (innerElem==='^^') {
        counter++;
      }
    }
  }
  return counter;
};
