import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/conf";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="py-12 px-4 bg-gradient-to-br from-indigo-50 via-pink-50 to-white min-h-screen">
      <Container>
        {/* Featured Image */}
        <div className="relative w-full max-w-3xl mx-auto mb-8 rounded-3xl overflow-hidden bg-gray-50 shadow-xl flex items-center justify-center max-h-64">
          <img
            src={appwriteService.getFileView(post.featuredImage)}
            alt={post.title}
            className="w-full h-full object-contain"
          />

          {isAuthor && (
            <div className="absolute top-4 right-4 flex gap-3 z-10">
              <Link to={`/edit-post/${post.$id}`}>
                <Button
                  bgColor="bg-green-600"
                  className="hover:bg-green-700 transition-all duration-200"
                >
                  Edit
                </Button>
              </Link>
              <Button
                bgColor="bg-red-600"
                className="hover:bg-red-700 transition-all duration-200"
                onClick={deletePost}
              >
                Delete
              </Button>
            </div>
          )}
        </div>

        {/* Title */}
        <div className="max-w-4xl mx-auto mb-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-800 leading-tight">
            {post.title}
          </h1>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-4xl mx-auto text-gray-800 prose-indigo prose-img:rounded-xl">
          {parse(post.content)}
        </div>
      </Container>
    </div>
  ) : null;
}
