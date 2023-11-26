/*countChars.js
Функция countChars() из теории считает, сколько раз входит буква в предложение и при этом учитывает регистр букв. То есть A и a с её точки зрения разные символы. Реализуйте вариант этой же функции, так чтобы регистр букв был не важен:

countChars('HexlEt', 'e'); // 2
countChars('HexlEt', 'E'); // 2*/

const countChars = (str, char) => {
    let i = 0;
    let count = 0;
    while (i < str.length) {
      if (str[i].toUpperCase() === char.toUpperCase()) {
        // Считаем только подходящие символы
        count = count + 1;
      }
      // Счетчик увеличивается в любом случае
      i = i + 1;
    }
  
    return count;
  };