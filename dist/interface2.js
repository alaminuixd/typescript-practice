"use strict";
const writer1 = {
    name: "Al Amin",
    avater: "img/avater.png",
    age: 34,
    writerPosts: ["post one", "post two", "post three"],
};
const blogPost1 = {
    title: "My first blog post",
    body: "Sometime people don't really know what tye are doing!",
    tags: ["science", "gaming", "math"],
    created_at: new Date(),
    writer: writer1,
};
const printPost1 = (po) => {
    return `Title: ${po.title}\nBody: ${po.body}\nTags: ${po.tags.join(", ")}\nCreated: ${po.created_at.toLocaleString("en-us", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
    })}`;
};
console.log(printPost1(blogPost1));
