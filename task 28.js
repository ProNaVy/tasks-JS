/*joinNumbersFromRange.js
Реализуйте функцию joinNumbersFromRange(), которая объединяет все числа из диапазона в строку:

joinNumbersFromRange(1, 1); // '1'
joinNumbersFromRange(2, 3); // '23'
joinNumbersFromRange(5, 10); // '5678910'*/

const joinNumbersFromRange = (start, finish) => {
    // Технически можно менять start
    // Но входные аргументы нужно оставлять в исходном значении
    // Это сделает код проще для анализа
    let i = start;
    let sum = ''; // Инициализация суммы
  
    while (i <= finish) { // Двигаемся до конца диапазона
      sum = sum + i; // Считаем сумму для каждого числа
      i = i + 1; // Переходим к следующему числу в диапазоне
    }
  
    // Возвращаем получившийся результат
    return sum;
  };