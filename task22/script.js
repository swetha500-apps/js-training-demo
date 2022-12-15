function checkPositive(arr) {
    return arr.every(function(currentValue) {
          return currentValue >  0;
  });
  }
  
  let output=checkPositive([1, 2, 3, -4, 5]);







function getOutput() {
    document.getElementById("output").innerText =output;
 
    
      }