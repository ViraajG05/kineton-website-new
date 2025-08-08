"use client";

import React, { useEffect, useState } from "react";

interface TextTypeProps {
  text: string[]; // Accepts an array of phrases
  typingSpeed?: number; // ms per character
  pauseDuration?: number; // ms to wait before clearing and typing next
  className?: string;
  showCursor?: boolean;
  cursorCharacter?: string;
}

const TextType: React.FC<TextTypeProps> = ({
  text = ["Hello World"],
  typingSpeed = 100,
  pauseDuration = 2000,
  className = "",
  showCursor = true,
  cursorCharacter = "|",
}) => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let typingTimeout: NodeJS.Timeout;

    if (charIndex < text[textIndex].length) {
      typingTimeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else {
      typingTimeout = setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % text.length);
      }, pauseDuration);
    }

    return () => clearTimeout(typingTimeout);
  }, [charIndex, textIndex]);

  return (
    <div className={className}>
      {displayText}
      {showCursor && <span className="animate-pulse">{cursorCharacter}</span>}
    </div>
  );
};

export default TextType;
