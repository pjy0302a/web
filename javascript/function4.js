// function4.js
// for반복문: 반복횟수 지정.
var sum = 0;
for (let i = 0; i < 10; i++) {
    sum += i;
}
console.log(`sum: ${sum}`);
console.clear();

var cnt = 0;
var isTrueFalse = false;
while (isTrueFalse) {
    
    if(Math.floor((Math.random() * 6)) == 4){
        // break;
        isTrueFalse = false;
    }
    console.log(cnt);
    cnt++;
}
console.log('마지막값 : ' + cnt);

var isTrueFalse = false;
do{
    if(Math.floor((Math.random() * 6 )) == 4){
        isTrueFalse = true;
    }
    else{
        isTrueFalse = false;
    }
    console.log(cnt);
    cnt++;
}while(isTrueFalse);
console.log('마지막값 : ' + cnt);

// while 구문으로 .. -> 임의의 난수 1 ~ 10 까지의 생성.
// 임의의 값이 5가 될때까지 sum의 값에 누적하는 반복문. 
sum = 0;

isTrueFalse = true;
while(true){
    var temp = (Math.floor(Math.random() * 10 ) + 1);
        sum += temp ;
        console.log(temp);
        if(temp==5){
            break;
        }    
}
console.log(`누적된 값: ${sum}`);
console.clear();
sum=0;

while(true){
    var inputName = prompt('값을 입력하세요. 종료하려면 0을 입력하세요. ');    
    // console.log(`입력한 이름==> ${inputName}`);
    sum += parseInt(inputName);
    if(inputName=='0'){
        break;
    }
}
console.log(`누적된 값: ${sum}`);

// 1<?<2