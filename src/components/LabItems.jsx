import React from "react";

function LabItems({ imgUrl, title, stack, link }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img 
          src={imgUrl} 
          alt={title} 
          className="w-full h-48 object-cover rounded-lg border
           border-gray-200 hover:scale-95 transition-transform duration-300"
        />
      </a>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-300">{stack.join(', ')}</p>
      </div>
    </div>
  );
}

export default LabItems;

