const express = require("express");
const app = express();
const axios = require("axios");

const port = 3000;

app.use(express.json());

app.get("/top", async (req, res) => {
  try {
    const posts = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/"
    );
    let comment_count = -1;
    let top_posts = [];

    await Promise.all(
      posts.data.map(async (post) => {
        const comments = await axios.get(
          `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`
        );
        if (comments.data.length > comment_count) {
          comment_count = comments.data.length;
          top_posts = [
            {
              post_id: post.id,
              post_title: post.title,
              post_body: post.bod,
              total_number_of_comments: comments.data.length,
            },
          ];
        } else if (comments.data.length === comment_count) {
          top_posts.push({
            post_id: post.id,
            post_title: post.title,
            post_body: post.bod,
            total_number_of_comments: comments.data.length,
          });
        }
      })
    );

    res.send(top_posts);
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
