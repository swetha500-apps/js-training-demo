function fearNotLetter(str) {

   
      
    let str1 = "abcdefghijklmnopqrstuvwxyz"
    
    let first = str[0]
    
    let firstindex=0
    
    
    for( let i=0;i<26;i++){
    
     if(first == str1[i]){
    
      firstindex=i
    
      break
    
     }
    
    }
    
    firstindex = firstindex+1
    
    for (let i=1;i<=str.length;i++){
    
     if(str[i] != str1[firstindex]){
    
      return str1[firstindex]
    
     }
    
     firstindex = firstindex + 1
    
    }
    
    return undefined
    
    
    }
    
   


function getOutput() {
    document.getElementById("output").innerText =  fearNotLetter("abce");
   
      }