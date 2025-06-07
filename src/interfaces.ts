import { v4 as uuidv4 } from "uuid";

interface Author {
  name: string;
  avater: string;
  age: number;
  father: string;
}

const author1: Author = {
  name: "Al Amin",
  avater: "img/avater.png",
  age: 34,
  father: "Syed Ahmed",
};

for (const key of Object.keys(author1) as (keyof Author)[]) {
  // console.log(`${key}: ${author1[key]}`);
}

interface Post {
  title: string;
  body: string;
  tags: string[];
  create_at: Date;
  author: Author;
}

const newPost2: Post = {
  title: "My first Blog Post",
  body: "Lets play something interesting and learn.",
  tags: ["gaming", "educational"],
  create_at: new Date(),
  author: {
    name: "Jhon Doe",
    avater: "img/avater.png",
    age: 34,
    father: "Syed Ahmed",
  },
};

const newPost3: Post = {
  title: "My Second Blog Post",
  body: "When I was a young boy, I used to like playing football.",
  tags: ["gaming", "educational"],
  create_at: new Date(),
  author: author1,
};

function createPost(post: Post) {
  const { title, body, tags, create_at, author } = post;
  const { name, avater, age, father } = author;
  console.log(`Created post ${title} by ${name}`);
}
createPost(newPost2);

let post2: Post[] = [];
post2.push(newPost2);
post2.push(newPost3);
console.log(post2);
