// 타입 별칭
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
    extra?: string;
}

function func() {
    type User = {};
}

// let user: {
//     id: number;
//     name: string;
//     nickname: string;
//     birth: string;
//     bio: string;
//     location: string;
// } = {
//     id: 1,
//     name: "정태원",
//     nickname: "t4e1",
//     birth: "1992.11.25",
//     bio: "안녕하세요",
//     location: "부산시"
// }

let user: User = {
    id: 1,
    name: "정태원",
    nickname: "t4e1",
    birth: "1992.11.25",
    bio: "안녕하세요",
    location: "부산시"
}


//인덱스 시그니쳐 
// 키와 밸류의 타입이 특정 규칙을 가질때 유용하게 사용 가능
// 


// type conutryCodes = {
//     Korea: string;
//     UnitedState: string;
//     UnitedKingdom: string;
// }

type ConutryCodes = {
    [key : string]: string;
}

let conutryCodes: ConutryCodes = {
    Korea: 'ko',
    UnitedState: 'us',
    UnitedKingdom: 'uk',
}

type CountryNumCodes = {
    [key: string]: number;
    // Korea: string;   // 추가할 타입은 기존에 정의한 타입과 같거나 호환되어야 한다. 
}

let countryNumCodes: CountryNumCodes = {
    // Korea: "kr",
    UnitedState: 840,
    UnitedKindom: 826,
}