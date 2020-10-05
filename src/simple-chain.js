const CustomError = require("../extensions/custom-error");

const chainMaker = {
  
  chainArray:[],
  

  getLength() {
   return (this.chainArray.length); 
  },

  addLink(value=' ') {        
    value = value + '';           
    this.chainArray.push(`( ${value} )`);    
    return this;
  },

  removeLink(position) {
    if ( position <= 0 || position%1 != 0 || position >(this.chainArray.length) || isNaN(position) ) {
      this.chainArray = [];
      throw new Error('Error');
    }
    else {
      this.chainArray.splice(position-1, 1);
      console.log(this.chainArray);
    }
    return this;    
  },

  reverseChain() {
    this.chainArray.reverse();
    return this;    
  },

  finishChain() {
    let chainString = '';
    if (this.chainArray.length === 0) {
      this.chainArray = [];
      throw new Error('error');
    } 
    for (let i=0; i<this.chainArray.length; i++) {
      let value = this.chainArray[i];
      if (i === 0) {
        chainString += value;
      }
      else {
        chainString += `~~${value}`;
      } 
    }    
    this.chainArray = [];
    return chainString; 
  }  
};

module.exports = chainMaker;
