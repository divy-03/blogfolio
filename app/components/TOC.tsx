"use client";
import { useEffect, useState } from "react";

export default function Toc() {
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2, h3"));
    const newHeadings = elements.map((el) => ({
      id: el.id,
      text: el.textContent || "",
    }));
    setHeadings(newHeadings);
  }, []);

  return (
    <div className="w-64 h-screen overflow-y-auto bg-gray-50 border-l p-4">
      <h2 className="font-bold mb-4">Contents</h2>
      <ul>
        {headings.map((heading) => (
          <li key={heading.id} className="my-1">
            <a href={`#${heading.id}`} className="hover:text-blue-500">
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
