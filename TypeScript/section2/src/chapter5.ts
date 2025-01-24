// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입 

enum Role {
    ADMIN = 0,
    USER = 1,
    GUEST = 2,
}

enum Language {
    Korean = "ko",
    English = "en",
}

const user1 = {
    name: "정태원",
    role: Role.ADMIN,    // 0 < 관리자
    language: Language.Korean,  // ko < 한국어
}
const user2 = {
    name: "홍길동",
    role: Role.USER, 
}
const user3 = {
    name: "강감찬",
    role: Role.GUEST,
}

console.log(user1, user2, user3)