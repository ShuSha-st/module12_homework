/*Задание 3.

Написать функцию, которая создает пустой объект, но без прототипа.
*/

function objectCreate(){
    const obj = Object.create(null);
    return obj
}
console.log(objectCreate())