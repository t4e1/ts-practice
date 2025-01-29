/**
 * 타입 추론
 */

let a = 10;
let b = "hello";
let c = {
    id : 1,
    name : "taewon",
    profile : {
        nickname: "tev"
    },
    urls: "http://localhost"
}

let { id, name, profile } = c;

let [ one, two, three ] = [1, "hello", true];

function func(message = "hello") {
    return "hello"; // 함수의 타입을 추론할 때는 반환값을 기준으로 추론함
}

let d; // 암묵적으로 추론된 any 타입은 진화 ( type 이 변함 ) 할 수 있음
let e: any; // 명시적으로 any 타입을 지정하면 다른 타입을 넣어도 타입이 변하지 않음
d = 10; 
d.toFixed();

d = "hello";
d.toUpperCase();

const num = 10;
const str = "hello"; 

let arr = [1, "string"];
