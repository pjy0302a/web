// function5.js

// 1~10까지의 임의수를 생성
// sum_2: sum_3 sum_6: sum_etc: 3=>
// 2의배수 3의배수 6의배수(일경우는 2,3의배수 x 6의배수만)


var sum_2='',
    sum_3='',
    sum_6='',
    sum_etc='',
    total=0;

while(true){
    var temp = (Math.floor(Math.random() * 10 ) + 1);

    // if(sum_2+sum_3+sum_6+sum_etc >= 100){
    if(total >= 100){
        break;
    }else if((temp % 6 ) == 0){
        sum_6 += temp + ' ';
        total += temp;
    }else if((temp % 2 ) == 0){
        sum_2 += temp + ' ';
        total += temp;
    }else if((temp % 3 ) == 0){
        sum_3 += temp + ' ';
        total += temp;
    }else{
        sum_etc += temp + ' '; 
        total += temp;
    }
}

console.log('2의배수 : ' + sum_2);
console.log('3의배수 : ' + sum_3);
console.log('6의배수 : ' + sum_6);
console.log('그외의 값 : ' + sum_etc);
console.log('모든합 : ' + total);


