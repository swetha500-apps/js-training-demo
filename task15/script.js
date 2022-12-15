let a=[1,1,2,5,2]
Array.prototype.myFilter = function(callback) {
  const newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    if (Boolean(callback(this[i], i, this)) === true) {
      newArray.push(this[i]);
    }
  }
  // Only change code above this line
  return newArray;
};
let b=a.myFilter(item=>item%2);
let output=b;
function getOutput() {
    document.getElementById("output").innerText =  output;
      }