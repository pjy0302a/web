let member1 = {
    meb_id: 1001,
    first_name: '준우',
    last_name: '조',
    math_score: 80,
    eng_score: 90
}

let member2 = {
    meb_id: 1002,
    first_name: '홍제',
    last_name: '이',
    math_score: 82,
    eng_score: 88
}

let member3 = {
    meb_id: 1003,
    first_name: '이경',
    last_name: '박',
    math_score: 85,
    eng_score: 99
}
var members = [member1, member2, member3];

function makeTr(member) {
    // meb_id, first_name, math_score, eng_score
    
        var trTag = '<tr>';
        trTag += `<td>${member.meb_id}</td>`;
        trTag += `<td>${member.last_name}${member.first_name}</td>`;
        trTag += `<td>${member.math_score}</td>`;
        trTag += `<td>${member.eng_score}</td>`;
        trTag += `<td><button>삭제</button></td>`;
        trTag += '</tr>';
    
        return trTag;

}
var table = '<table border="1">';
table += '<thead><tr>';
table += '<th>순번</th>';
table += '<th>이름</th>';
table += '<th>영어</th>';
table += '<th>수학</th>';
table += '<th>기능</th>';
table += '</tr></thead>';
table += '<tbody>';
for(let i=0; i<members.length; i++){
     
     table += makeTr(members[i]);
     
}
table += '</tbody>';
table += '</table>';
document.write(table);
console.log(table);