/*truncate.js
Реализуйте функцию truncate(), которая обрезает переданную строку до указанного количества символов, добавляет в конце многоточие и возвращает получившуюся строку. Подобная логика часто используется на сайтах, чтобы отобразить длинный текст в сокращенном виде.

Функция принимает два параметра:

Строка, которую нужно обрезать
Число символов, которые нужно оставить
// Передаём текст напрямую
// Обрезаем текст, оставляя 2 символа
truncate('hexlet', 2); // "he..."

// Через переменную
const text = 'it works!';
// Обрезаем текст, оставляя 4 символа
truncate(text, 4); // 'it w...'*/

const truncate = (text, length) => {
       const index = `${text.slice(0, length)}...`;
    return index;
  };