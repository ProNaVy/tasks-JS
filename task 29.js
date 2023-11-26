/*Модифицируйте функцию printNumbers() так, чтобы она выводила числа в обратном порядке. Для этого нужно идти от верхней границы к нижней. То есть счётчик должен быть инициализирован максимальным значением, а в теле цикла его нужно уменьшать до нижней границы.

printNumbers(4);
4
3
2
1
finished!*/

const printNumbers = (initialNumber) => {
    let i = 0;
    
    while (i < initialNumber) {
      console.log (initialNumber - i);
      i = i + 1;
    }
    console.log('finished!');
  };