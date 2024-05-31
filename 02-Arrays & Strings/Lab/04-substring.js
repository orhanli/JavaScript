// substring
function subs(string, startIndex, count) {
    let substring = string
     .substring(startIndex, startIndex + count);
    console.log(substring);
}
subs('ASentence', 1, 8);
subs('SkipWord', 4, 7);