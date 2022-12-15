function alphabeticalOrder(arr) {
 
  return arr.sort(function(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
  });

}

let a=alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
console.log(a)
  function getOutput() {
    document.getElementById("output").innerText = a;
      }