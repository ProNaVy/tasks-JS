/*В программе объявлена переменная list, в которую записан массив из строковых значений. Посчитайте и выведите в консоль элемент с максимальной длиной. Если элементов с такой длиной несколько, выведите первый.

Пример значений переменных:
list = ["Груша", "Яблоко"]
Пример результата:
"Яблоко"
*/

list.sort((a,b) => b.length - a.length)
console.log(list[0])
