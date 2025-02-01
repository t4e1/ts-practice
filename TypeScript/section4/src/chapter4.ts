/**
 * 사용자 정의 타입가드
 */

type Dog = {
    name: string;
    isBark: boolean;
};

type Cat = {
    name: string;
    isScratch: boolean;
}

type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog{
    return (animal as Dog).isBark !== undefined
}

function isCat(animal: Animal): animal is Cat {
    return (animal as Cat).isScratch!== undefined
}

// 원래는 서로소 유니온 타입을 사용하는게 맞지만 사용할 수 없다고 가정했을 때
function warning(animal: Animal){
    // if("isBark" in animal) {
    //     // 강아지
    // } else if ("isScratch" in animal) {
    //     // 고양이
    // }
    if (isDog(animal)){
        animal
    } 
}