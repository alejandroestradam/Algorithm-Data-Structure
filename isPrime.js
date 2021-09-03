//Return whether a given integer is prime.

function isprime(num){
    // Enter code below
if (num === 3 || num === 5){
    return true;
}
if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0){
    return false;
} else{
    return true;
}
}