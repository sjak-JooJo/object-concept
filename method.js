const student = {
    id: 101,
    money: 5000,
    name: 'RJ Kibrea',
    major: 'mathematics',
    isRich: 'false',
    subjects: ['English', 'Economics', 'math 101', 'calculus'],
    bestFriedn:{
        name: 'kundu',
        major: 'mathematics'
    },
    takeExam: function(){ // anonymus function
        console.log(this.name,'taking exam');
    },
    treatDey: function(expense, boksis){
        this.money = this.money - expense - boksis;
        return this.money;
    }
}

student.takeExam();
const remaining1 = student.treatDey(900, 100);
const remaining2 = student.treatDey(500, 50);
console.log(remaining2);