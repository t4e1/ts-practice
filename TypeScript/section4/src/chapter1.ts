/**
 * 함수 타입 표현식
 * 타입을 정의하여 타입을 표현해줄 수 있음
 */
type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

/**
 * 호출 시그니쳐 ( 콜 시그니쳐 )
 * 함수의 타입을 별도로 정의하는 또다른 문법
 */

type Operation2 = {
    (a: number, b: number): number;
    name: string;
}

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

add2.name;