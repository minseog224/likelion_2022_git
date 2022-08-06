let num = 3; // 중복 선언 불가능
console.log(num);

var str = "a"; // 중복 선언 가능
console.log(str);

const constant = 10; // 값 변경 불가능
console.log(constant);

let userName = "minseok"; // O
let user_name = "minseok" // x  변수 명은 카멜케이스 방법으로 작성

// 변수 이름은 _, $, 문자로만 시작
    // let 12day = "mon" // X
    //let @day12 = "mon" // X
let day12 = "mon" // O
let _day12 = "mon" // O
let $day12 = "mon" // O

// 상수나 축약어는 대문자와 스네이크케이스 방법으로 작성
const HTML = "HYPER TEXT MARKUP LANGUAGE";
const MAX_LEVEL = "300";

// 에약어는 사용할수 없다. ex var, let, const, typeof 등...
    //let var = 10; // X