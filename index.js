const user = {
  name: 'walter',
  lastname: 'barrios',
  age: 44,
  address: {
    country: 'argentina',
    city: 'buenos aires',
    street: 'falsa 123'
  },
  friends: ['martin', 'jorgelina'],
  active: true,
  sendMail: function() {
    return 'sending email...'
  },
  sendMail2() {
    return 'sending other email...'
  }
}

console.log(user);
console.log(user.name);
console.log(user.address);
console.log(user.address.city);
console.log(user.friends);
console.log(user.active);
console.log(user.sendMail);
console.log(user.sendMail());