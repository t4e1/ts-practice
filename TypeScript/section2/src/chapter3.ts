// object
let user: {
    id?: number;    // 선택적 프로퍼티를 설정하려면 ? 추가
    name: string;
} = {
    id: 1,
    name: "정태원",
};

user.id;

user = {
    name: "홍길동", // id를 몰라서 이름만 먼저 설정할 경우
}

let config: {
    readonly apiKey: string;    // 값이 수정되어서는 안되는 프로퍼티는 readOnly 를 붙임
} = {
    apiKey: "My Key"
}