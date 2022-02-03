// object4.js
let today = new Date('2022-10-05');

today.setDate(4);
today.setMonth(12);
today.setHours(16);
today.setMinutes(30);
today.setSeconds(30);
console.log(today.toDateString());
console.log(today.toTimeString());

console.log(today.getDate());

function printNow(){
    let today = new Date();

    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let ampm = hour > 12 ? 'PM' : 'AM';

    let now = `${year}년 ${month}월 ${date}일 ${hour}시 ${minute}분 ${second}초 ${ampm}`;
    // document.write(now);
    console.log(now);
}
printNow();
setInterval(function (){
    printNow();
}, 1000);
