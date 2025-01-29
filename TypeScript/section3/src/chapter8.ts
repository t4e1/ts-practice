/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입
 */

type Admin = {
    tag: 'ADMIN';       // string 리터럴 타입을 tag로 선언해줌으로써 각 객체들이 교집합을 가지지 못하도록 한다.( 서로소 관계를 만들어줌 )
    name: string;
    kickCount: number;
};

type Member = {
    tag: 'MEMBER';
    name: string;
    point: number;
};

type Guest = {
    tag: 'GUEST';
    name: string;
    visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다. 
// Member -> {name}님 현재까지 {point} 모았습니다. 
// Guest -> {name}님 현재까지 {visitCount}번 오셨습니다.
// function login(user: User) {
//     if('kickCount' in user){
//         // admin
//         console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
//     } else if('point' in user){
//         // member
//         console.log(`${user.name}님 현재까지 ${user.point} 모았습니다. `);
//     } else {
//         // guest
//         console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
//     }
// }

function login(user: User) {

    // if(user.tag === 'ADMIN'){
    //     // admin
    //     console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
    // } else if(user.tag === 'MEMBER'){
    //     // member
    //     console.log(`${user.name}님 현재까지 ${user.point} 모았습니다. `);
    // } else {
    //     // guest
    //     console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
    // }

    switch (user.tag) {
        case "ADMIN": {
            console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
            break;
        }
        case "MEMBER": {
            console.log(`${user.name}님 현재까지 ${user.point} 모았습니다. `);
            break;
        }
        case "GUEST": {
            console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
            break;
        }
    }
}

/**
 * 복습겸 사용 사례
 */

// 비동기 작업의 결과를 처리하는 객체

type LoadingTask = {
    state : "LOADING"
}
type FailedTask = {
    state : "FAILED",
    error : {
        message: string;
    };
}
type SuccessTask = {
    state : "SUCCESS"
    response: {
        data: string;
    }
}

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

// 로딩 중 -> 콘솔에 로딩중 출력
// 실패 -> 실패 후 에러메세지 출력
// 성공 -> 성공 후 데이터 출력
function processResult(task: AsyncTask) {
    switch(task.state){
        case "LOADING": {
            console.log("로딩 중");
            break;
        }
        case "FAILED": {
            console.log(`에러 발생 : ${task.error.message}`);
            break;
        }
        case "SUCCESS": {
            console.log(`성공 : ${task.response.data}`);
            break;
        }
    }
}

const loading : AsyncTask = {
    state: "LOADING",
}

const failed : AsyncTask = {
    state: "FAILED", 
    error: {
        message: "오류 발생",
    },
}

const success : AsyncTask = {
    state: "SUCCESS",
    response: {
        data: "데이터",
    },
}


