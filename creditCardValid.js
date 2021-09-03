/*Create the function isCreditCardValid(digitArr) that accepts an array of digits on the card 
(13-19 depending on the card), and returns a boolean whether the card digits satisfy the Luhn formula, as follows:

    Set aside the last digit; do not include it in these calculations (until step 5);
    Starting from the back, multiply the digits in odd positions (last, third-to-last, etc.) by 2;
    If any results are larger than 9, subtract 9 from them;
    Add all numbers (not just our odds) together;
    Now add the last digit back in – the sum should be a multiple of 10.*/

function creditCardValid(digitArr){
    let sum = 0;
    let temp = digitArr[digitArr.length-1];
    digitArr.pop();
    for(let i = digitArr.length-1; i>=0; i-=2){
        digitArr[i] = digitArr[i] * 2;
        if (digitArr[i] > 9){
            digitArr[i] = digitArr[i] - 9;
        }
    }
    for(let i = 0; i<digitArr.length; i++){
      sum = sum + digitArr[i];
    }
    sum = sum + temp;
    if(sum % 10 === 0){
        return true;
    }else{
        return false;
     }
}
const [n] = 5;