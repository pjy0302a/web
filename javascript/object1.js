// object1.js
// 생성자함수. object만드는 방식.
function Member(first_name, last_name, age, score){
    this.first_name = first_name;
    this.last_name = last_name;
    this.age = age;
    this.score = score;
    this.fullName = function(){
        return this.last_name + ' ' + this.first_name;
    }
    this.isAdult = this.age >= 20 ? '성인' : '미성년';
    
    
}


var member1 = new Member('길동','홍',19,80);
var member2 = new Member('익수','황',25,90);
var member3 = new Member('찬호','박',30,88);
var members = [member1, member2, member3, new Member('찬호','김',33,78)];
console.log(member1.first_name,member1.last_name,member1.fullName());

var table='<table border="1">';
table += '<thead><tr><th>이름</th><th>나이</th><th>점수</th><th>구분</th></thead>';
table += '<tbody>';
for(let member of members ){
    table += `<tr>`;
    table += `<td>${member.fullName()}</td>`;
    table += `<td>${member.age}</td>`;
    table += `<td>${member.score}</td>`;
    table += `<td>${member.isAdult}</td>`;
    table += `</tr>`;
}
table += `</tbody>`;
table += `</table>`;
console.log(table);
document.write(table);