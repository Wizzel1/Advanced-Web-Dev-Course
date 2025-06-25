const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

function getMissingCharacter(input) {
    const isUpperCase = input[0] === input[0].toUpperCase();
    const offset = alphabet.indexOf(input[0].toLowerCase());
    const subAlphabet = alphabet.slice(offset);
    for (let i = 0; i < subAlphabet.length; i++){
        const nextLetterIndex = i + 1;
        if(input[nextLetterIndex] === subAlphabet[nextLetterIndex]) continue;
        return isUpperCase ? subAlphabet[nextLetterIndex].toUpperCase() : subAlphabet[nextLetterIndex];
    }
    return null;
}

console.log(getMissingCharacter(['a','b','c','d','f']))
console.log(getMissingCharacter(['O','Q','R','S']))