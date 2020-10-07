const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {repeatTimes=0, separator='+', addition='', additionRepeatTimes=0, additionSeparator='|'}) {
  str = str + '';
  separator = separator + '';
  addition = addition + '';
  additionSeparator = additionSeparator + '';

  let additionString = '';
  let mainString = '';

  if (addition !== '') {
    if (additionRepeatTimes !== 0 ) {
      additionString += addition;
      let n=2;
      while (n<=additionRepeatTimes) {
        additionString +=additionSeparator + addition;
        n++;
      }
    } else if (additionRepeatTimes === 0 || additionRepeatTimes === 1) {
      additionString += addition;
    }
  }
  

  if (str !== '') {
    if (repeatTimes !== 0 ) {
      mainString += str + additionString;
      let n=2;
      while (n<=repeatTimes) {
        mainString += separator + str + additionString;
        n++;
      }
    } else if (repeatTimes === 0 || repeatTimes ===1) {
      mainString += str + additionString;
    }
  }
  

  
  //console.log(additionString);
  return mainString;
};
  