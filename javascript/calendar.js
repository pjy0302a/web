//calendar.js
var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
document.write('<div class="container">');
for (var day of days) {
    document.write(`<div class="days">${day}</div>`);
}
document.write('<br>');
// var month = Number(prompt('원하는 달을 입력하세요','2'));
for(let i=0; i<getMonthDay(month); i++){
    document.write(`<div class="dayss">&nbsp</div>`);
}

for(i=1;i<= getLastDate(month);i++){
    document.write(`<div class="day">${i}</div>`);
    if((i + getMonthDay(month))% 7 == 0){
        document.write('<br>');
    }
   
}
document.write(`</div>`);