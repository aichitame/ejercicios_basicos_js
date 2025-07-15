//Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. Recuerda no usar frutas duplicadas.

const fruits = ["Strawberry", "Banana", "Orange", "Apple", "Pineapple"];


const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
  { name: "Beef", isVegan: false},
  { name: "Buñuelos", isVegan: false},
  { name: "Carne de res", isVegan: false}
];

let i = 0;

for(const food of foodSchedule){
  if(!food.isVegan){
    food.name = fruits[i];
    food.isVegan = true;
    i++;
  }
}

console.log(foodSchedule);