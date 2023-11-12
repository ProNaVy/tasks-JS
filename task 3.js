/*В программе объявлена переменная word, в которой записано строковое значение. Определите, является ли word палиндромом:
•	если является, выведите в консоль "Слово является палиндромом!";
•	если не является, выведите в консоль "Слово не является палиндромом!".
Примечание:
Строка word состоит только из букв разного регистра (большие и маленькие).

Пример значений переменных:
word = "Доход"
Пример результата:
"Слово является палиндромом!"*/

let word = "Доход";

//приводим к одному регистру
let wordLowerCase = word.toLowerCase()

//сздаем переменную с уже перевернутым словом
let arr = [...wordLowerCase]
let result = arr.reverse().join("")

//через цикл сравниваем слова, достаточно сравнить слова до половины
let i = 0;
for (let i = 0; i <= result.length / 2; i++) {

  if (wordLowerCase[i] === result[i]) {
    console.log("Слово является палиндромом!")
    break
  }
  console.log("Слово не является палиндромом!")
  break
}
