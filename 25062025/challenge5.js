function getLikes(inputArray){
    if(!inputArray) return "no one likes this";
    if(inputArray.length === 1) return `${inputArray[0]} likes this`;
    if(inputArray.length === 2) return `${inputArray[0]} and ${inputArray[1]} like this`;
    if(inputArray.length === 3) return `${inputArray[0]}, ${inputArray[1]} and ${inputArray[2]} like this`;
    return `${inputArray[0]}, ${inputArray[1]} and ${inputArray.length - 2} others like this`;
}


console.log(getLikes([]))
console.log(getLikes(["Peter"]))
console.log(getLikes(["Jacob", "Alex"]))
console.log(getLikes(["Max", "John", "Mark"]))
console.log(getLikes(["Alex", "Jacob", "Mark", "Max"]))