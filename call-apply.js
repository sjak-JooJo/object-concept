const Kibria  = {
    id: 101,
    money: 5000,
    name: 'RJ Kibrea', 
    treatDey: function(expense, boksis, tax){
        this.money = this.money - expense - boksis;
        console.log('herer6767', this);
        return this.money;
    }
}
const heroBalam = {
    id:102,
    money: 6000,
    name: 'Hero Balam'
}
const normalGolam = {
    id:102,
    money: 8000,
    name: 'Hero Balam'
}
//call
/* Kibria.treatDey.call(heroBalam, 500, 100, 50);
Kibria.treatDey.call(heroBalam, 300, 50, 30); */

Kibria.treatDey.apply(heroBalam, [500, 100, 50]);
Kibria.treatDey.apply(heroBalam, [1500, 100, 90]);

Kibria.treatDey.apply(normalGolam,[700, 100, 70])