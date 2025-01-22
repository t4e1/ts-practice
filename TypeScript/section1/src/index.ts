const a = 1;

// 모든 타입스크립트 파일은 글로벌 모듈로 취급된다. 
// 따라서 다른 파일에서 선언된 변수도 같은 공간에서 선언된 것으로 여겨짐.
// export {};  // import 나 export 같이 모듈과 관련된 키워드를 사용하면 그 파일은 독립된(격리된) 모듈로 파악한다.
// 아니면 tsconfig.json 에 moduleDetection을 force로 설정하면 됨. 
