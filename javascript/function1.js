// function1.js

function addNumber(first, last) {
    var sum = first + last;
    // console.log(`두수의 합 : ${sum}`);
    return sum;
}

var sum1 = addNumber(10, 20);
var sum2 = addNumber(100, 200);

var result = addNumber(sum1, sum2);
console.log(`최종합계 : ${result}`);

result = addNumber('Hello', 'World');
console.log(result);

function getMonthDay(month) {
    //1일의 요일정보를 반환해주는 기능.
    // 일:0, 월:1, 화:2, 수:3, 목:4, 금:5, 토:6
    var monthDay = 0;
    if (month == 1) {
        monthDay = 6;
    } else if (month == 2) {
        monthDay = 2;
    } else if (month == 3){
        monthDay = 2;
    } else if (month == 4){
        monthDay = 5;
    } else{
        monthDay = 0
    }
    return monthDay;
}



function getLastDate(month) {
    var lastDate = 31
    switch (month) {
        case 2:
            lastDate = 28;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            lastDate = 30;
            break;
        default:
            lastDate = 31;
    }
    return lastDate;
}
var month = 2;
console.log(`${month}월의 마지막날은 ${getLastDate(month)}`);