console.log("chapter 16");
// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "white",
};

animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

console.log(animal);

// 2. 매서드
// -> 값이 함수인 프로퍼티를 말함

const person = {
  name: "김경연",
  // 매서드 선언
  sayHi: function () {
    console.log("안녕!");
  },
};

person.sayHi();
person["sayHi"]();
