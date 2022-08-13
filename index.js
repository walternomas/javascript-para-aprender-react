//return en funciones
const button = document.createElement('button');
button.innerText = 'click me';

const isAuthorized = true;

// button.addEventListener('click', () => {
//   if(isAuthorized) {
//     alert('está autorizado');
//   } else {
//     alert('no está autorizado');
//   }
// });

button.addEventListener('click', () => {
  if (isAuthorized) {
    return alert('está autorizado');
  }
  alert('no está autorizado');
});

document.body.append(button);