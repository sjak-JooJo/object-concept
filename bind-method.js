const Kibria = {
    id: 101,
    money: 5000,
    name: 'RJ Kibrea', 
    treatDey: function(expense, boksis){
        this.money = this.money - expense - boksis;
        return this.money;
    }
}