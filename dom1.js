
console.log(document);
let show = document.getElementById('show');
console.log(show);
let head = show.getElementsByTagName('h3');

console.log(head);
let pTag = document.createElement('p'); //<p>Hello, World</p>

pTag.setAttribute('id','hello');
pTag.setAttribute('class', 'world');

let text = document.createTextNode('Hello, World');

pTag.appendChild(text);

console.log(pTag);
document.body.appendChild(pTag);
let pList = document.createElement('li');
let text1 = document.createTextNode('박진영');
pList.appendChild(text1);
document.getElementById('list').appendChild(pList);
// document.getElementById('list').remove();
let list = document.getElementById('list');
console.log(list.childNodes);
list.childNodes[1].remove();
list.childNodes;
// 이름을 <li>박진영</li>
// id="list" 하위에 appendChild()\
