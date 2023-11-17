/*Создайте класс Delivery со свойствами name и phone. Помимо описанных свойств, добавьте свойство validPhone, которое проверяет значение свойства phone на вхождение знака + в начале строки. Если знак отсутствует, свойство validPhone должно принять булевое значение false, в противном случае — true. Создайте экземпляр класса Delivery и в качестве аргументов конструктора укажите значения переменных name и phone. Получившийся экземпляр класса запишите в переменную deliveryName.


Пример значений переменных:
name = "Pizza"
phone = "81234567890"
Пример результата:
false*/


//вариант 1

    class Delivery {
      constructor(name, phone) {
        this.name = name;
        this.phone = phone;
      }

      get validPhone() {
        return this.phone[0] === "+" ? true : false;
      }
    }
    const deliveryName = new Delivery(name, phone);



//вариант 2

class Delivery{
  constructor(){
    this.name = name;
    this.phone = phone;
    this.validPhone = this.phone.includes("+");
  }
}
let deliveryName2 = new Delivery(name, phone);
