//1) // TODO: Make this function generic so it returns the same type as its input
function identity<T>(arg: T): T {
    return arg;
}

//2) // TODO: Write a generic function that returns the first element of an array
function getFirst<T>(arr: T[]): T {
    return arr[0];
}

// 3) // TODO: Turn this interface into a generic
interface Box<T> {
    value: T;
}

const numberBox: Box<number> = { value: 42 }; // This should be allowed