const animals = ["dog", 'cat'];

const anotherAnimals = [...animals, 'bird'];

console.log(anotherAnimals)


const numbers = [0,1,2,3,4,5,6];

const[zero, ...rest] = numbers;

console.log(rest);