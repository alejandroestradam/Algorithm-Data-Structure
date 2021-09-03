/*Create a function to generate Fibonacci numbers. 
In this famous mathematical sequence, each number is the sum of the previous two, 
starting with values 0 and 1. */

function fib(n){
    if (n===0){
        return n = 0;
    }
    if (n===1 || n ===2){
        return n = 1;
    }
    return fib(n-1) + fib(n-2);
}