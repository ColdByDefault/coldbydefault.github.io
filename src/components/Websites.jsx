import React from "react";

function Websites({ websites }) {
  return (
    <div className="flex flex-col items-center text-white p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {websites.map((site, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg">
            <a href={site.link} target="_blank" rel="noopener noreferrer">
              <img
                src={site.imgUrl}
                alt={site.title}
                className="w-full h-48 object-cover rounded-lg border border-gray-200
                hover:scale-95 transition-transform duration-300"
              />
            </a>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{site.title}</h3>
              <p className="text-sm text-gray-300">{site.stack.join(", ")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Websites;
