import React from "react";
import blogs from "../data/blogs";

function Blogs({ setActiveSection, setSelectedBlog }) {
  const handleReadMore = (blog) => {
    setSelectedBlog(blog); // Set the selected blog for viewing
    setActiveSection("BlogPost"); // Navigate to the BlogPost section
  };

  return (
    <div className="flex flex-col items-center gap-8 text-white p-6 rounded-lg shadow-lg mt-16">
      <h2 className="text-3xl font-bold text-gray-400 mb-6">My Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-xl font-bold mb-2 text-main-Cyne">{blog.title}</h3>
            <time className="block text-gray-400 mb-2">{blog.date}</time>
            <p className="text-sm mb-4 text-gray-300">{blog.description}</p>
            <button
              onClick={() => handleReadMore(blog)}
              className="text-cyan-600 hover:underline decoration-light-Cyne">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
