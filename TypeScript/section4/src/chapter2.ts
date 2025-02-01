/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는 것 
 * 1. 반환값의 타입이 호환되는가 
 * 2. 매개변수의 타입이 호환되는가 
 */

// 기준1. 반환값이 호환되는가 
// 반환값 타입은 업캐스팅의 경우에는 호환되고, 다운캐스팅은 호환되지 않는다. 
type A = () => number; 
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b = a; b=a는 호환되지 않는다. B <- A 로 취급하겠다는 것은 반환값 기준으로 리터럴 타입 <- 넘버 타입인 다운캐스팅이 되므로 호환되지 않음. 

// 기준2. 매개변수의 타입이 호환되는가
// 2-1. 매개변수의 개수가 같을 때 
// 매개변수를 기준으로 호환성을 판단할 때는 업캐스팅은 호환되지 않는다. 
// 
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d;   변수 c에 변수 d를 넣는다는거는 number literal 타입을 number타입으로 취급하겠다는 것 = 업캐스팅
d = c;

type Animal = {
    name: string;
}

type Dog = {
    name: string;
    color: string;
}

let animalFunc = (animal: Animal) => {
    console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
    console.log(dog.name);
    console.log(dog.color);
};

// animalFunc = dogFunc; 

// let testFunc = (animal: Animal) => {
//     console.log(animal.name);
//     console.log(animal.color); 
// }

dogFunc = animalFunc;

let testFunc2 = (dog: Dog) => {
    console.log(dog.name);
}

// 2-2. 매개변수의 개수가 다를 때
// 할당하려는 함수의 매개변수의 개수가 더 적을 때에만 호환이 된다.
// 매개변수의 타입이 다르면 당연히 안됨
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // func1, func2는 호환된다.
// func2 = func1; 