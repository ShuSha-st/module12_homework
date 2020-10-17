/* Задание 1.

Написать, функцию, которая принимает в качестве аргумента объект
и выводит в консоль все ключи и значения только собственных свойств.
Данная функция не должна возвращать значение.*/

function objectKey(obj){
    for (let [key] in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key} : ${obj[key]}`);
        }

    }
}

const obj1 = {a: 1, b: 2, c:3};
const obj2 = Object.create(obj1);
obj2.d = "Piter";
obj2.g = "Saratov";
//console.log(obj2)
objectKey(obj2)