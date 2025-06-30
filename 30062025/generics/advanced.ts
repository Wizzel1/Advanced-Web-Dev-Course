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