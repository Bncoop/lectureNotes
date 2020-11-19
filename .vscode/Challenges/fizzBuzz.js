

let FB = 150
if (FB%3 == 0 && FB%5 == 0){
    console.log("Fizz Buzz")
} else if (FB%3 == 0){
    console.log("Fizz")
} else if (FB%5 == 0){
    console.log("Buzz")
}


let isDivisibleBy5And3=FB%3==0 && FB%5==0
console.log(isDivisibleBy5And3)
console.log(FB)
switch(true){
    case FB%3==0 && FB%5==0:
    console.log("Fizz Buzz");
    break;
    case FB%3==0:
        console.log("Fizz");
        break;
        case FB%5==0:
            console.log("Buzz");
            break;
default: 
console.log('Not Fizz or Buzz')
        }

let FB = 15;

if(FB%3==0 && FB%5==0) {
    console.log("Fizz Buzz");
} else if(FB % 3 == 0){
    console.log("Fizz"); 
} else if(FB % 5 == 0) {
    console.log("Buzz");
}






