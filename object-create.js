//1. using object literal
const student = {name : 'sakib al hasan', job: 'Cricketer'};
//2. constructor
const person = new Object();
//3.
//const human = Object.create(null);
const human = Object.create(student);

//console.log(human.job);


//4. class 
class People {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
const peop = new People('manus', 12);
//console.log(peop);

// function 
function Manus(name){
    this.name = name;

}
const man = new Manus('kader')
console.log(man);