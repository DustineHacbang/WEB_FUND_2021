// NOTES

// conditionals
var username = "eddieim"
var password = "1234"

//<,>,<=,>=,==,!=

if(username = "eddieim"){
    console.log("Welcome Edward Im")
}

//results in true due to  matching strings in functions

var age = 18

if( age >= 25){
    console.log("You can vote and you can buy lottery tickets")
    console.log("You can purchase nicotine and alchol")
    console.log("You can rent a car")
}
els if(age >= 21){
    console.log("You can vote and you can buy lottery tickets")
    console.log("You can purchase nicotine and alchol")
}
els if(age >= 18){
    console.log("You can vote and you can buy lottery tickets")
} 

var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";
    
if(isSunny) {
  whatToBring += "sunglasses, ";
}
if(temperature < 50) {
  whatToBring += "a coat, ";
}
if(isRaining) {
  whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";
    
console.log(whatToBring);

var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
    
// your code here!
    
console.log("there are " + countPositives + " positive values");
