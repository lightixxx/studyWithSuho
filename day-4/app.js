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

// getDayOfWeek 함수
// 조건문(식) 없이 구현