// Only change code below this line
function urlSlug(title) {
    let b=title.trim()
  let a=b.split( /\s+/);
  
  return a.map((item)=>item.toLowerCase()).join("-")
  
  }
  // Only change code above this line
  
  let output=urlSlug(" Winter Is  Coming");



function getOutput() {
    document.getElementById("output").innerText =output;
 
    
      }