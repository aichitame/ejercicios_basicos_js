//Dado el siguiente array:
const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];
//4.1 - Saca a "Tendo" por consola atacando su posición.
// console.log(aldeanos[3])

//4.2 - Coloca en el último lugar de este array a "Cervasio".

//aldeanos[4] = "Cervasio"
// console.log(aldeanos[4])

//4.3 - Cambia el primer elemento de este array por "Bambina".
//aldeanos[0] = "Bambina"
// console.log(aldeanos[0])

//4.4 - Dale la vuelta a este array.

//aldeanos.reverse();
// console.log(aldeanos.reverse())

//4.5 - Cambia a "Narciso" por "Canela" haciendo uso de un método de array.
const index = aldeanos.indexOf("Narciso")
if(index === 1){
    aldeanos.splice(index, 1, "Canela");
}
console.log(aldeanos)

//4.6 - Imprime por consola el último elemento de este array sin atacar a la posición explicitamente
// Pista: puedes usar el método length con algo más para ello.
console.log(aldeanos[aldeanos.length - 1])
