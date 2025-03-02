/**
 * ts의 클래스
 */

const employee = {
    name : "A", 
    age : 99, 
    position: "dev",
    work() {
        console.log("working...");
    }
}

class Employee {
    // 필드
    name: string;
    age: number;
    position: string;

    // 생성자
    constructor(name: string, age: number, position: string){
        this.name = name;
        this.age = age;
        this.position = position;
    }

    // 메소드 
    work() {
        console.log("working...");
    }
}

class ExecutiveOfficer extends Employee {
    // 필드 
    officeNumber: number;

    //생성자
    constructor(name: string, age: number, position: string, officeNumber: number) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }
}


const employeeB = new Employee("B", 11, "dev");
console.log(employeeB)

const employeeC : Employee = {
    name: "C", 
    age: 22,
    position: "dev12",
    work(){},
}

