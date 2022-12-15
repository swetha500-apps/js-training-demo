function sentensify(str) {

    return str.split(/\W/).join(" "); //split-array-join string
   
  }

let output=sentensify("May-the-force-be-with-you")
function getOutput() {
    document.getElementById("output").innerText =output;
 
    
      }