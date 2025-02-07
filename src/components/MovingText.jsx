import { useState } from "react";

// Simple utility function to combine class names
const combineClasses = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

function MovingText() {
  const [isPaused, setIsPaused] = useState(false);

  const handleTextClick = () => {
    setIsPaused(!isPaused); // Toggle pause state
  };
  const text = "Up to 70% off • Shop Sale";

  return (
    <div
      className='overflow-hidden w-full p-4 text-5xl border-b border-black
      cursor-pointer'
      onClick={handleTextClick}
    >
      <div
        className={combineClasses(
          "inline-flex whitespace-nowrap overflow-hidden text-5xl",
          "animate-scroll",
          isPaused && "paused"
        )}
      >
        {[...Array(8)].map((_, index) => (
          <span key={index} className='inline-block'>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

export default MovingText;
