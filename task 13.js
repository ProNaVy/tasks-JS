/*В программе задан объект employees, который содержит ряд свойств и методов. Сформируйте строку с именами всех свойств через запятую и пробел (, ) и выведите в консоль. Имена методов добавляться не должны.
Пример значений переменных:

employees = {
    firstName: "Петя",
    lastName: "Иванов",
    ratePerDay: 2500,
    workingDays: 5,
    getSalary() { console.log(employees.ratePerDay * employees.workingDays )} 
}
Пример результата:

firstName, lastName, ratePerDay, workingDays*/

//Вариант 1

const employees = {
    firstName: "Петя",
    lastName: "Иванов",
    ratePerDay: 2500,
    workingDays: 5,
    getSalary() { console.log(employees.ratePerDay * employees.workingDays )} 
}

const result = Object.entries(employees).reduce((res, [key, value]) => {
    if (typeof value === 'function') {
      return res;
    }
  if (res === "") {
    return key;
  } else {
    return res + ", " + key;
  }
  }, "");
  console.log(result);
  

//Вариант 2

let empValues = []
for (const [key, value] of Object.entries(employees)){
  if (typeof value != "function"){
    empValues.push(key)
  }
}
console.log(empValues.join(", "))
