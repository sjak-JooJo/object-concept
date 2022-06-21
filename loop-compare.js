const bottle = {
    color: 'yellow',
    hold: ' water', 
    price: 50, 
    isCleaned : true
};

for(const prop in bottle){
    //console.log(prop, bottle[prop]);
}

const keys = Object.keys(bottle);
//console.log(keys);
for(const prop of keys){
    //console.log(prop, bottle[prop]);
}

// advanced
/* const entries = Object.entries(bottle);
console.log(entries); */
for(const [key, value] of Object.entries(bottle)){
    console.log(key, value);
}

// 