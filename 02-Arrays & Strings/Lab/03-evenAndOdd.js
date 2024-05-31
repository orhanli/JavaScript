// even and odd subraction
function evenOdd(array) {
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < array.length; i++) {
        array[i] = Number(array[i]);
    }
    for (let i of array){
        if ( i % 2 === 0){
            evenSum += i
        }else if (i % 2 === 1) {
            oddSum += i
        }
    }
    console.log(evenSum - oddSum);
}
evenOdd(['1','2','3','4','5','6']);
evenOdd(['3','5','7','9']);
evenOdd(["2", "4", "6", "8", "10"]);