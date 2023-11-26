/*isInternationalPhone.js
Реализуйте функцию isInternationalPhone(), которая проверяет формат указанного телефона. Если телефон начинается с +, значит это международный формат.

isInternationalPhone('89602223423'); // false
isInternationalPhone('+79602223423'); // true*/

const isInternationalPhone = (Text) => Text[0] === '+'