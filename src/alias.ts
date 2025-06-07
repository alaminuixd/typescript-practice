// we use "type" keyword "name of alias" and "equal =" sign to declare an alias in TypeScript
type Rgb = [number, number, number];

function getRandomColor(): Rgb {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return [r, g, b];
}
console.log(getRandomColor());
console.log(getRandomColor());
console.log(getRandomColor());
console.log(getRandomColor());

type User = {
  name: string;
  score: number;
};

const userOne: User = {
  name: "Al Amin",
  score: 89,
};

function formateUser(user: User): User {
  console.log(`${user.name}: ${user.score}`);
  return userOne;
}
console.log(formateUser(userOne));
formateUser({ name: "Rupu", score: 34 });
