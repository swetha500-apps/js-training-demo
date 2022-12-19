 
function steamrollArray(arr,output=[]) {

    for (let  i=0;i<arr.length;i++){
     if(Array.isArray(arr[i])){
        output=steamrollArray(arr[i],output);
     }else{
       output.push(arr[i])
     }
   }
   return output;
  }
  
  steamrollArray([1, [2], [3, [[4]]]])
  steamrollArray([[["a"]], [["b"]]])

  function getOutput() {
    document.getElementById("output1").innerText =JSON.stringify(steamrollArray([1, [2], [3, [[4]]]]))
    document.getElementById("output2").innerText = JSON.stringify(steamrollArray([[["a"]], [["b"]]]))
    document.getElementById("output3").innerText =JSON.stringify(steamrollArray([1, [], [3, [[4]]]]))
    document.getElementById("output4").innerText =JSON.stringify(steamrollArray([1, {}, [3, [[4]]]]))
  }