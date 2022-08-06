// 원시 타입(primitive type)
let number = 1;
let str = "abc";
let bool = true; // true of false -> boolean형
let undi = undefined; // type 자체가 undefined
let nul = null; // type은 object
let symbol = Symbol(); //symbol

console.log(typeof("zxc"));

// 참조 타입
let array =[]; // type -> object
let obj = {}; // type -> object
let func = function(){}; // type -> function

let str2 = "abc";
let str3 = "def";
console.log(str2, str3);

let str4 = "I'm Fine Thank YOU!";
let str5= 'I"m Fine Thank YOU!';

let str6 = "I'm Fine Thank you! \"and you?\""

console.log(str6)

let num
console.log(num); // 할당되지 않은 값에 자동으로 들어감

let num2 = null;
console.log(num2); // 개발자가 의도적으로 값을 비워둘 때 이용

let bool1 = 5 < 7;
console.log(bool1);

let bool2 = 7 > 7;
console.log(bool2);

let arr1 = [10];
console.log(arr1);

let arr2 = [10, 20];
console.log(arr2);
console.log(arr2[1]);

let arr3 = [10, "abc", true, null, undefined]
console.log(arr3);
console.log(arr3[5]);

let student1 = [90, 60, 60 ,70];

console.log(student1[0]);
console.log(student1[1]); // 배열의 단점 -> 값을 파악하기 어려움

let student2 = {
    koreanScore : 90,
    englishScore : 60,
    mathScore : 70,
    "science Score" : 60 //문자 열로 키 값을 쓰면 띄어 쓰기가 가능 함
};

console.log(student2["koreanScore"]);
console.log(student2.englishScore); // 문자형으로 "englishScore"로 적는 것이 아닌 englishScore로 작성해야 오류 안남
console.log(student2["science Score"]) // 하지만 .을 이용할 수 없음