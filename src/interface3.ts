interface WriterInfo1 {
  name: string;
  avatar: string;
  posts: string[];
}

interface PostIntfa {
  title: string;
  body: string;
  tags: string[];
  created_at: Date;
  writer: WriterInfo1;
}

const writer2: WriterInfo1 = {
  name: "Al Amin Khan",
  avatar: "img/avatar.png",
  posts: ["Gaming", "Science", "Environment"],
};

const post2: PostIntfa = {
  title: "Earning is too easy?",
  body: "In the past, we've seen many people tried to get rich fast and easy way",
  tags: ["economy", "career", "development"],
  created_at: new Date(),
  writer: writer2,
};

const blogDetails = (obj: PostIntfa): string => {
  const { name: wrName, avatar: wrAvatar, posts: wrPosts } = obj.writer;
  const tags = `${obj.tags.slice(0, -1).join(", ")} and ${obj.tags.slice(-1)}`;
  const date = obj.created_at.toLocaleString("en-us", {
    day: "2-digit",
    month: "short",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  const postsFormatted = `${wrPosts
    .slice(0, -1)
    .join(", ")} and ${wrPosts.slice(-1)}`;

  return `Title: ${obj.title}\nBody:${obj.body}\nTags: ${tags}\nCreated On: ${date}\nWriter Details: \nName: ${wrName}\nAvatar: ${wrAvatar}\nPosts: ${postsFormatted}`;
};

console.log(blogDetails(post2));
