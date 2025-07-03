interface Shape2 {
    name: string;
    draw(): void;
}

class Circle2 implements Shape2 {
    name: string = "circle";
    draw(): void {
        console.log("Drawing circle");
    }
}

class Square2 implements Shape2 {
    name: string = "square";
    draw(): void {
        console.log("Drawing square");
    }
}


class ShapeFactory {
    public create(type: "circle" | "square"): Shape2 {
        switch (type) {
            case "circle":
                return new Circle2();
            case "square":
                return new Square2();
        }
    }
}

const shapeFactory = new ShapeFactory();
const circle = shapeFactory.create("circle");
circle.draw();

const square = shapeFactory.create("square");
square.draw();