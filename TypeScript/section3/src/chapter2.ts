/*
Unknown Type 
모든 타입의 슈퍼 타입( 모든 타입을 업캐스팅 할 수 있음 )
*/ 

function unknownExam() {
    let a: unknown = 1;
    let b: unknown = "a";
    let c : unknown = true;
    let d : unknown = null;
    let e: unknown = undefined;

    let unknownVar: unknown;
    // let num: number = unknownVar;
    // let str: string  = unknownVar;
}

/*
Never Type 
모든 타입의 서브 타입( 공집합 / 어떤 타입에도 업캐스팅이므로 모두 넣을 수 있음 )
*/

function neverExam() {
    function neverfunc() : never {
        while(true) {}
    }

    let num: number = neverfunc();
    let str: string = neverfunc();
    let bool: boolean = neverfunc();

    // let never1: never = 10;
    // let never2: never = "string";
}

/*
Void Type 
Undefined 타입의 슈퍼타입이므로 업캐스팅이 가능
*/

function voidExam() {
    function voidFunc(): void {
        console.log("Hello, Void!");
        return undefined;
    }

    let voidVar: void = undefined;
}

/*
Any Type 
모든 타입의 슈퍼타입 / 서브타입으로 위치함 ( 타입 계층도를 무시하는 치트키 타입 -> 사용하지 않는 것이 좋음 )
*/

function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    anyVar = unknownVar;    // 타입 계층도상으로는 unknown타입의 하위타입이어서 다운캐스팅 취급이지만 치트 타입이기 때문에 넣을 수 있음 

    undefinedVar = anyVar;

    // neverVar = anyVar;  // 유일하게 never타입은 다운캐스팅이 안된다. 
}