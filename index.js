const user = {
  name: 'joe',
  age: 30
}

// function printInfo(user) {
//   return '<h1>Hola ' + user.name + '</h1>';
// }

// function printInfo(user) {
//   return '<h1>Hola ' + user['name'] + '</h1>';
// }

//Destructuring
// function printInfo({ name }) {
//   return '<h1>Hola ' + name + '</h1>';
// }

function printInfo(user) {
  const { name, age } = user;
  return '<h1>Hola ' + name + ', tu edad es ' + age + '</h1>';
}

console.log(printInfo(user));
document.body.innerHTML = printInfo(user);