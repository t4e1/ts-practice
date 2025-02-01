/**
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기하기
// 어떤 [타입의] 매개변수를 받아서, 어떤 [타입의] 결과값을 반환하는지
function func(a: number, b: number): number {
    return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */
const add = (a: number,b: number): number => a + b;

/**
 * 함수의 매개변수
 * 필수 매개변수 : 생략할수 없는 (?가 없는) 매개변수
 * 선택적 매개변수 : 생략할 수 있는 매개변수 
 */
function introduce(name = "정태원", tall?: number) {    // 선택적 매개변수는 항상 마지막에 와야한다.
    console.log(`name: ${name}`);
    console.log(`tall: ${tall}`);
}

introduce("테스트", 999)
introduce("테스트");

function getSum(...rest: number[]) {
    let sum = 0;
    rest.forEach((it) => (sum += it));

    return sum;
}

getSum(1, 2, 3);    // 6
getSum(1, 2, 3, 4, 5); //15