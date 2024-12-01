import React from "react";

function BlogPost({ selectedBlog, setActiveSection }) {
  if (!selectedBlog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <h2 className="text-3xl font-bold text-red-500">No Blog Selected</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-8 text-white p-6 rounded-lg shadow-lg mt-16">
      <button
        onClick={() => setActiveSection("Blog")} // Navigate back to Blogs
        className="text-cyan-600 hover:underline decoration-light-Cyne mb-6">
        Back to Blogs
      </button>
      <h2 className="text-3xl font-bold text-main-Cyne">{selectedBlog.title}</h2>
      <time className="text-gray-400 mb-4">{selectedBlog.date}</time>
      <img
        src={selectedBlog.image}
        alt={selectedBlog.title}
        className="w-full max-w-4xl rounded-lg mb-6"
      />
      <p className="text-lg text-gray-300 max-w-4xl">{selectedBlog.content}</p>
    </div>
  );
}

export default BlogPost;
