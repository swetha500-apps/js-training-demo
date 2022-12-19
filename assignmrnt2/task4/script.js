function whatIsInAName(collection, source) {
    const arr = [];
    for (let i = 0; i < collection.length; i++) {
      let a = true;
      for (let j in source) {
        if (collection[i][j] !== source[j]) {
          a = false;
          break;
        }
      }
      if (a) arr.push(collection[i]);
    }
    // Only change code above this line
    return arr;
  }
  
  function getOutput() {
    document.getElementById("output").innerText = JSON.stringify(
    whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
   
      }