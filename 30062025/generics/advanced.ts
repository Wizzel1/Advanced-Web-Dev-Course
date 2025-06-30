//7) // TODO: Use Partial<T> to make all properties optional
type Todo = {
    title: string;
    completed: boolean;
};

type PartialTodo = Partial<Todo>;



//8) // TODO: Complete the type to return string if T extends string, else number
type TypeCheck<T> = T extends string ? string : number;

type A = TypeCheck<'hello'>; // string
type B = TypeCheck<42>;      // number


//9) // TODO: Create a type that extracts the return type of a function
type FunctionReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type TestFunction = () => string;
type ReturnTypeResult = FunctionReturnType<TestFunction>; // should be string


//10) // TODO: Create a type that makes all properties readonly and optional
type ReadonlyPartial<T> = {
    readonly [K in keyof T]?: T[K];
};

interface User {
    name: string;
    age: number;
    email: string;
}

type ReadonlyPartialUser = ReadonlyPartial<User>; // all properties should be readonly and optional


//11) // TODO: Create a type that picks only the properties that are functions
type FunctionProperties<T> = {
    [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];

interface MixedObject {
    name: string;
    greet: () => void;
    age: number;
    calculate: (x: number) => number;
}

type FunctionProps = FunctionProperties<MixedObject>; // should be greet | calculate


//12) // TODO: Create a type that recursively makes all properties optional
type DeepPartial<T> = T extends object ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : T;

interface NestedObject {
    user: {
        profile: {
            name: string;
            settings: {
                theme: string;
                notifications: boolean;
            };
        };
        preferences: string[];
    };
}

type DeepPartialNested = DeepPartial<NestedObject>; // all nested properties should be optional


//13) // TODO: Create a type that excludes null and undefined from a union type
type CustomNonNullable<T> = T extends null | undefined ? never : T;

type UnionWithNulls = string | number | null | undefined;
type CleanUnion = CustomNonNullable<UnionWithNulls>; // should be string | number
