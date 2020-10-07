const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let obj = {};
  let turns = Math.pow(2, disksNumber)-1;
  obj.turns = turns;
  let seconds = Math.floor(turns/turnsSpeed*3600);
  obj.seconds = seconds
  return obj;
};
