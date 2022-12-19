function pairElement(str) {
    // create object for pair lookup
    const pairs = {
      A: "T",
      T: "A",
      C: "G",
      G: "C"
    };
  
    // map character to array of character and matching pair
    return str
      .split("")
      .map(x => [x, pairs[x]]);
  }

  pairElement("GCG");
  
  function getOutput() {
    document.getElementById("output").innerText =  JSON.stringify(pairElement("GCG"));
   
      }
