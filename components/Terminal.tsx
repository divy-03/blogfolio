"use client";

import { useState } from "react";

export default function Terminal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Open Overlay Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="pointer-events-auto px-4 py-2 bg-blue-600 text-white rounded absolute top-6 right-6 z-60"
        >
          Open Overlay
        </button>
      )}

      {/* Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full flex items-center justify-center transition-transform duration-500 z-50
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        {isOpen && (
          <div
            className="bg-zinc-900 rounded-xl text-left max-w-md w-full"
            style={{
              margin: 10,
              fontFamily: "monospace",
              boxShadow: "0 8px 32px 0 rgba(0,0,0,0.37)",
              border: "1.5px solid #222",
            }}
          >
            {/* Terminal Header */}
            <div className="flex items-center px-4 py-2 bg-zinc-800 rounded-t-xl border-b border-zinc-700">
              <span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              <span className="ml-4 text-zinc-400 text-xs">Terminal</span>
            </div>
            {/* Terminal Body */}
            <div className="p-8 text-center">
              <h1 className="text-2xl font-bold mb-4">Overlay Window</h1>
              <p className="mb-6">This slides over everything on your site.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-red-600 rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
