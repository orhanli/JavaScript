// print every n-th element from an array
function everyNthElement(arr, n) {
    let result = [];
    for (let i = 0; i < arr.length; i += n) {
        result.push(arr[i]);
    }
    return result;
}

const arrayOfStrings = ['5', '20', '31', '4', '20'];
const step = 2;
const result = everyNthElement(arrayOfStrings, step);
console.log(result);