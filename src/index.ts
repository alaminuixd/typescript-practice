let planet: string;
let moons: number;
let isLarge: boolean;

planet = "Saturn";
moons = 23;
isLarge = true;

console.log(planet);
console.log(moons);
console.log(isLarge);

// null & undefined
let something: null;
let another: undefined | string;

something = null;
another = undefined;
another = "new value";

interface Person {
  name: string;
  father: string;
  age: number;
}

let obj: Person;
obj = {
  name: "Al Amin",
  father: "Syed Ahmed",
  age: 23,
};

// using type assertion
let obj2 = {} as { name: string; father: string };
obj2.name = "Sabrina Amin";
obj2.father = "Selim Mia";

// using Record<string, string> for dynamic properties
let obj3: Record<string, string | number | boolean> = {};
obj3.name = "Abrar Syed";
obj3.father = "Al Amin";
obj3.mother = "Subrina Amin";
obj3.age = 34;
obj3.isStudent = true;

console.log(obj3);

const details3: string = `My name is ${obj3.name} son of ${obj3.father} and ${
  obj3.mother
}. I am ${obj.age} years old. I am ${
  obj3.isStudent ? "a student" : "not a student"
}.`;

console.log(details3);
