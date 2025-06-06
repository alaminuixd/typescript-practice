import { v4 as uuidv4 } from "uuid";
interface Author {
  id: string;
  name: string;
  age: number;
  avatar: string;
}

const author: Author = {
  id: uuidv4(),
  name: "Al Amin khan",
  age: 39,
  avatar: "img/avater.png",
};

for (let key in author) {
  console.log(`${key}: ${author[key]}`);
}
