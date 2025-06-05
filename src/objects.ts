// Object literals
let user: { firstName: string; lastName: string; age: number } = {
  firstName: "",
  lastName: "",
  age: 23,
};

// object literals with a type assertions
let user2 = {} as { firstName: string; lastName: string; age: number };
user2.firstName = "Ruhul Amin";
user2.lastName = "Khan";
user2.age = 34;
const user2Details = `My name is ${user2.firstName} ${user2.lastName} and I am ${user2.age} years old.`;
console.log(user2Details);

// object literals with no pre-defined types
const user3 = {
  id: 1,
  name: "Jhon Doe",
  father: "Wrick Doe",
  age: 34,
  isStudent: false,
  address: {
    street: "23/D Marque Street",
    city: "New York",
    country: "USA",
  },
  printUser: function () {
    return `My name is ${this?.name} son of ${this.father}. I am ${
      this.age
    } years old. ${this.isStudent && "I am a student"}. My address is ${
      this.address.street
    }, ${this.address.city}, ${this.address.country}`;
  },
};
console.log(user3.printUser());

// type inference with object literals
interface personInt {
  name: string;
  father: string;
  score: number;
}
let person: personInt = {
  name: "Al Amin",
  father: "",
  score: 35,
};

person.name = "Denzel Washington";
person.score = 80;
person.father = "William Jhohon";

console.log(person.father);
