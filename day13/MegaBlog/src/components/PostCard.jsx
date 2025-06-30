import React from "react";
import appwriteService from "../appwrite/conf";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  console.log("featuredImage:", featuredImage);
  console.log("image URL:", appwriteService.getFileView(featuredImage));

  return (
    <Link to={`/post/${$id}`} className="block group">
      <div className="w-full bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out border border-indigo-100">
        {/* Image */}
        <div className="w-full aspect-video overflow-hidden rounded-xl mb-4">
          {featuredImage ? (
            <img
              src={appwriteService.getFileView(featuredImage)}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-xl"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-xl">
              <span className="text-gray-500">No Image</span>
            </div>
          )}
        </div>

        {/* Title */}
        <h2 className="text-lg md:text-xl font-semibold text-indigo-800 line-clamp-2 group-hover:text-indigo-900 transition-colors duration-200">
          {title}
        </h2>
      </div>
    </Link>
  );
}

export default PostCard;
