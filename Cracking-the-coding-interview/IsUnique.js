//Implement an algorithm to determine if a string has all unique characters.

function isUnique(s){
    let hash={};
    for(let i=0; i<s.length; i++){
      let c = s[i];
      if(hash[c]){
        return false;
      }else{
        hash[c]=true;
      }
    }
    return true;
  }