"use client";
import { useState } from "react";

function TextExpander({ description }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <span className='mb-4'>
      <p
        className={`text-lg text-primary-300
          ${isExpanded ? "" : "line-clamp-3"}`}
      >
        {description}
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className='text-sm text-primary-500 underline mt-2'
      >
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </span>
  );
}

export default TextExpander;
