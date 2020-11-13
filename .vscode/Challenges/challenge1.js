let age = 25;

if (age>= 21) {
    console.log("Yes can purchase");
} else {
    console.log("Can not purchase");
}



 
var myName = "Brandy";
let friendsName = "Diana";
let sentence
//console.log(myName.length);
//console.log(friendsName.length);

 if(myName.length> friendsName.length){
 sentence = "my name is longer than" + friendName;
 console.log(sentence)
 } else {
     const differenceInLetters = myName.length - friendsName.length;
    sentence = `${friendsName}'s name is longer than ${myName} by ${differenceInLetters} letters`;
    console.log(sentence);
 }

 var name1 = "Eva"
 var name2 = "Amanda"
 var n1 = (name1.length);
 var n2 = (name2.length);
 var n3 = n1 - n2;
 var n4 = n2 - n1;
 
 console.log(n1);
 console.log(n2);
 if (n3 >= n4) {
     console.log(name1+" is longer.")
     console.log("It is '+ n3 +' characters longer.")
 } else {     
     console.log(name2+" is longer.")
     console.log('It is '+ n4 +' characters longer.')
 }
 