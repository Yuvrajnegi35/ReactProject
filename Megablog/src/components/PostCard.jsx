import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
  const imageUrl = featuredImage ? appwriteService.getFilePreview(featuredImage) : null;

  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full flex justify-center mb-4">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={title}
              className="rounded-xl object-cover h-48 w-full"
            />
          ) : (
            <div className="h-48 w-full bg-gray-300 flex items-center justify-center text-gray-500 rounded-xl">
              No Image Available
            </div>
          )}
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
