/**
 * 첫번째 사례
 * 필요한 상황에서는 타입 변수를 여러개 선언하는것도 가능함 
 */

function swap<T, U>(a: T, b: U) {
    return [b, a];
}

const [a, b] = swap("1", 2);


/**
 * 두번째 사례
 */

function returnFirstValue<T>(data: T[]){
    // return data[0]; unknown 형식의 값에다가 [0]의 형식을 쓰면 안됨
    return data[0];
}

let num = returnFirstValue([0, 1, 2]);

let str = returnFirstValue(["hellO", "mynameis"]);

/**
 * 세번째 사례
 * T의 타입을 제한함
 */

function getLength<T extends { length : number }>(data: T) {
    return data.length;
}

let var1 = getLength([1, 2, 3]);

let var2 = getLength("12345");

let var3 = getLength({ length: 10}); 
