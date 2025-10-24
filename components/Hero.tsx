"use client";

import "../styles/hero.scss";
import { Mail, FileText, Terminal, Github, Linkedin } from "lucide-react";
import Shuffle from "./Shuffle";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 2} });

    // Animate left section
    tl.from(leftRef.current, {
      x: -80,
      opacity: 0,
    });

    // Animate right section slightly after
    tl.from(
      rightRef.current,
      {
        x: 80,
        opacity: 0,
      },
      "-=1.6" // overlap with previous animation
    );
  }, []);

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/divy-03",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/divy-pathak-318599250/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:pathakdivy03@gmail.com", label: "Email" },
    {
      icon: FileText,
      href: "https://drive.google.com/file/d/1M5s6rLg6F9-Odv_Uw0m1AFFR9BkSlD_F/view?usp=sharing",
      label: "Resume",
    },
  ];

  return (
    <div className="w-screen min-h-screen lg:h-screen flex flex-col lg:flex-row backdrop-blur-sm overflow-hidden">
      {/* Left Section - Name and ASCII */}
      <div
        ref={leftRef}
        className="w-full lg:w-1/2 flex flex-col items-center justify-center p-6 sm:p-8 lg:p-12 min-h-[50vh] lg:min-h-0"
      >
        <div className="w-full max-w-xl flex flex-col items-center">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-6 text-blue-500">
            <Terminal size={16} />
            <span className="text-xs font-mono">~/portfolio</span>
          </div>

          {/* Name */}
          <div className="text-center mb-4">
            <Shuffle
              text="Divy Pathak"
              shuffleDirection="right"
              duration={0.35}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover={true}
              respectReducedMotion={true}
            />
          </div>

          {/* Role */}
          <div className="flex items-center gap-2 text-blue-400 font-mono text-base sm:text-lg mb-8">
            <span className="text-green-500">$</span>
            <span className="animate-pulse">_</span>
            <span>Web Developer</span>
          </div>

          {/* ASCII Art */}
          <div className="mb-8">
            <pre className="font-mono text-[6px] xs:text-[8px] sm:text-[10px] md:text-xs text-amber-50 leading-[1.1]">
              {String.raw`
         _nnnn_
        dGGGGMMb
       @p~qp~~qMb
       M|@||@) M|
       @,----.JM|
      JS^\__/  qKL
     dZP        qKRb
    dZP          qKKb
   fZP            SMMb
   HZM            MMMM
   FqM            MMMM
 __| ".        |\dS"qML
 |    '.       | '' \Zq
_)      \.___.,|     .'
\____   )MMMMMP|   .'
     '-'       '--'         
                `}
            </pre>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group border-2 border-blue-600 bg-black hover:bg-yellow-200 transition-all duration-300 p-2 flex items-center gap-2"
                aria-label={link.label}
              >
                <link.icon
                  size={18}
                  className="text-cyan-200 group-hover:text-purple-900 transition-colors"
                />
                <span className="text-xs sm:text-sm font-mono text-cyan-400 group-hover:text-purple-900 transition-colors">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section - About */}
      <div
        ref={rightRef}
        className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8 lg:p-12 min-h-[50vh] lg:min-h-0"
      >
        <div className="w-full max-w-2xl">
          {/* File Header */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xs font-mono text-blue-400 ml-auto">
              about.txt
            </span>
          </div>

          {/* About Title */}
          <h2 className="flex items-center gap-2 text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-blue-500 font-mono">
            <Terminal size={28} />
            About_Me
          </h2>

          {/* About Content */}
          <div className="space-y-3 sm:space-y-4 text-blue-300 font-mono text-xs sm:text-sm lg:text-base leading-relaxed">
            <p>
              <span className="text-green-500">{"{"}</span> Aspiring full-stack
              developer with experience in building robust web and mobile
              applications using{" "}
              <span className="text-yellow-400">MERN Stack</span> and{" "}
              <span className="text-yellow-400">Next.js</span>.
              <span className="text-green-500">{"}"}</span>
            </p>

            <p>
              <span className="text-green-500">{"{"}</span> Proficient in modern
              frameworks and technologies, with a strong foundation in{" "}
              <span className="text-yellow-400">
                computer science principles
              </span>
              .<span className="text-green-500">{"}"}</span>
            </p>

            <p>
              <span className="text-green-500">{"{"}</span> Adept at{" "}
              <span className="text-yellow-400">problem-solving</span> and
              continuously learning new skills. Seeking an opportunity to
              contribute to innovative projects and grow as a{" "}
              <span className="text-yellow-400">software engineer</span>.
              <span className="text-green-500">{"}"}</span>
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mt-6 pt-4 border-t border-blue-800">
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Node.js",
                "MongoDB",
                "Express",
                "Next.js",
                "TypeScript",
              ].map((tech, i) => (
                <span
                  key={i}
                  className="text-xs font-mono text-blue-400 border border-blue-800 px-2 py-1 hover:bg-blue-900/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

