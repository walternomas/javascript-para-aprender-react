//Inline Arrow Functions
// const showText = () => {
//   return 'Hola mundo';
// };
const showText = () => 'Hola mundo';
console.log(showText());

const showNumber = () => 22;
const showBoolean = () => true;
const showArray = () => [1,2,3];
console.log(showNumber());
console.log(showBoolean());
console.log(showArray());

//los paréntesis indican que las llaves no indican el cuerpo de la función.
const showObject = () => ({name: 'ryan'});

console.log(showObject());
