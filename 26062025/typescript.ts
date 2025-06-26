
//Step 1
const numberArray: number[] = [1, 2, 3, 4, 5];
const doubledNumberArray: number[] = numberArray.map((number) => number * 2);

//Step 2
const stringArray: string[] = ["apple", "banana", "cherry"];
const moreThanFiveLetterWords = stringArray.filter((word) => word.length > 5);

//Step 3
const numberArray2: number[] = [1, 2, 3, 4, 5];
const sumOfNumberArray: number = numberArray2.reduce((acc, number) => acc + number, 0);

//Step 4
const numberArray3: number[] = [1, 2, 3, 4, 5];
const anyGreaterThan10 = numberArray3.some((num) => num > 10);
