/**
 * js 클래스 
 */
let studentA = {
    name: "A",
    grade: "A",
    age: 33,
    study(){
        console.log("study")
    },
    introduce() {
        console.log("Hello")
    }
}

class Student {
    // 필드 
    name;
    grade;
    age;

    // 생성자
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }

    // 메소드 
    study() {
        console.log("Study");
    }

    introduce() {
        console.log(`Hello I'm ${this.name}`)
    }
}

// 클래스를 이용해 만든 객체를 인스턴스라고 부름
let studentB = new Student("B", "B", 22);
studentB.study();
studentB.introduce();

class StudentDeveloper extends Student{
    // 필드 
    favoritSkills;

    constructor(name, grade, age, favoritSkills) {
        super(name, grade, age)
        this.favoritSkills = favoritSkills;
    }

    programming() {
        console.log(`now using ${this.favoritSkills}`)
    }
}

const dev = new StudentDeveloper("C", "C", 11, "TS");

console.log(dev);
dev.programming();