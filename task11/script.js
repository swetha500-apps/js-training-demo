function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line
  
  return anim.slice(beginSlice,endSlice)
    // Only change code above this line
  }
  
  const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
 let output= sliceArray(inputAnim, 1, 3);


function getOutput() {
    document.getElementById("output").innerText =  output;
      }