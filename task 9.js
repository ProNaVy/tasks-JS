/*В программе объявлена переменная list, в которую записан массив из числовых значений. Напишите программу, которая переворачивает массив list и выводит результат в консоль. Метод массива reverse() использовать нельзя.

Пример значений переменных:
list = [2, 45, 3, 23, 6]
Пример результата:
[6, 23, 3, 45, 2]
*/

let new_list = []
let len = list.length

for(let i = (len-1); i < len && i >= 0; i--) {
  new_list.push(list[i])
  }

console.log(new_list)
