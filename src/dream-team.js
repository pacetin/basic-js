const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if  (!Array.isArray(members)) return false;
  let dreamTeam = [];
  for (let member of members) {
    if(typeof(member) != 'string') continue;
    else {
      let firstLetter = member.trim()[0].toUpperCase();
      dreamTeam.push(firstLetter);
    }
  }
  return dreamTeam.sort().join('');
};
