import React from "react";
import blogs from "../data/blogs";

function Blogs({ setActiveSection, setSelectedBlog }) {
  const handleReadMore = (blog) => {
    setSelectedBlog(blog);
    setActiveSection("BlogPost");
  };

  return (
    <div className="flex flex-col items-center gap-8 px-4 py-8 max-w-screen-lg mx-auto h-full">
      <h2 className="text-3xl font-bold text-gray-400 mb-6">My Blogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
            <h3 className="text-xl font-bold mb-3 text-main-Cyne">{blog.title}</h3>
            <time className="block text-gray-400 mb-3">{blog.date}</time>
            <p className="text-sm mb-4 text-gray-300 line-clamp-3">{blog.description}</p>
            <button
              onClick={() => handleReadMore(blog)}
              className="text-cyan-600 hover:underline">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
