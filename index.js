function add(x, y) {
  return x + y;
}

//Arrow Function
const add = (x, y) => {
  return x + y;
};

const button = document.createElement('button');
button.innerText = 'click me';

//With arrow functiion
button.addEventListener('click', () => {
  alert('clicked');
});

document.body.append(button);