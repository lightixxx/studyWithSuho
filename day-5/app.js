function Library(list) {
  return {
    find(name) {
      const result = list.find(elem => name === elem);
      return result === undefined ? 'Error' : result;
    },
    add(name) {
      list.push(name);
      return list;
    },
    list() {
      return list;
    },
    delete(name) {
      list.splice(list.indexOf(name), 1);
      return list;
    }
  }
}

const bookList = ['자바스크립트완전정복', '파이썬', 'java의 정석'];
const bookStore = new Library(bookList);
// bookStore.find('파이썬') // 파이썬 (없다면 에러)
// bookStore.add('HTML정복');
// bookStore.list(); //bookList를 출력
// bookStore.delete('파이썬'); // 파이썬 제거


const person = {
  name : '홍길동',
  age : 25,
  weight : 80,
  diet : function(exercise){
    // TODO :: 운동을 하는것, 나의 2키로씩 살이 빠진다.
    if(exercise === 'run') return this.weight = this.weight - 2;
    if(exercise === 'walk') return this.weight = this.weight - 1;
    if(exercise === 'swim') return this.weight = this.weight - 4;
    if(exercise === 'marathon') return this.weight = this.weight - 5;
    return this.weight;
  },
  eat : function(food){
    // TODO :: 먹는것, 나의 5키로씩 살이 찐다.
    // return this.weight + 5;
    if(food === 'hamburger') return this.weight = this.weight + 2;
    if(food === 'pizza') return this.weight = this.weight + 3;
    return this.weight;
  }
}

// person.name;
// person.weight;
// person.diet('run');
// person.eat()