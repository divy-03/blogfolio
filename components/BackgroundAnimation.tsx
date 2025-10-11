"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface BackgroundAnimationProps {
  backgroundColor?: string;
  propColor?: string;
}

const BackgroundAnimation: React.FC<BackgroundAnimationProps> = ({
  backgroundColor = "black",
  propColor = "purple",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const fontSize = 16;
    const columns = Math.floor(width / fontSize);
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    let frameCount = 0;

    function draw() {
      ctx!.fillStyle = backgroundColor;
      ctx!.fillRect(0, 0, width, height);

      ctx!.fillStyle = propColor;
      ctx!.font = `${fontSize}px monocraft`;

      frameCount++;
      // Only update drops every 3 frames to slow down animation
      const shouldUpdate = frameCount % 3 === 0;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx!.fillText(text, i * fontSize, drops[i] * fontSize);

        if (shouldUpdate) {
          drops[i]++;
        }

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
      }
    }

    const animation = gsap.ticker.add(draw);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      gsap.ticker.remove(draw);
      window.removeEventListener("resize", handleResize);
    };
  }, [backgroundColor, propColor]);

  return <canvas ref={canvasRef} className="absolute inset-0 -z-20" />;
};

export default BackgroundAnimation;
