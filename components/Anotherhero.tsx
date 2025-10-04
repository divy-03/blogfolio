import { GitBranch, Mail, FileText, Terminal, Contact } from "lucide-react";

export default function Hero() {
  const socialLinks = [
    {
      icon: GitBranch,
      href: "https://github.com/yourusername",
      label: "GitHub",
    },
    {
      icon: Contact,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
    { icon: FileText, href: "/resume.pdf", label: "Resume" },
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col lg:flex-row">
      {/* Left Section */}
      <div className="w-full lg:w-[40%] p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
        <div className="mb-6 lg:mb-8">
          <div className="flex items-center gap-2 mb-4 text-blue-500">
            <Terminal size={16} />
            <span className="text-xs font-mono">~/portfolio</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-blue-500 tracking-tight">
            Divy Pathak
          </h1>

          <div className="flex items-center gap-2 text-blue-400 font-mono text-base sm:text-lg">
            <span className="text-green-500">$</span>
            <span className="animate-pulse">_</span>
            <span>Web Developer</span>
          </div>

          {/* ASCII Art - Hidden on small mobile, shown on larger screens */}
          <div className="hidden sm:block mt-4">
            <pre className="font-mono text-[8px] sm:text-xs md:text-sm text-blue-400 leading-tight overflow-x-auto">
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
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-blue-600 bg-black hover:bg-blue-900 transition-all duration-300 p-2 sm:p-3 flex items-center gap-2"
              aria-label={link.label}
            >
              <link.icon
                size={18}
                className="text-blue-400 group-hover:text-yellow-400 transition-colors"
              />
              <span className="text-xs sm:text-sm font-mono text-blue-400 group-hover:text-yellow-400 transition-colors">
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-[60%] p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
        <div className="border border-blue-800 p-4 sm:p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-mono text-blue-400 ml-auto">
              about.txt
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-500 font-mono">
            {">"} About_Me
          </h2>

          <div className="space-y-3 sm:space-y-4 text-blue-300 font-mono text-sm sm:text-base leading-relaxed">
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

          <div className="mt-4 sm:mt-6 pt-4 border-t border-blue-800">
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
                  className="text-xs font-mono text-blue-400 border border-blue-800 px-2 py-1 hover:bg-blue-900 transition-colors"
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