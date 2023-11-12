/*В программе объявлена переменная list, в которую записан массив числовых значений от 1 до 100. Используя цикл, сформируйте сумму из простых чисел этого диапазона и выведите результат в консоль.

Пример значений переменных:
list = [1, 2, 3, ... 99, 100]
Пример результата:
1060
*/

function isSimple (value) {
    if (value === 1 || value === 0) {
        return true;
    } else {
        for(let i = 2; i < value; i++) {
            if(value % i === 0) {
                return false;
            }
        }
        return true;  
    }
}

let result =[]
for(let value of list) {
 if (isSimple (value) === true) {
  result.push(value)
 } 
} 
let new_list = result.reduce((a,b) => a+b,0)
console.log(new_list)
