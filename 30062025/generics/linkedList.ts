class ListNode<T> {
    value: T;
    next: ListNode<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}


class LinkedList<T> {
    private head: ListNode<T> | null = null;
    private tail: ListNode<T> | null = null;
    private length: number = 0;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    toString() {
        const values: Array<T> = []
        let current = this.head;
        while (current) {
            values.push(current.value)
            current = current.next
        }
        return values.join(' -> ')
    }

    push(next: T) {
        const newNode = new ListNode(next);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail!.next = newNode;
            this.tail = newNode;
        }
        this.length++
    }

    getFirst(): T | undefined {
        if (!this.head) return undefined;
        const value = this.head.value;
        this.head = this.head.next;
        if (!this.head) {
            this.tail = null;
        }
        this.length--;
        return value;
    }
}

const llist = new LinkedList<string>();
llist.push("test1")
llist.push("test2")
llist.push("test3")
llist.push("test4")
llist.push("test5")

console.log(llist.toString())

console.log(llist.getFirst())
console.log(llist.getFirst())
console.log(llist.getFirst())
console.log(llist.getFirst())
console.log(llist.getFirst())



