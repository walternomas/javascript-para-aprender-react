//Funciones anónimas
//anonymous functions

// function start() {
//   return 'Starting...';
// }

// console.log(function start() {
//   return 'Starting...';
// })

// console.log(function start() {
//   return 'Starting...';
// }())

console.log(function () {
  return 'Starting...';
}())

const button = document.createElement('button');
button.innerText = 'click me';

// button.addEventListener('click', function(){
//   alert('clicked');
// });

button.addEventListener('click', function(){
  alert('clicked');
});

document.body.append(button);