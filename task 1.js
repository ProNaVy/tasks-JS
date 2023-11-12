/*В программе объявлены две переменные start и end. Используя цикл, посчитайте сумму чисел из диапазона значений от start до end (включая концы), кратные значению 5. Результат выведите в консоль.
Пример значений переменных:
start = 0 end = 50
Пример результата:
275
*/

const start = 0
const end = 50

let i = start;
let result = 0;
while (i <= end) {
  i++;
  if (i%5 !== 0) {
    continue;
  }
  result += i;
}
if (start === end) {
  result = start
}
console.log(result)
