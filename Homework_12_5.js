/* Задание 5.
Переписать консольное приложение из предыдущего юнита на классы.
*/

class Electrodevice {
    constructor (name){
        this.type = 'electrical appliance',
            this.subtype = 'household',
            this.name = name
    }

    button(flag, numm) {
        let c = 0;
        if (flag === 'on') {
            c=1;
            console.log(`В сети ${numm} электроприбор(а) ${this.name}, которые потребляют ${c*this.power*numm} Ватт энергии`)
        } else {
            console.log(`От сети отключен электроприбор ${this.name}`)
        }
        return c*this.power*numm
    }
}

class HomeDevice extends Electrodevice {
    constructor (name, power) {
        super(name);
        this.power = power
    }
    getInfo(){
        console.log(`Электроприбор ${this.name} относится к типу ${this.subtype}`)
    }
}

const fridge = new HomeDevice ('fridge', 300);
const cleaner = new HomeDevice ('cleaner', 550);
const tvset = new HomeDevice ('tvset', 130);

//console.log(fridge, cleaner, tvset);

cleaner.getInfo();

const status1 = fridge.button('on', 1);
const status2 = cleaner.button('off', 1);
const status3 = tvset.button('on', 3);

console.log(`Совокупная потребляемая энергия приборов ${status1 + status2 + status3} Ватт`)

// 1. Конструкция HomeDevice.prototype.button = function() {...} используется только при работе с функциями-конструкторами. В этом задании мы переходим на классы, поэтому нужно соблюдать синтаксис классов. Т.е. этот метод нужно объявить в теле класса, выше в коде перенесла метод на правильное место
// 2. Также в это задание перекочевали ошибки из предыдущего, попробуйте с использованием тех исправлений, что я там внесла, провести работу над ошибками и переписать это решение на более правильный вариант.
