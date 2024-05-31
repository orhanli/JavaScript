// 10 same numbers
function checkDigitsAndSum(number) {
 
    const numberStr = number.toString();
    const firstDigit = numberStr[0];
    
    let sum = 0;
    let allSame = true;
    
    for (let char of numberStr) {
  
        sum += parseInt(char, 10);
        
        if (char !== firstDigit) {
            allSame = false;
        }
    }
    
    console.log(allSame);
    console.log(sum);
}

checkDigitsAndSum(2222222);
checkDigitsAndSum(1234);