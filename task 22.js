/*Выведите на экран первую и последнюю буквы предложения, записанного в константу text, в следующем формате:

First: N
Last: t
Постарайтесь создать только одну константу, в которую сразу запишется нужный текст перед печатью на экран. В этом уроке мы отрабатываем умение собирать составное выражение.*/

const text = 'Never forget what you are, for surely the world will not';

const result = `First: ${text[0]}\nLast: ${text[length(text) - 1]}`;
console.log(result);