console.log("chapter 11");

// 함수 선언

// function greeting() {
//   console.log("hi!");
// }

// console.log("호출 전");
// greeting();
// console.log("호출 후");

let area1 = getArea(10, 20);
console.log(area1);
let area2 = getArea(30, 20);
console.log(area2);

// 호이스팅
// -> 끌어올리다 라는 뜻
function getArea(width, height) {
  function line() {
    // 중첩 함수
    console.log("-------------");
  }
  line();
  let area = width * height;

  return area;
}
