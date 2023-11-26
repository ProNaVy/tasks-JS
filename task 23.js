/*myMathModule.js
В файле myMathModule.js:

Создайте функцию getTriangleArea(), которая принимает два аргумента h и b и вычисляет площадь треугольника по формуле A = 1/2 * h * b, где h — высота, а b — основание треугольника.

Вычисление площади треугольника

getTriangleArea(5, 10) === 25;
getTriangleArea(15, 12) === 90;
Экспортируйте функцию.

solution.js
В файле solution.js:

Импортируйте функцию getTriangleArea() из модуля myMathModule.
Создайте функцию, которая принимает аргумент n и возвращает площадь треугольника высотой n и основанием n2/2. Используйте функцию square() (принимает число и возвращает его квадрат).
Экспортируйте созданную функцию по умолчанию.*/

//myMathModule.js

export const getTrianglePerimeter = (a, b, c) => a + b + c;

const getTriangleArea = (h , b) => 1/2 * h * b;

export {getTriangleArea};

//решение

import square from './square.js';

import {getTriangleArea} from './myMathModule.js'

const squareTriangle = (n) => (n * (square(n) / 2)/2);

export default squareTriangle;