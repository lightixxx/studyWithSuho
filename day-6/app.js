// numbers 값을 이용해 square에 넓이 값 저장하기 
const numbers = [2, 4, 8, 16, 32, 64];

// function getSquare(data) {
//   const result = [];

//   for(let i = 0; i < data.length; i++) {
//     result.push(data[i] * data[i]);
//   }

//   return result;
// }

// const square = getSquare(numbers);


// alphabet을 모두 대문자로 변환 후 upper에 저장하기
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

// function getUpper(str) {
//   const result = [];

//   for(let i = 0; i < str.length; i++) {
//     result.push(str[i].toUpperCase());
//   }

//   return result;
// }

// const upper = getUpper(alphabet);


// map 함수 만들기
function map(list, cb) {
  const result = [];
  
  for(let i = 0; i < list.length; i++) {
    // result.push(cb(list[i]));
    const d = cb(list[i]);
    result.push(d);
  }
  return result;
}

const upper = map(alphabet, function (v) {
  return v.toUpperCase();
});

const square = map(numbers, function (v) {
  return v * v;
});

// console.log(upper);
// console.log(square);

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



function hoho(number) {
  let result = [];

  for(let i = 0; i < number[i]; i++) {
    if(number[i] % 2 === 0) {
      result.push(number[i]);
    }
  }
  return result;
}

const evenNum = hoho(num);
console.log(evenNum);

// 끝말잇기 만들기
// while(true) {
//   let newWord = prompt(word);

//   if(word[word.length - 1] === newWord[0]) {
//     alert('딩동댕');
//     word = newWord;
//   } else {
//     alert('땡');
//   }
// }