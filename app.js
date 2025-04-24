export const App = () => {
  let a = 0;
  let b = 0;

  a += 1;
  b += 2;

  const plus = a + b;
  const sub = a - b;
  const div = a / b;
  const mult = a * b;

  console.log("더하기: " + plus);
  console.log("빼기: " + plus);
  console.log("conflict!!"); 
  console.log("곱하기: " + plus);

  const now = new Date();
  console.log(`현재 시각은 ${now.toLocaleString()} 입니다.`);
};