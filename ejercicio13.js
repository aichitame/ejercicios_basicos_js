//Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array. Esta función comprueba si existe el elemento, y en caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false.

const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];

  function searchName(array, value) {
    const index = array.indexOf(value);
    if (index !== -1) {
      return true + ' - posición: ' + index;
    } else {
      return false;
    }
  }
  
  const result1 = searchName(names, 'María');
console.log(result1); // true - posición: 2

const result2 = searchName(names, 'Aixa');
console.log(result2); // false


  /* Esto es lo que he podido yo razonar sin ayuda :')
  
  function nameFinder(nameList) {
    for (const name of nameList) {
      if(nameList.includes(name)){
        console.log(name);
      }
    }
  }

  nameFinder(names) */