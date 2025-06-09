/* const colorContainer = document.getElementById("colorContainer");
const btnTheme = document.getElementById("btn-theme"); */

type Rgba = [number, number, number, number];

function generateRGB(): Rgba {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const a = 1;
  return [r, g, b, a];
}

function toString(colors: Rgba): string {
  return `rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, ${colors[3]})`;
}

/* btnTheme?.addEventListener("click", () => {
  if (colorContainer) {
    colorContainer.style.backgroundColor = toString(generateRGB());
  }
});
 */

type User2 = {
  name: string;
  age: number;
};

const user1: User2 = {
  name: "Al Amin",
  age: 34,
};

function printUser(user: User2): User2 {
  console.log(`Name: ${user.name}, age: ${user.age}`);
  return { name: "Ruhul Amin", age: 34 };
}
printUser(user1);
console.log("hello");
