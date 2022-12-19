function spinalCase(str) {
    return str
      .split(/\s|_|(?=[A-Z])/)
       .join("-")
          .toLowerCase(); 
  }
  spinalCase('This Is Spinal Tap');

  function getOutput() {
    document.getElementById("output").innerText =  spinalCase('This Is Spinal Tap');
   
      }