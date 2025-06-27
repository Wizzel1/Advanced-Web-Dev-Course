function mashArrays(array1: Array<unknown>, array2: Array<unknown>) {
    const result: Array<unknown> = [];
    const maxLength = Math.max(array1.length, array2.length);

    for (let i = 0; i < maxLength; i++) {
        if (array1[i] !== undefined) {
            result.push(array1[i]);
        }
        if (array2[i] !== undefined) {
            result.push(array2[i]);
        }
    }

    console.log(result)
    return result;
}



mashArrays([1, 2, 3], ['a', 'b', 'c'])
// [1, 'a', 2, 'b', 3, 'c']

mashArrays(['x', 'y'], [10, 20])
// ['x', 10, 'y', 20]

mashArrays([true, false], ['yes', 'no'])
// [true, 'yes', false, 'no']

mashArrays(['left', 'right', 'center'], [0, 1, 2])
// ['left', 0, 'right', 1, 'center', 2']