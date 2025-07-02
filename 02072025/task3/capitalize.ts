export function capitalize(word: string): string {
    let result = '';
    let isFirstLetter = true;
    let trimmedWord = word.trim();
    for (let i = 0; i < trimmedWord.length; i++) {
        if (isLetter(trimmedWord[i])) {
            if (isFirstLetter) {
                result += trimmedWord[i].toUpperCase();
                isFirstLetter = false;
            } else {
                result += trimmedWord[i];
            }
        } else {
            result += trimmedWord[i];
        }
    }
    return result;
}

function isLetter(char: string): boolean {
    return char.match(/[a-zA-Z]/) !== null;
}