// string substring
function stringSub(word, text) {
    const sentence = text.split(' ');

    for (const item of sentence) {
        
        if (item.toLowerCase() === word.toLowerCase()) {
            return word;
        }
    }
    return `${word} not found!`
}

console.log(stringSub('javascript', 'JavaScript is the best programming language'));
console.log(stringSub('python', 'JavaScript is the best programming language'));