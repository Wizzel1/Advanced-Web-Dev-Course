export function isPalindrome(word: string): boolean {
    let trimmedWord = word.trim();
    let reversedWord = trimmedWord.split('').reverse().join('');
    return trimmedWord === reversedWord;
}