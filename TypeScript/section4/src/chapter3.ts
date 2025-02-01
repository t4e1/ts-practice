/**
 * 함수 오버로딩
 * 하나의 함수를 매개변수의 개수나 타입에 따라 
 * 여러가지 버전으로 만드는 문법
 * 하나의 함수 func
 * 모든 매개변수의 타입 number
 * 매개변수가 1개 ver.1 -> 이 매개변수에 20을 곱한 값 출력
 * 매개변수가 3개 ver.2 -> 이 매개변수들을 다 더한값을 출력
 */

// 오버로딩 할 경우 함수의 버전을 알려줘야함 -> 오버로드 시그니처 라고 부름
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 함수의 실제 구현부 (구현 시그니처) 작성
function func(a: number, b?: number, c?: number){
    if (typeof b === 'number' && typeof c === 'number') {
        console.log(a + b + c);
    } else {
        console.log(a*20);
    }
};

// func();
func(1);
func(1,2,3);