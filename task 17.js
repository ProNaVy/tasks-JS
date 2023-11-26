/*isLeapYear.js
Реализуйте функцию isLeapYear(), которая определяет, является ли год високосным или нет. Год будет високосным, если он кратен (то есть делится без остатка) 400 или он одновременно кратен 4 и не кратен 100. Как видите, в определении уже заложена вся необходимая логика, осталось только переложить её на код:

isLeapYear(2018); // false
isLeapYear(2017); // false
isLeapYear(2016); // true
Кратность можно проверять так:

// % - возвращает остаток от деления левого операнда на правый
// Проверяем что number кратен 10
number % 10 === 0

// Проверяем что number не кратен 10
number % 10 !== 0*/

const isLeapYear = (Number) => {
    const numberFerst = Number % 400 === 0;
    const numberToo = (Number % 4 === 0) && Number % 100 !== 0;
    return numberFerst || numberToo;
  };