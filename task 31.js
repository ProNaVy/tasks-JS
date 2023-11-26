/*strings.js
Реализуйте функцию buildDefinitionList(), которая генерирует HTML список определений (теги <dl>, <dt> и <dd>) и возвращает получившуюся строку. При отсутствии элементов в массиве функция возвращает пустую строку. Экспортируйте функцию по умолчанию.

Параметры функции
Список определений следующего формата:

 const definitions = [
  ['definition1', 'description1'],
  ['definition2', 'description2']
];
То есть каждый элемент входного списка сам является массивом, содержащим два элемента: термин и его определение.

Пример использования
const definitions = [
  ['Блямба', 'Выпуклость, утолщения на поверхности чего-либо'],
  ['Бобр', 'Животное из отряда грызунов'],
];

buildDefinitionList(definitions);
// '<dl><dt>Блямба</dt><dd>Выпуклость, утолщение на поверхности чего-либо</dd><dt>Бобр</dt><dd>Животное из отряда грызунов</dd></dl>';*/

//решение 1

const buildDefinitionList = (definitions) => {
    const parts = [];
    for (const item of definitions) {
      parts.push(`<dt>${item[[0]]}</dt><dd>${item[[1]]}</dd>`);
    }
  
    // Метод join объединяет элементы массива в строку
    // В качестве разделителя между значениями
    // используется то, что передано первым параметром
    const innerValue = parts.join('');
    const result = `<dl>${innerValue}</dl>`;
    return (innerValue === '' ? '' : result);
  }

  //решение 2

  const buildDefinitionList1 = (definitions) => {
    if (definitions.length === 0) {
      return '';
    }
  
    const parts = [];
  
    for (const definition of definitions) {
      const name = definition[0];
      const description = definition[1];
      parts.push(`<dt>${name}</dt><dd>${description}</dd>`);
    }
  
    const innerValue = parts.join('');
    const result = `<dl>${innerValue}</dl>`;
  
    return result;
  };