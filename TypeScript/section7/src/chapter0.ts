/**
 * 제네릭
 */

function func(value: string) {
    return value;
}

// 제네릭 함수 : 함수의 인수에 따라서 반환값 타입을 가변적으로 가질 수 있음 
function func2<T>(value: T): T{
    return value;
}

let num = func2(10);    // 반환값이 각각 number, boolean 타입으로 반환됨
let bool = func2(true);
let str = func2("string");
let arr = func2([1,2,3]);
let arr2 = func2<[number, number, number]>([1,2,3] );