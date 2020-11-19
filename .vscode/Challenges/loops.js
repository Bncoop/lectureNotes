//for(initialExpression; condition; increment){

   // for(let i = 0; i < 10; i++) {
   //     console.log("Hello");
   // }
    
//for(let alphabet = 'a'; alphabet <= 'z'; alphabet++) {
    // console.log(alphabet);
//}


let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let arr = [];

for(let i=0; i < alphabet.length; i++){
    if (i % 2 == 0){
    console.log(alphabet[i]);
arr.push(alphabet[i]);
}else {
    console.log("the index ${i} is an odd number");
 }
}

console.log(arr);

