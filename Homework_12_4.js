/* Задание 4.
Реализовать следующее консольное приложение подобно примеру,
который разбирался в видео. Реализуйте его на прототипах.
Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.
Таких приборов должно быть, как минимум, два
(например, настольная лампа и компьютер).
Выбрав прибор, подумайте, какими свойствами он обладает.
*/

function Electrodevice(name) {
    this.type = 'electrical appliance',
        this.subtype = 'household',
        this.name = name
}

function HomeDevice(name, power) {
    this.name = name,
        this.power = power,
        this.getInfo = function(){
            console.log(`Электроприбор ${this.name} относится к типу ${this.subtype}`)
        }
}

HomeDevice.prototype = new Electrodevice();

const fridge = new HomeDevice ('fridge', 300);
const cleaner = new HomeDevice ('cleaner', 550);
const tvset = new HomeDevice ('tvset', 130);

/* Функция button, которая "включает/ выключает" приборы в сети
и позволяет рассчитывать требуемую мощность сети*/
HomeDevice.prototype.button = function (flag, numm) {
    let c = 0;
    if (flag === 'on') {
        c=1;
        console.log(`В сети ${numm} электроприбор(а) ${this.name}, которые потребляют ${c*this.power*numm} Ватт энергии`)
    } else {
        console.log(`От сети отключен электроприбор ${this.name}`)
    }
    return c*this.power*numm
}
//console.log(fridge, cleaner, tvset);

fridge.getInfo();

const status1 = fridge.button('on', 2);
const status2 = cleaner.button('on', 1);
const status3 = tvset.button('off', 3);

console.log(`Совокупная потребляемая энергия приборов ${status1 + status2 + status3} Ватт`)
