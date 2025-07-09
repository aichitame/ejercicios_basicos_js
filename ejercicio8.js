
// Buscar la palabra más larga: Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(stringList) {
  let longest = stringList[0];

  for(let i = 1; i < stringList.length; i++){
    if(stringList[i].length > longest.length){
      longest = stringList[i];
    }
  }

  return longest;
}

console.log(findLongestWord(avengers));

