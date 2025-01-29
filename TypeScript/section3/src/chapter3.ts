/*
기본 타입간의 호환성
*/

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

/*
객체 타입간의 호환성
- 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은가를 판단. 
- 프로퍼티의 수에 따라 슈퍼 / 서브 타입이 나뉜다. 
- 같은 프로퍼티를 가졌을 경우, 프로퍼티가 적은 경우가 슈퍼 타입으로 작동함. 
*/

type Animal = {
    name: string;
    color: string;
}

type Dog = {
    name: string;
    color: string;
    breed: string;
}

let animal : Animal = {
    name: "기린",
    color: "노란색"
}

let dog : Dog = {
    name: "진도",
    color: "brown",
    breed: "진도"
}

animal = dog;
// dog = animal;

type Book = {
    name: string;
    price: number;
}

type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
}

let book: Book;
let programmingBook: ProgrammingBook ={
    name: "한 입 크기로 잘라먹는 리엑트",
    price: 33000,
    skill: "reactjs",
}

book = programmingBook;
// programmingBook = book;

let book2 : Book = {
    name: "한 입 크기로 잘라먹는 리엑트",
    price: 33000,
    // skill: "reactjs",
}

let book3: Book = programmingBook;

function func(book: Book) {}
func({
    name: "한 입 크기로 잘라먹는 리엑트",
    price: 33000,
    // skill: "reactjs",
})

func(programmingBook)