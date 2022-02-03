// object5.js
function clog(str) {
    console.log(str);
}

console.log(Math.round(.5));
clog(Math.floor(3.7));
clog(Math.ceil(3.1));
clog(Math.abs(-10));
clog(Math.max(10, 20, 100, 5));
clog(Math.min(10, 20, 100, 5));
clog(Math.pow(3, 3));

clog(Math.PI);
clog(Math.E);

let numbers = [30, 25, 12, 55, 37, 92, 10];
// let result = Math.max.apply(null, numbers);

function getMaxValue(argsAry){
// argsAry배열변수의 제일큰값을 가져오는 프로그램.
    // for(i=0;i<numbers.length; i++){
    //     if(numbers[i]>numbers[i+1]){
    //         temp = numbers[i];
    //     }
    // }
    // return temp;
    if (!Array.isArray(argsAry)){
        return 'no array';
    }
    let maxVal = 0;
    // for (let i=0;i<argsAry.length;i++){
    //     if(maxVal < argsAry[i]){
    //         maxVal = argsAry[i];
    //     }
    // }
    argsAry.forEach(function (val,ind,ary){
        maxVal = maxVal < val ? val : maxVal;
    });
    return maxVal;
}
result = getMaxValue(numbers);
console.log(`최대값은 ${result}`);

let persons = [{
    fName:'Hong', 
    age:20, 
    score:80
},
{
    fName:'Hawng', 
    age:22, 
    score:85
},{
    fName:'Choi', 
    age:23, 
    score:83
}
];
 console.log(persons[2].score);

function getMaxObject(args){
// score가 최고점수인 person을 가져오는 프로그램
    for(i=0;i<persons.length-1;i++){
        // console.log(persons[i].score);
        if(persons[i].score > persons[i+1].score){
            temp = persons[i];

        }
        
    }
    return `최고점수자 : ${temp.fName} 점수 : ${temp.score}`;
}
result = getMaxObject(persons);
console.log(result); //최고점수자:Hwang, 점수:85