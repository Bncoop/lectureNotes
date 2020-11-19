let pie = ['apple', 'blueberry', 'peach', 'chocolate peanut butter', 'cherry', 'oreo', 'chicken pot', 'shephard']

// let arr = [];

// for(let fruit = apple, blueberry, peach, cherry; let nonFruit = chocolate peanut butter, oreo, chicken pot, shepard)
// if(fruit = apple, blueberry, peach, cherry){
//     console.log(pie[fruit]);
// } else(nonFruit = chocolate peanut butter, oreo, chicken pot, shepard) {
//     console.log(pie[nonFruit]);
// }


let pies = ['apple', 'blueberry', 'peach', 'chocolate peanut butter', 'cherry', 'oreo', 'chicken pot', 'shephard']

for (pie of pies) {
    console.log(`${pie} pie`);
}


let pies = ['apple', 'blueberry', 'peach', 'chocolate peanut butter', 'cherry', 'oreo', 'chicken pot', 'shephard']

for (pie of pies) {
    if(pie.includes("apple") || pie.includes("blueberry") || pie.includes("peach") || pie.includes("cherry")){
        console.log(`${pie} pie is a fruit pie`)
    } else {
console.log(`${pie} pie is not a fruit pie`)
    }
}





