/*capitalize.js
Реализуйте функцию capitalize(), которая принимает непустую строку и приводит первую букву строки к верхнему регистру:

const name = 'arya';
console.log(capitalize(name)); // => "Arya"
*/

const capitalize = (name) => {
    return  name[0].toUpperCase() + name.slice(1, capitalize.lenght);
  }