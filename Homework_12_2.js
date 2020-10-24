/*Задание 2.

Написать функцию, которая принимает в качестве аргументов строку и объект,
а затем проверяет есть ли у переданного объекта свойство с данным именем.
Функция должна возвращать true или false.
*/

function objectStr(str, obj){
    return str in obj
}

const obj1 = {a: 1, b: 2, c:3};
const obj2 = Object.create(obj1);
obj2.d = "Piter";
obj2.g = "Saratov";
obj2.color = "blue";
//console.log(obj2);

const strin = 'color';
console.log(objectStr(strin, obj2));

// Решение верное, но функцию можно было записать короче, выше в коде исправила