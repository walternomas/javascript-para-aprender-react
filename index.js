//spread operator
const names = ['ryan', 'joe', 'maria'];
const newNames = ['marcos', 'mario', 'john'];

console.log([...names, ...newNames]);

const user = {
  name: 'ryan',
  lastname: 'ray'
}

const address = {
  street: 'main street 123',
  city: 'buenos aires'
}

const userInfo = {
  ...user,
  ...address
}

console.log(userInfo);
console.log(user);
console.log(address);