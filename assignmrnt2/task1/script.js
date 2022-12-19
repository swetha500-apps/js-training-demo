
function sumAll(arr) {
    let a=[...arr];
    let b=0;
    if(a[1]>a[0]){
        for (let i=a[0];i<=a[1];i+=1){
             b=b+i
        }
    return b;
    } else if(a[0]>a[1]){
        for (let i=a[1];i<=a[0];i+=1){
             b=b+i
        }
    return b;
    }
  }
  
  
  function getOutput() {
    document.getElementById("output").innerText = sumAll([1, 4]);;
   
      }