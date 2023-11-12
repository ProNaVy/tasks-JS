/*В программе объявлена переменная list, в которую записан массив из числовых значений. Рассчитайте произведение максимального и минимального элементов массива. Результат выведите в консоль.

Пример значений переменных:
list = [2, 45, 3, 23, 6]
Пример результата:
90
*/

//сортируем массив по убыванию
const new_list = list.sort((a, b) => a - b)
const max = new_list[0]
const min = new_list[new_list.length-1]
console.log(max*min)
