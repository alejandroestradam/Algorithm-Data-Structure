//Given two strings, write a method to decide if one is a permutation of the other

function checkPermutation(string1,string2){
    hash={};
    for(let i = 0; i<string1.length; i++){
        let c=string1[i];
        hash[c]=true;
    }
    for(let j=0; j<string2.length; j++){
        let c2=string2[j];
        if(!hash[c2]){
            return false;
        }
    }
    return true;
}