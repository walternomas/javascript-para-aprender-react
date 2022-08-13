//Array methods
const names = ['ryan', 'joe', 'maria', 'joe'];

// for (let i = 0; i < names.length; i++) {
//   const element = names[i];
//   console.log(element);
// }
names.forEach(name => {
  console.log(name);
});

// const newNames = names.map(function (name) {
//   return `Hello ${name}`;
// });
const newNames = names.map(name => `Hello ${name}`);
console.log(newNames);
console.log(names);

const nameFound = names.find(function (name) {
  if(name === 'joe') {
    return name;
  }
});
console.log(nameFound);

const nameFilter = names.filter(function (name) {
  if(name !== 'joe') { //elimino los joes
    return name;
  }
});
console.log(nameFilter);
console.log(names);