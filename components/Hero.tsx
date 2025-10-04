// import MagicBento from "./MagicBento";
import "../styles/hero.scss";
import { GitBranch, Mail, FileText, Terminal, Contact } from "lucide-react";
import Shuffle from "./Shuffle";

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
    { icon: Mail, href: "mailto:pathakdivy03@gmail.com", label: "Email" },
    { icon: FileText, href: "/resume.pdf", label: "Resume" }, // todo: add resume
  ];
  return (
    // <div className="heroCont w-screen h-screen z-20 flex flex-col lg:flex-row">
    <div className="w-screen min-h-screen z-20 flex flex-row lg:flex-row backdrop-blur-xl">
      {/* <MagicBento /> */}
      {/* <div className="heroLeft w-[40%] "> */}
      <div className="border border-amber-100 w-full lg:w-[50%] p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
        <div className="p-6 lg:p-8">
          <div className="flex items-center gap-2 mb-4 text-blue-500">
            <Terminal size={16} />
            <span className="text-xs font-mono">~/portfolio</span>
          </div>

          {/* <h1 style={{color: "rgb(132, 0, 255)"}} className="font-(family-name:--monocraft) text-5xl md:text-6xl font-bold mb-2 text-(--puple) tracking-tight">
            Divy Pathak
          </h1> */}
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

          <div className="flex items-center gap-2 text-blue-400 font-mono text-lg">
            <span className="text-green-500">$</span>
            <span className="animate-pulse">_</span>
            <span>Web Developer</span>
          </div>
          <div className="hidden sm:block mt-4">
            <pre className="font-mono text-[8px] sm:text-xs md:text-sm text-blue-400 leading-[1.1]">
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
              className="group border-2 border-blue-600 bg-black hover:bg-yellow-200 transition-all duration-300 p-2 flex items-center gap-2"
              aria-label={link.label}
            >
              <link.icon
                size={20}
                className="text-blue-400 group-hover:text-purple-900 transition-colors"
              />
              <span className="text-sm font-mono text-blue-400 group-hover:text-purple-900 transition-colors">
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* <div className="heroRight w-[60%]"> */}
      <div className="w-full lg:w-[60%] p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
        <div className="p-4 sm:p-6">
          <div className="flex items-center gap-2 mb-4">
            {/* <div className="w-3 h-3 bg-red-500"></div>
            <div className="w-3 h-3 bg-yellow-500"></div>
            <div className="w-3 h-3 bg-green-500"></div> */}
            <span className="text-xs font-mono text-blue-400 ml-auto">
              about.txt
            </span>
          </div>

          <h2 className="flex items-center gap-2 text-2xl sm:text-3xl font-bold mb-4 text-blue-500 font-mono">
            <Terminal size={32} />
            About_Me
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
                  className="text-xs font-mono text-blue-400 border border-blue-800 px-2 py-1"
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
