/*
대수타입
- 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
- 합집합 타입, 교집합 타입이 존재
*/

/**
 * 1. 합집합 - Union Type
 */

let a: string | number | boolean;
a = 1;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "ehllo", true, false];

type Dog = {
    name: string;
    color: string;
}

type Person = {
    name: string;
    language: string;
}

type Union1 = Dog | Person

let union1: Union1 = {
    name: "dog",
    color: "black",
}

let union2: Union1 = {
    name: "person",
    language: "English",
}

let union3: Union1 = {
    name: "",
    color: "",
    language: "",
}

// let union4: Union1 = {
//     name: "",
// }

/**
 * 2. 교집합 - Intersection Type
 */

let variable : number & string;

type Dog2 = {
    name: string;
    color: string;
}

type Person2 = {
    name: string;
    language: string;
}

type Intersection = Dog2 & Person2;

let Intersection: Intersection = {
    name: "",
    color: "",
    language: "",
}