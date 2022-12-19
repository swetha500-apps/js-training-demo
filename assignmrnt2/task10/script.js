
function uniteUnique(...rest) {

  return [...new Set(rest.flat())];

}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])

 
  function getOutput() {
    document.getElementById("output").innerText = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
   
      }