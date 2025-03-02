/**
 * 접근 제어자
 * access modifier
 * => public private protected
 * 
 * public : 어디서든 접근 가능
 * private : 클래스 외부에서는 접근 불가능
 * protected : 외부에서는 접근이 안되지만 파생클래스(상속 받은 클래스)에서는 접근 가능
 */

class Employee {
    // 필드
    // private name: string;
    // public age: number;
    // protected position: string;

    // 생성자
    constructor(private name: string, protected age: number, public position: string){
        this.name = name;
        this.age = age;
        this.position = position;
    }

    // 메소드 
    work() {
        console.log(`${this.name} is working...`);
    }
}

const employee = new Employee("A", 11, "dev");
// employee.name = "A";
// employee.age = 22;
