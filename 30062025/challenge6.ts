abstract class Shape {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    abstract getArea(): number;
}

class Rectangle extends Shape {
    width: number;
    height: number;
    constructor(name: string, width: number, height: number) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    radius: number;
    constructor(name: string, radius: number) {
        super(name);
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}

// Test
const shapes: Shape[] = [new Rectangle("Rectangle", 4, 5), new Circle("Circle", 3)];
shapes.forEach(shape => console.log(`${shape.name} area: ${shape.getArea()}`));