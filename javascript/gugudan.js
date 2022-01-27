//gugudan.js
// var table = null; 
// let num = 2
// document.write('<table>');
// for(var i=1; i<10; i++){
//  table = `<tr class="row">
//     <td>${num}</td>
//     <td>X</td>
//     <td>${i}</td>
//     <td>=</td>
//     <td>${num*i}</td>
//     </tr>`
//     document.write(table);
// }
// document.write('</table>');
// document.write('<br>');

// 반복문 : 반복문을 사용.
// for(var i=2; i<10; i++){
//     document.write(`<div>`)
//     for(var j=1; j<10; j++){
//         document.write(`<p>${i}X${j}=${i*j}</p>`);
//     }
//     document.write(`</div>`)
// }

var start_nums = [2,3,4,5,6,7,8,9];
var end_nums = [1,2,3,4,5,6,7,8,9];
for (var start of start_nums) {
    document.write(`<div class="bold">${start}단</div>`);
    document.write(`<div>`);
    for (var end of end_nums) {
        document.write(`<p>${start}X${end}=${start*end}</p>`);
    }
    document.write(`</div>`);
}