//Completa la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números del array.

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
let sum = 0;
for (const number of numberList) {
    sum += number;
}
console.log(sum);
}

sumNumbers(numbers);

/* OPCIÓN B

for(let i = 0; i < numberList.length; i++){
    sum += numberList[i];
}
return sum;
}

console.log(sumNumbers(numbers));
*/