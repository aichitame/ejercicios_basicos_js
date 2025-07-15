//Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Por ejemplo, que devuelva: code:4, repeat: 1, eat: 1,... Podéis conformar el formato que queráis para la devolución del resultado siempre y cuando sea claro.

const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'party',
    'enjoy',
    'walk',
    'sleep',
    'code',
    'enjoy',
    'party',
    'sleep',
    'code',
    'party',
    'walk'
  ];


  function repeatCounter(list) {
        const result = {}
    
       /*FORMA 1 (que no me queda muy clara)
       
       list.forEach(word => {
            if(count[word]) {
                count[word]++
            } else {
                count[word] = 1
            }

        })
        return count;
    }
    console.log(repeatCounter(words))*/ 

    //FORMA 2

    for (const word of list){
        if (result[word]) {
            result[word]++;
        } else{
            result[word] = 1;
        }
    }
    return result;
}

console.log(repeatCounter(words))