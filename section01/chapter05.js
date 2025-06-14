console.log("chapter 5");
// 1. Number Type
let num1 = 26;
let num2 = 1.5;
let num3 = -20;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2); //모듈러 연산

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN; // 수치연산이 실패 했을 때 결과 값으로 나타냄

// console.log(1 * "hello");

// 2. String Type
let myName = "김경연";
let myLocation = "정글";
let introduce = myName + myLocation;

// console.log(introduce);

let introduceText = `${myName}은 ${myLocation}에 있습니다`; //백틱: 변수 값을 동적으로 문자열에 포함 가능
// console.log(introduceText);
// -> 템플릿 리터럴 문법

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다)
let empty = null;
