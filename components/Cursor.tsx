"use client";

import React, { useEffect, useRef, useState } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

interface HoveredElement {
  rect: DOMRect;
  element: HTMLElement;
}

export default function IOSCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorPos, setCursorPos] = useState<CursorPosition>({ x: 0, y: 0 });
  const [hoveredElement, setHoveredElement] = useState<HoveredElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const interactive = target.closest('button, a, [data-cursor-interactive]');

      if (interactive instanceof HTMLElement) {
        const rect = interactive.getBoundingClientRect();
        setHoveredElement({ rect, element: interactive });
      } else {
        setHoveredElement(null);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const getCursorStyle = () => {
    if (!hoveredElement) {
      return {
        left: `${cursorPos.x}px`,
        top: `${cursorPos.y}px`,
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
      };
    }

    const { rect } = hoveredElement;
    const padding = 8;

    return {
      left: `${rect.left + rect.width / 2}px`,
      top: `${rect.top + rect.height / 2}px`,
      width: `${rect.width + padding * 2}px`,
      height: `${rect.height + padding * 2}px`,
      borderRadius: `${Math.min(rect.height / 2 + padding, 24)}px`,
      transform: 'translate(-50%, -50%)',
    };
  };

  return (
    <>
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-[9999] mix-blend-difference transition-all duration-200 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          ...getCursorStyle(),
          backgroundColor: hoveredElement ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.9)',
          backdropFilter: hoveredElement ? 'blur(4px)' : 'none',
        }}
      />

      {/* Global Style to hide default cursor */}
      <style jsx global>{`
        body {
          cursor: none !important;
        }
        button, a, [data-cursor-interactive] {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}