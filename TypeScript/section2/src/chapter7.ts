// void
// 아무것도 없음을 의미하는 타입 

function func1(): string {
    return "hello";
}

// 함수에서 특정 타입의 값을 반환하지 않을때 void사용
function func2(): void {
    console.log("hello");
}

// 변수에 넣으면 undefined를 제외한 어떤 타입도 넣을 수 없다. 
let a: void;
a = undefined;


// never
// 존재하지 않는, 불가능한 타입
function func3(): never{ // 반환을 할 수 없어서 정상적으로 종료되지 않는 경우 never 사용
    while(true){}
}

function func4(): never {
    throw new Error();
}

// void와 달리 undefined와 null도 담을 수 없다.
let b: never;

// void vs never
// void는 정상적으로 종료되지만 진짜 반환값이 없는 경우, never는 정상적인 종료가 안되는 경우 