const gugudan = function asdf(){
    console.log("3 * 1 = 3")
    console.log("3 * 2 = 6")
    console.log("3 * 3 = 9")
    console.log("3 * 4 = 12")
    console.log("3 * 5 = 15")
    console.log("3 * 6 = 18")
    console.log("3 * 7 = 21")
    console.log("3 * 8 = 24")
    console.log("3 * 9 = 27")
};

gugudan(); //asdf()로 호출 불가능  
// 변수의 이름으로 호출해야 함!

function printBanana(){
    console.log("banana")
};

printBanana();

function printApple(){
    console.log("apple")
};

printApple();

function printFruit(name){
    console.log(name);
};
printFruit("melon")

function printAdd(number1, number2){
    console.log(number1 + "+" + number2 +"="+ (number1 + number2))
};
printAdd("5", "6")