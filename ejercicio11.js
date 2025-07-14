//Calcular promedio mezclado: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.

const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];

function averageWord(list){
  let total = 0;

  for (const element of list) {
    if (typeof element === "number") {
      total += element;
    }else{
      total += element.length;
    }
  }
  console.log(total/list.length);
}

averageWord(mixedElements)

/*function averageWord(list) {
  let total = 0;

  for(let i = 0; i < list.length; i++){
    //const element = mixedElements[i];

    if(typeof list[i] === 'number'){
        total += list[i];
    } else if (typeof list[i] === 'string'){
    total += list[i].length;
  }
}
  return total;
}

console.log(averageWord(mixedElements));
*/