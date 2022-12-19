function translatePigLatin(str) {
    let vowels=["a","e","i","o","u"]
    let a=0
    for (let i of str){
      if (vowels.includes(i)){
        a=a+str.indexOf(i)
        break;
      }
  
    }
     if (vowels.includes(str[0])){ return str+"way"} else{
     return str.slice(a)+str.slice(0,a)+"ay"}
  
  }
  translatePigLatin("california")
  translatePigLatin("eight")
  translatePigLatin("glove") 

  function getOutput() {
    document.getElementById("output1").innerText =   translatePigLatin("california")
    document.getElementById("output2").innerText = translatePigLatin("eight")
    document.getElementById("output3").innerText = translatePigLatin("glove") 
  
   
      }