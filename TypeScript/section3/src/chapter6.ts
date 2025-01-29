/**
 * 타입 단언
 */

type Person = {
    name: string;
    age: number;
}

let person = {} as Person;  // 앞에 있는 값의 타입을 as 이후의 타입으로 생각해라.(추론됨)
person.name = "정태원";
person.age = 33;

type Dog = {
    name: string;
    color: string;
}

let dog = {
    name: "진도", 
    color: "brown",
    breed: "진돗개",
} as Dog;

/**
 * 타입 단언의 규칙 
 * 값 as 단언 <- 단언식 작성 
 * A as B 
 * A가 B의 슈퍼타입이거나 A가 B의 서브타입이어야 한다.
 */

let num1 = 10 as never;
let num2 = 10 as unknown;
// let num3 = 10 as string; // number와 string 은 슈퍼/서브 타입 관계가 아니기 때문에 단언할 수 없음
let num3 = 10 as unknown as string; // 다중 단언을 하면 단언이 안되는 타입을 단언 할 수 있음. 그러나 절대 좋은 타입은 아님

/**
 * const 단언
 * 주로 객체 타입에서 붙이면 readoly 로 추론되어 값을 수정할 수 없게 된다.
 */

let num4 = 10 as const;

let cat = {
    name: "야옹이", 
    color: "yellow", 
} as const;

/**
 * Non Null 단언
 */

type Post = {
    title: string,
    author?: string;
}

let post : Post = {
    title: "게시글1", 
    author: "테스트"
}

// const len: number = post.author?.length;    // 옵셔널 체이닝을 사용하고 있기 때문에 값이 number나 undefined가 될 수 있다. 
const len2: number = post.author!.length;    // !(non null단언)을 사용해서 값이 undefined가 아님을 알려줌. 





