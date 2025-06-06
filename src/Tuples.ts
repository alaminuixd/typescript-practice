export const person: [string, number, boolean, {}] = [
  "one",
  23,
  true,
  { name: "khan" },
];
console.log(person);

function useGPS(): [lant: number, lat: number] {
  let lant = 345;
  let lat = 435;
  return [lant, lat];
}
console.log(useGPS());

let user: [name: string, age: number, isStudent: boolean];
user = ["Al Amin Khan", 34, true];
console.log(user[2]);
const [a, b, c] = user;
console.log(a);
