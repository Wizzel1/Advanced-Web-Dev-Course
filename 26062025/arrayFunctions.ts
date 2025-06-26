const list = [15, 6, 3213, 9, 0, 12, 8464 , 1, 1264, 481, 186, 1031, 194];

const sorted = list.sort((a, b) =>  b - a);
const squared = sorted.map((num) => num * num);
const subArray = squared.slice(4, -2);
const filtered = subArray.filter((num) => num % 4 !== 0);
const sum = filtered.reduce((acc, num) => acc + num, 0);
console.log(sum);