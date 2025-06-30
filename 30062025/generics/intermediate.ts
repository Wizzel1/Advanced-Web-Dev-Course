//4) // TODO: Only allow types that have a 'length' property
function printLength<T extends { length: number }>(item: T): number {
    return item.length;
}

//5) // TODO: Complete the function to return a key-value tuple
function createPair<K, V>(key: K, value: V): [K, V] {
    return [key, value];
}