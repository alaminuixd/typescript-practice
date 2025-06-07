"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const author1 = {
    name: "Al Amin",
    avater: "img/avater.png",
    age: 34,
    father: "Syed Ahmed",
};
for (const key of Object.keys(author1)) {
    // console.log(`${key}: ${author1[key]}`);
}
const newPost2 = {
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
const newPost3 = {
    title: "My Second Blog Post",
    body: "When I was a young boy, I used to like playing football.",
    tags: ["gaming", "educational"],
    create_at: new Date(),
    author: author1,
};
function createPost(post) {
    const { title, body, tags, create_at, author } = post;
    const { name, avater, age, father } = author;
    console.log(`Created post ${title} by ${name}`);
}
createPost(newPost2);
let post2 = [];
post2.push(newPost2);
post2.push(newPost3);
console.log(post2);
