//Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Por ejemplo, que devuelva: code:4, repeat: 1, eat: 1,... Podéis conformar el formato que queráis para la devolución del resultado siempre y cuando sea claro.

const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'party',
    'walk'
  ];

  function repeatCounter(list) {
        const count = {}
    
        list.forEach(word => {
            if(count[word]) {
                count[word]++
            } else {
                count[word] = 1
            }
    
        })
        return count;
    }
    console.log(repeatCounter(words))
