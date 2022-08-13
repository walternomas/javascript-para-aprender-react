const background = '#303030';
const color = 'white';
const isAuthorized = false;

//const result = background + color;
//string literals
const result = `${background} ${color}`;

const button = document.createElement('button');
button.innerText = 'Click me';
//button.style = 'background: red; color: white';
button.style = `background: ${isAuthorized ? background : 'red'}; color: ${color};`;

button.addEventListener('click', () => {
  if (isAuthorized) {
    return alert('está autorizado');
  }
  alert('no está autorizado');
});

document.body.append(button);