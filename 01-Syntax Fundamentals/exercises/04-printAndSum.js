// 4 print and sum
let sum = 0;
let print = ' ';

function printAndSum(start, end) {
    for(let i = start; i <= end; i++){
        print += i + ' ';
        sum += i;
    }
    console.log(print);
    console.log(`sum: ${sum}`);
}

printAndSum(5, 10);