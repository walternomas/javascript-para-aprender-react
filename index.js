//Manipulación del DOM
const title = document.createElement('h1');
title.innerText = 'hola mundo desde JS';
console.log(title);

const button = document.createElement('button');
button.innerText = 'click';

//Event handlers
button.addEventListener('click', function() {
  console.log('Hola Mundo');
  title.innerText = 'Texto actualizado con JS';
  alert('Se realizó un click');
});

document.body.append(title);
document.body.append(button);
