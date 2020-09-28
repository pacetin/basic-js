const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if ( typeof(sampleActivity) != 'string' ||
       isNaN(Number(sampleActivity)) ||
       Number(sampleActivity) <= 0 ||
       Number(sampleActivity) > 15 ) {
  return false;
  }
  const MODERN_ACTIVITY = 15;
  const HALF_LIFE_PERIOD = 5730;
  let t = Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)*HALF_LIFE_PERIOD/0.693);
  return t;  
};
