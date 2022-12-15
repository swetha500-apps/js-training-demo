var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
  let arr1=[...arr]
  return arr1.sort(function(a, b){return a-b}) 
  // Add your code above this line
}
let output=nonMutatingSort(globalArray);
  function getOutput() {
    document.getElementById("output").innerText =  output;
      }