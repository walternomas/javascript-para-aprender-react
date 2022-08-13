const person = {
  name: 'ryan',
  address: {
    city: 'london'
  }
};

console.log(person.address.city);
//Optional Chaining
console.log(person.location?.city);