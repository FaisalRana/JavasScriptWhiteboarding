let countFilter = (count) => {
    if(count === 1) {
    return ''} else {return count}
} 
 
let inputString3 = "sqqibbbbleeeee";
let outputArray = [];
let count = 1;
let outputString = "";
let compressString = (string) => {
    for(let i=0; i<string.length; i++) {
    let curr = string[i];
    let next = string[i+1];
    if (curr !== next) {
      outputString += countFilter(count) + curr
      count = 1
      }    else { count++ }
      }
          return outputString}
    
console.log(compressString(inputString3))