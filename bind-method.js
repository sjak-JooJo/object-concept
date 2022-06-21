const Kibria  = {
    id: 101,
    money: 5000,
    name: 'RJ Kibrea', 
    treatDey: function(expense){
        this.money = this.money - expense;
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

Kibria.treatDey(100);

const heroTrealDey = Kibria.treatDey.bind(heroBalam);
heroTrealDey(500);
const normalTrealDey = Kibria.treatDey.bind(normalGolam);
normalTrealDey(2000);