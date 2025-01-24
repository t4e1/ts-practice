// any
// 특정 변수의 타입을 확실히 모를때 사용 
let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};
anyVar = () => {};

anyVar.toUpperCase();
anyVar.toFixed();

let num: number = 10;
num = anyVar;


// unknown
// any와 비슷하게 모든 타입을 넣을 수 있지만, 
// 반대로 특정 타입의 변수에 unknown타입을 넣을 수는 없다. 
// 또한, 연산과 특정 타입에서만 사용할 수 있는 함수도 사용할 수 없다. 

let unknownVar: unknown;

unknownVar = 10;
unknownVar = {};
unknownVar = () => {};

if (typeof unknownVar === "number") {
    num = unknownVar;
}


