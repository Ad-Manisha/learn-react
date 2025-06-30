import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/conf";
import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        console.log("Fetched posts:", posts.documents);
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-12 mt-8 text-center bg-gradient-to-br from-pink-100 via-indigo-100 to-indigo-200 min-h-[60vh] flex items-center justify-center">
        <Container>
          <h1 className="text-3xl font-semibold text-indigo-700 hover:text-indigo-900 transition-colors duration-300">
            Login to read posts
          </h1>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-pink-100 via-indigo-100 to-indigo-200 overflow-x-hidden">
      <Container>
        <h2 className="text-4xl font-extrabold text-indigo-800 mb-8 text-center">
          Latest Posts
        </h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {posts.map((post) => (
            <PostCard key={post.$id} {...post} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
