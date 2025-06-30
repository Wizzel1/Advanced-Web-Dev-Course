class Employee {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
    getDetails() {
        return this.name;
    }
}

class Manager extends Employee {
    department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }
    getDetails() {
        return `${super.getDetails()} ${this.department}`;
    }
}

// Test
const manager = new Manager("Alice", "Engineering");
console.log(manager.getDetails());