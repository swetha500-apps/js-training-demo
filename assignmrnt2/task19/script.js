
  function addTogether(...args) {
    let arr1=[...args]
    if (arr1.some((item)=> typeof item !=="number")){
      return undefined
    }else if (arr1.length==1){
      return x=>addTogether(args[0],x)
    }
   else{
    return arr1[0]+arr1[1]
  }
  }
  
  addTogether(2, 3);
  addTogether(23, 30);
  addTogether(5)(7);
  addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
  addTogether(2, "3")
  addTogether(2)([3])
  addTogether("2", 3)
  addTogether(5, undefined)

  function getOutput() {
    document.getElementById("output1").innerText = addTogether(2, 3);
    document.getElementById("output2").innerText = addTogether(23, 30);
    document.getElementById("output3").innerText = addTogether(5)(7);
    document.getElementById("output4").innerText =   addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    document.getElementById("output5").innerText =addTogether(2, "3")
    document.getElementById("output6").innerText =  addTogether(2)([3])
    document.getElementById("output7").innerText =   addTogether("2", 3)
    document.getElementById("output8").innerText =  addTogether(5, undefined)
   
      }