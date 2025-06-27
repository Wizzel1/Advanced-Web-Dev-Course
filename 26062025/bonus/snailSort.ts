//Bonus 1 - Snail Sort
function snail(matrix: number[][]) {
    const result: number[] = [];
     
    while(matrix.length > 0) {
       //remove first row and add to result
       result.push(...matrix.shift() ?? [])
       //remove last item of each row and add to result
       for (let i=0; i < matrix.length; i++) {
        result.push(matrix[i].pop() ?? 0)
       }
       //remove last row and add to result
       result.push(...(matrix.pop() || []).reverse())
       //remove first item of each row and add to result
       for(let i=matrix.length-1; i>=0; i--){
        result.push(matrix[i].shift() ?? 0)
       }
    }

    return result;
}

console.log(snail([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
]));