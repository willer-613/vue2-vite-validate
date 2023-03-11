<script setup>
import { useRepo } from "pinia-orm";
import Post from "@/models/post";
const posts = [
  {
    id: 1,
    title: "Hello, world!",
    body: "Some awesome body...",
    author: {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
    },
  },
];

const postRepo = useRepo(Post);

function getPost() {
  console.log(postRepo.all());
}
function postPost() {
  console.log(posts);
  postRepo.save(posts);
  posts[0].id = posts[0].id + 1;
}
</script>

<template>
  <div>
    <b-button @click="getPost" style="margin: 2rem">get post</b-button
    ><b-button @click="postPost">post post</b-button>
  </div>
</template>
