// max 함수
function max(numbers) {
  let maxNum = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (maxNum < numbers[i]) {
      maxNum = numbers[i];
    }
  }
  return maxNum;
}


// min 함수
function min(numbers) {
  let minNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (minNumber > numbers[i]) {
      minNumber = numbers[i];
    }
  }
  return minNumber;
}

const numbers = [0, -50, 444, 1, 23, 14, 5, 6, 234, 99];
//console.log(max(numbers));
//console.log(min(numbers));


// sum 함수
function sum(numbers) {
  let total = 0;
  let i = numbers.length;
  while (i--) {
    total += numbers[i];
  }
  return total;
}


// countIf 함수 
function countIf(arr, target) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      result += 1;
    }
  }
  return result;
}

const genders = ["남", "여", "여", "여", "남", "여", "남", "여"];
// console.log(countIf(genders, "남")); // 3
// console.log(countIf(genders, "여")); // 5


// getDayOfWeek 함수
// 조건문(식) 없이 구현
// function getDayOfWeek(dayNum) {
//   const dayOfWeek = ['Sunday', 'Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//   return dayOfWeek[dayNum];
// }


// getDayOfWeek 함수 리팩토링
// 배열과 객체를 이용해서 ex) getDayOfWeek(0, ‘KR’), getDayOfWeek(1, ‘US’)
function getDayOfWeek(day, code) {
  const week = {
    US : ['Sunday', 'Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    KR : ['일', '월', '화', '수' ,'목', '금', '토']
  }

  return week[code][day];
}


// jQuery의 $ selector 함수
function $(selector) {
  const target = document.querySelector(selector);
}

