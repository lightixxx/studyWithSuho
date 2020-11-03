const numbers = [2, 4, 8, 16, 32, 64];

function getSquare(data) {
  const result = [];

  for(let i = 0; i < data.length; i++) {
    result.push(data[i] * data[i]);
  }

  return result;
}

const square = getSquare(numbers);

console.log(square); // [[4,16,64,256,1024,4096]]