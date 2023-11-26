/*makeItFunny.js
Напишите функцию makeItFunny(), которая принимает на вход строку и возвращает её копию, у которой каждый n-ный элемент переведен в верхний регистр. n – задается на входе в функцию.

Для определения каждого n-ного элемента понадобится остаток от деления %. Подумайте, как его можно использовать.

const text = 'I never look back';
// Каждый третий элемент
makeItFunny(text, 3); // 'I NevEr LooK bAck'*/

const makeItFunny = (text, number) => {
    let i = 0;
    let count = '';
    while (i < text.length) {
      const current = text[i];
  
      if ((i + 1) % number === 0) {
        count = `${count}${current.toUpperCase()}`;
      } else {
        count = `${count}${current}`;
      }
      i++;
    }
  
    return count;
  };