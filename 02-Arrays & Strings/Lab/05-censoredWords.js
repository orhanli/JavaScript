// censored words
function censoredWord(text, word) {
    while (text.includes(word)) {
        text = text.replace(word, '*'.repeat(word.length));
    }
    console.log(text);
}

censoredWord('A small sentence with some words', 'small');
censoredWord('Find the hidden word', 'hidden');