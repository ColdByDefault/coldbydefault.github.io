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
    <div className="flex flex-col gap-8 px-4 py-8 max-w-screen-md mx-auto">
      <button
        onClick={() => setActiveSection("Blog")}
        className="text-cyan-600 hover:underline mb-6">
        Back to Blogs
      </button>
      <h2 className="text-3xl font-bold text-main-Cyne text-center">{selectedBlog.title}</h2>
      <time className="text-gray-400 text-center">{selectedBlog.date}</time>
      {selectedBlog.image && (
        <img
          src={selectedBlog.image}
          alt={selectedBlog.title}
          className="w-full max-w-lg mx-auto rounded-lg shadow-lg"
        />
      )}
      <p className="text-lg text-gray-300">{selectedBlog.content}</p>
      {selectedBlog.qoute && (
        <blockquote className="text-lg text-gray-400 italic border-l-4 pl-4 mt-6">
          {selectedBlog.qoute}
        </blockquote>
      )}
    </div>
  );
}

export default BlogPost;
