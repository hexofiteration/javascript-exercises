const sumAll = function(start, end) {
  
  if( start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end) ) return "ERROR";
  
  let arr = [];
  let result = 0;
  
  if(start > end){
    
    for (var i = end; i <= start; i++) {
      result += i;
    }
  } else {
    
    for (var i = start; i <= end; i++) {
      result += i;
    }
  }
    
  return result;
};
// Do not edit below this line
module.exports = sumAll;
