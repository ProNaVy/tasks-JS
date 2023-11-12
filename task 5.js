/*В программе объявлена переменная data, в которой записано строковое значение. Напишите функцию getNumber(data), которая преобразовывает строку в число по следующему правилу:
•  если переменная data содержит не число, функция должна вернуть численное значение 0;
•  если переменная data содержит число, например "123", то функция возвращает числовое значение 123.Вызовите эту функцию и выведите результат в консоль.

Пример значений переменных:
data = "привет"
Пример результата:
0
*/

function getNumber(data) {
    let result
    if(isNaN(data) === true && isNaN(parseInt(data)) === true) {
   return 0
    }
    if(parseInt(data) !== NaN) {
    result = parseInt(data)
    } else if (isNaN(data) === true && parseInt(data) === NaN) {
    result = parseInt(data)
    } 
    return result
  }
  console.log(getNumber(data))
  
