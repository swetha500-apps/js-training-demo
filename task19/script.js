function splitify(str) {
    return str.split(/\W/)
  }
  
let output=  splitify("Hello World,I-am code");
  function getOutput() {
    document.getElementById("output").innerText =  output;
      }