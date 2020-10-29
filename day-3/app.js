// isEven 함수
// 홀수이면 false, 짝수이면 true를 반환하는 함수
function isEven(n) {
  return n % 2 === 0;
}


// max 함수
// 2개의 숫자를 받아 더 큰 숫자를 반환하는 함수
function max(a, b) {
  return a > b ? a : b ;
}


// fizzBuzz 함수
// 3으로 나누어 떨어지면 "Fizz"를, 5로 나누어 떨어지면 "Buzz", 15로 나누어 떨어지면 "FizzBuzz", 이외의 숫자는 넣은 숫자 그대로 반환하는 함수
function fizzBuzz(num) {
  if(num % 15 === 0) return 'FizzBuzz';
  if(num % 3 === 0) return 'Fizz';
  if(num % 5 === 0) return 'Buzz';
  return num;
}


// grade 함수
// 국,영,수 3개 과목의 점수를 받아서, 평균점수에 따라 수,우,미,양,가 를 반환하는 함수
function grade(kor, eng, math) {
  const total = kor + eng + math;
  const average = total / 3;

  if(average >= 90) return '수';
  if(average >= 80) return '우';
  if(average >= 70) return '미';
  if(average >= 60) return '양';
  return '가';
}


// getDayOfWeek 함수
// 0을 넣으면 "Sunday", 1을 넣으면 "Monday" ... 6을 넣으면 "Saturday", 0~6을 벗어나면 null을 반환하는 함수
function getDayOfWeek(dayNum) {
  switch(dayNum) {
    case 0 : 
      return "Sunday";
    case 1 : 
      return "Monday";
    case 2 : 
      return "Tuesday";
    case 3 : 
      return "Wednesday";
    case 4 : 
      return "Thursday";
    case 5 : 
      return "Friday";
    case 6 : 
      return "Saturday";
    default : 
      return null;
  }
}


// displayGugudan 함수
// 숫자를 받아와서 9단까지 출력하는 함수
function displayGugudan(num) {
  let i = 1;
  while(i <= 9) {
    console.log(`${num} * ${i} = ${num * i}`);
    i++;
  }
}


// fizzBuzzGame 함수
// 위에서 만든 fizzBuzz 함수를 이용해서 입력받은 숫자만큼 출력하는 함수
function fizzBuzzGame(limit) {
  let count = 1;
  while(count <= limit) {
    console.log(fizzBuzz(count));
    count++;
  }
}


// loop 함수
// 외부에서 입력받은 숫자만큼 외부에서 받은 로직을 반복하는 함수
function loop(callback, count) {
  for(let i = 0 ; i <= count; i++) {
    callback(i);
  }
}

// loop (function(i) { 
//   console.log(fizzBuzz(i));
// }, 6);


// asyncLoop 함수
// 외부에서 받은 함수를 입력받은 시간 뒤에 실행하는 함수
function asyncLoop(cb, count, timeout) {
  let i = 0;

  const intervalId = setInterval(function() {
    if(i++ < count) {
      cb(i);
    } else {
      clearInterval(intervalId);
    }
  }, timeout)
}
