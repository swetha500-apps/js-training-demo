const squareList = arr => {
 
    return arr.filter( (num) => num > 0 && num % parseInt(num) === 0  ).map((item)=> item*item)
    
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  let output=squaredIntegers;

function getOutput() {
    document.getElementById("output").innerText =  output;
      }