console.log("chapter 12");

// 1. 함수 표현식
// varB는 변수 값으로써 함수를 생성하는 방식
// -> 함수 표현식
// ->호이스팅의 대상이 되지 않는다
function funcA() {
  console.log("funcA");
}

let varA = funcA;
// console.log(varA);
varA();

let varB = function () {
  //익명 함수
  console.log("funcB");
};

varB();

// 2. 화살표 함수
// let varC = () => {
//   return 1;
// };

let varC = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC(10));
