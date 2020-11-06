const person = {
  name : '홍길동',
  age : 25,
  weight : 80,
  run : function(){
    // TODO :: 운동을 하는것, 나의 2키로씩 살이 빠진다.
  },
  eat : function(){
    // TODO :: 먹는것, 나의 5키로씩 살이 찐다.
  }
}

person.name;
person.weight;
person.run()
person.eat()


// ES6 클래스를 사용해서 5주차 객체를 리팩토링하세요.
class Person {
  constructor(name, age, weight) {
    this.name = name;
    this.age = age;
    this.weight = weight;
  }

  run() {
    return this.weight -= 2
  }

  eat() {
    return this.weight += 2
  }
}


// ES6 클래스를 이용해서 ARR 클래스를 만드세요.
// 기존 자바스크립트 내장객체인 Array와 동일합니다.
// filter와 map 정도만 내장 메소드를 가지는 객체를 만들어보세요.
class Arr {
  constructor(list) {
    this.list = list;
  }

  filter(cb) {
    let result = [];
    for(let i = 0; i < this.list.length; i++) {
      if(cb(this.list[i])) {
        result.push(this.list[i]);
      }
    }
    return result;
  }

  map(cb) {
    let result = [];
    for(let i = 0; i < this.list.length; i++) {
      const d = cb(this.list[i]);
      result.push(d);
    }
    return result;
  }
}

const list = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const arr = new Arr(list);

// arr.filter(v => v > 8);
// arr.map(v => v * 3);


// 별찍기
for(let star = 1; star <= 5; star++) {
  console.log('*'.repeat(star));
}

for(let star = 5; star >= 1; star--) {
  console.log('*'.repeat(star));
}