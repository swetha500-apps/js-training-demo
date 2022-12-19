
function destroyer(arr, ...rest) {
    return arr.filter(elem => !rest.includes(elem));
  }
  
  



function getOutput() {
    document.getElementById("output").innerText =  destroyer([1, 2, 3, 1, 2, 3], 2, 3);;
   
      }