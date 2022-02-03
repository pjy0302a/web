// object3.js
let arr = new Array();
arr[0] = 1;
arr[1] = 10;
arr[3] = 100;

delete arr[0];
arr[0] = 12;
arr[arr.length] = 50;
arr[arr.length] = 60;
arr[arr.length] = 70;

console.log(arr);
console.log(arr.length);

// push(), pop() : 마지막위치에 추가, 삭제.
let newArr = [];
newArr.push(10);
newArr.push(100);
newArr.push(200);

newArr.pop();
newArr.pop();

// unshift(), shift() : 처음위치에 추가, 삭제
newArr.unshift(100);
newArr.unshift(1000);

newArr.shift(); // 첫번쨰 위치부터 삭제.
newArr.shift();

// splice() : 요소1 -> 요소2 변경.
newArr.splice(0, 1, '10', '20');
newArr.splice(0, 0, 10, 20);

console.log(newArr);
console.log(newArr.length);

let names = ['황우석', '이영식', '정영택', '홍길동'];
// 이영식 삭제
names.splice(1, 1, '김영식');
names.splice(names.length, 0, '박진영');
names.splice(2, 2);
console.log(names);

// concat() 배열 요소 추가
let numbers = [1, 2, 3, 4, 5];
let newNum = numbers.concat(10, 20);
console.log(newNum, typeof newNum);

// 해당되는값이 있으면 인덱스값 없으면 -1
console.log(newNum.indexOf(100));

// join() : 배열요소 -> 문자열.
let newStr = newNum.join(',');
console.log(newStr, typeof newStr);

// every() : 배열의 각 요소에 대해서 function 조건..
let all = newNum.every(function (val, ind, arr) {
    console.log(val, ind, arr)
    return val > 0;
});
console.log(all);

let sAll = newNum.some(function (val, ind, arr) {
    console.log(val, ind, arr)
    return val > 2;
});
console.log(sAll);

console.clear();
// forEach() : 배열의 각 요소에 대해서 function 실행.
let sum = 0;
// newNum.forEach(callBackSum);
newNum.forEach(callBackEven);

function callBackSum(val, ind, arr) {
    console.log(val, ind, arr);
    sum += val;
}

function callBackEven(val, ind, arr) {

    if (val % 2 == 0) {
        console.log(val, ind, arr);
        sum += val
    }
}
console.log(`합계 : ${sum}`);

console.clear();

// filter() : function을 만족하는 새로운 배열 생성.
let over10 = newNum.filter(function (val, ind, arr) {
    console.log(val, ind, arr);
    return val >= 10;
});

console.log(over10);

names = ['user1', 'user2', 'guest1', 'guest2', 'admin'];

let userNames = [];
for (let i = 0; i < names.length; i++) {
    if (names[i].indexOf('user') != -1) {
        userNames.push(names[i]);
    }
}
console.log(userNames);
userNames = [];
for (let name of names) {
    if (name.indexOf('user') != -1) {
        userNames.push(name);
    }
}
console.log(userNames);
userNames = [];
names.forEach(function (val, ind, arr) {
    if (val.indexOf('user') != -1) {
        userNames.push(val);
    }
});
console.log(userNames);

userNames = names.filter(val => val.includes('user'));

console.log(userNames);

// arrow function :
// 메소드의 매개값으로 활용.

function oper(first = 0, last = 0, operFnc) {
    return operFnc(first, last);
}

let result = oper(10, 20, (a, b) => a / b);

console.log(result);

function sum1(a, b) {
    // 두수를 더하는 function;
    return a + b;
}

function multi(a, b) {
    return a * b;
}

// sort() : 정렬.
let numbers2 = [1, 4, 3, 7, 2, 11];
numbers2.sort(function (num1, num2) {
    let diff = num2 - num1;
    return diff; //-값이면 오름차순, +값이면 내림차순
});
numbers2.reverse();
console.log(numbers2);

let fruits = ['cherry', 'cberry', 'apple', 'banana'];
fruits.sort();
console.log(fruits);

let sortNum = [1, 3, 2, 9, 4];
for (let j = 0; j < sortNum.length - 1; j++) {


    for (let i = 0; i < sortNum.length - 1; i++) {
        if (sortNum[i] > sortNum[i + 1]) {
            let temp = sortNum[i + 1];
            sortNum[i + 1] = sortNum[i];
            sortNum[i] = temp;
        }
    }
}
console.log(sortNum);
console.clear();
// slice()
// sortNum = [1, 3, 2, 9, 4];
let newSortNum = sortNum.slice(1, 3); //첫번째 인덱스부터 3번쨰 전까지 추출
console.log(newSortNum)

fruits.slice(1,3);

const array1 = ['a','b','c','d','e'];
console.log(array1.copyWithin(0,2,5));

const array2 = [5,12,8,130,44];
const found = array2.find(element => element > 10);
console.log(found);