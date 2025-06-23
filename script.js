//  


// cara satu untuk memnaggil array
// const p = document.getElementsByTagName('p')[0];
// p.style.color='red';

// cara dua
// const p = document.getElementsByTagName('p');
// p[0].style  .color='red'; 

// cara 3 looping
// for(let i = 0; i < p.length; i++){
//     p[i].style.backgroundColor='lightblue'
// } 


// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML='ini paragraf 1 sudah diubah';

// const p4 = document.querySelector('#b p');
// p4.style.color='green';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor='lightgreen';

// const p = document.querySelectorAll('p');
// for(let i= 0; i < p.length; i++){
//     p[i].style.backgroundColor='lightblue';
// }

// const sectionb= document.querySelector('section#b');
// const p4 = sectionb.getElementsByTagName('p')[0];
// p4.style.color='green';

// const judul = getElementById('judul');
// judul.innerHTML='ini judul sudah diubah';

// dom manupation

// manupulasi node
const pBaru = document.createElement('p');
const textBaru = document.createTextNode('ini paragraf baru');
pBaru.appendChild(textBaru);

const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);


const libaru = document.createElement('li');
const textLibaru = document.createTextNode('item baru');
libaru.appendChild(textLibaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');
ul.insertBefore(libaru, li2);

const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

const sectionB = document.getElementById ('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const textH2Baru = document.createTextNode('judul baru');

h2Baru.appendChild(textH2Baru);
sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = 'lightgreen';
libaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';