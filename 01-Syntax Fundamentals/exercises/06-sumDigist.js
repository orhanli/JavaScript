// 6 sum digist
function sumOfDigits(number) {

    let numberStr = number.toString();
    let sum = 0;
    
    for (let char of numberStr) {
        // karakteri tekrar sayiya dönüstür
        sum += parseInt(char, 10);
    }
    return sum;
}

console.log(sumOfDigits(245678));
console.log(sumOfDigits(97561));
console.log(sumOfDigits(543));