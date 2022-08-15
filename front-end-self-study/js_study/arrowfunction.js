function sum(num1, num2){
    return num1 + num2;
};

const result = sum(10, 20);
console.log(result);


const sum_2 = (num3, num4) => {
    return num3 + num4;
};

const result_2 = sum_2(50,60);
console.log(result_2);


const sum_3 = (num5, num6) => num5 + num6;

const result_3 = sum_3(110, 130);
console.log(result_3);

const one = num7 => num7 * num7;
const one_result = one(100);
console.log(one_result);


const getObject = () => {
    return{
        name : "민경",
        age : "21"
    };
}

const obj = getObject();
console.log(obj)