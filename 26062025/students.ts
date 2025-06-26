//Step 1 - Grades are only numbers
type Student = {
    firstName: string;
    lastName: string;
    age: number;
    grades: number[];
}

function displayStudent(student: Student) {
    let string = "";
    string += `${student.firstName} ${student.lastName} (${student.age})\n`;
    string += `${"=".repeat(30)}\n`;
    string += `Grades: ${student.grades.join(", ")}\n`;
    console.log(string);
}

const testStudent: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    grades: [1, 2, 3, 4, 5, 6],
}

displayStudent(testStudent);

//Step 2 - Grades can be numbers or strings
type Student2 = {
    firstName: string;
    lastName: string;
    age: number;
    grades: Array<number | string>;
}

const testStudent2: Student2 = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    grades: ["A",2,"F","3",1,"B",2,5],
}

function displayStudent2(student: Student2) {
    let string = "";
    string += `${student.firstName} ${student.lastName} (${student.age})\n`;
    string += `${"=".repeat(30)}\n`;
    string += `Grades: ${student.grades.join(", ")}\n`;
    console.log(string);
}

displayStudent2(testStudent2);

//Step 3 - Grades can be numbers, strings or undefined. If undefined, display a *
type Student3 = {
    firstName: string;
    lastName: string;
    age: number;
    grades: Array<number | string | undefined>;
}

const testStudent3: Student3 = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    grades: [1, 2, 6, undefined, "A", "F", "3", 1, "B"],
}

function displayStudent3(student: Student3) {
    let string = "";
    const mappedGrades = student.grades.map(grade => grade ?? "*");
    string += `${student.firstName} ${student.lastName} (${student.age})\n`;
    string += `${"=".repeat(30)}\n`;
    string += `Grades: ${mappedGrades.join(", ")}\n`;
    console.log(string);
}

displayStudent3(testStudent3);


//Step 4 
const students: Student3[] = [
    {
        firstName: "Anton",
        lastName: "Meier",
        age: 16,
        grades: [1,4,3,1,"A","*",1,2]
    },
    {
        firstName: "Berta",
        lastName: "Müller",
        age: 17,
        grades: ["A","*",1]
    },
    {
        firstName: "Cäsar",
        lastName: "Schmidt",
        age: 17,
        grades: ["A",1,"*",3,2,4,5]
    }
]

students.forEach(displayStudent3);

//Step 5 - Highlight students
function mapGrades(grades: Array<string | number | undefined>) {
    return grades.map(grade => grade ?? "*");
}

function displayStudent5(student: Student3) {
    let string = "";
    string += `${student.firstName} ${student.lastName} (${student.age})\n`;
    string += `${"=".repeat(student.firstName.length + student.lastName.length + 6)}\n`;
    string += `Grades: ${mapGrades(student.grades).join(", ")}\n`;
    console.log(string);
}
displayStudent5(students[1]);


//Step 6 - BONUS: Enable grades for different subjects
type Student6 = {
    firstName: string;
    lastName: string;
    age: number;
    sport: Array<string | number | undefined>;
    kunst: Array<string | number | undefined>;
    mathe: Array<string | number | undefined>;
}

const student6 : Student6 = {
    firstName: "Anton",
    lastName: "Meier",
    age: 16,
    sport: ["A",1,undefined],
    kunst: [3, 2, 4, 5],
    mathe: [1, 2, "A"],
}

function displayStudent6(student: Student6) {
    let string = "";
    string += `${student.firstName} ${student.lastName} (${student.age})\n`;
    string += `${"=".repeat(15)}\n`;
    string += `Sport: ${mapGrades(student.sport).join(", ")}\n`;
    string += `Kunst: ${mapGrades(student.kunst).join(", ")}\n`;
    string += `Mathe: ${mapGrades(student.mathe).join(", ")}\n`;
    console.log(string);
}

displayStudent6(student6);


//Step 7 - BONUS: Display average grades 
const students7: Student6[] = [
    {
        firstName: "Anton",
        lastName: "Meier",
        age: 16,
        sport: [2, "A", undefined, 4],
        kunst: [1, 1, 2, "A"],
        mathe: [3, 1, undefined, 4, 2],
    },
    {
        firstName: "Berta",
        lastName: "Müller",
        age: 17,
        sport: [2, 2, "A", 1],
        kunst: [4, 1, 3, undefined, 5],
        mathe: [2, "A", 1, 3, 4],
    },
    {
        firstName: "Cäsar",
        lastName: "Schmidt",
        age: 17,
        sport: [1, 2, 5, "A", 2],
        kunst: [2, 4, 1, 3, undefined],
        mathe: [4, 2, 1, "A", 3],
    }
]

const gradeMap = new Map<string, number>([
    ["A", 1],
    ["B", 2],
    ["C", 3],
    ["D", 4],
    ["E", 5],
])
function getAverageGrade(grades: Array<string | number | undefined>) {
    const mapped = grades.map(grade => {
        if (typeof grade !== "string") return grade;
        return gradeMap.get(grade);
    })
    const validGrades = mapped.filter(grade => grade !== undefined);
    return validGrades.reduce((sum, grade) => sum + grade, 0) / (validGrades.length ?? 1);
}
 
function getStudentAverage(student: Student6) {
    return(student.sport.length + student.kunst.length + student.mathe.length) / 3;
}

students7.forEach(student => {
    console.log(`${student.firstName} ${student.lastName}: ${getStudentAverage(student)}`);
});



