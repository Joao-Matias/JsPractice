const name = "Joao";

const person = { id: 1, name: "Joao", age: 43 };

const party = [
  { id: 1, name: "Joao", age: 43 },
  { id: 2, name: "Marta", age: 46 },
  { id: 3, name: "Diego", age: 55 },
  { id: 4, name: "Rui", age: 65 },
];

const ages = party.map((person) => person.age);

ages.sort((a, b) => a - b);

const sortedByAge = party.sort((a, b) => a.age - b.age);
const youngest = sortedByAge[0];
// 0 -> index in the first position
const eldest = sortedByAge[sortedByAge.length - 1];
// ?? -> index in the last position

console.log(youngest);
console.log(eldest);
