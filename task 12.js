/*В программе объявлена переменная list, в которую записан массив из объектов. В каждом объекте записаны название продукта и его стоимость.
Выведите в консоль название продукта, цена которого является максимальной в заданном массиве. Если таких несколько, выведите название первого из них.

Пример значений переменных:
 list = [
 {product: "Apple", price: 25},
 {product: "Cherry", price: 32},
 {product: "Strawberry", price: 45}
]
Пример результата:
"Strawberry"
*/

let list = [
    {product: "Apple", price: 25},
    {product: "Strawberry", price: 45},
    {product: "Cherry", price: 32},
   
   ]
    let resultArrProduct = []
   let resultArrPrice = []
   for(arr of list) {
     let product = Object.values(arr)
     resultArrProduct.push(product[0])
     resultArrPrice.push(product[1])
     }
   
   
   const max = resultArrPrice.reduce((acc, curr) => curr > acc ? curr : acc, resultArrPrice[0]);
   
   for(a of resultArrPrice){
     if(a === max){
       console.log(resultArrProduct[resultArrPrice.indexOf(a)])
      }
   }
   