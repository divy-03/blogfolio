// import MagicBento from "./MagicBento";
import "../styles/hero.scss";

export default function Hero() {
  return (
    <div className="heroCont w-screen h-screen z-20 ">
      {/* <MagicBento /> */}
      <div className="heroLeft">
        <h1 className="myname">Divy Pathak</h1>
        <p className="font-(family-name:--monocraft) text-2xl text-blue-700">
          Web Developer
        </p>
      </div>
      <div className="heroRight">
        <div className="aboutHead">
          <h2 className="he text-2xl text-blue-700">About</h2>
          <p className="font-(family-name:--monocraft) text-2xl text-blue-700">
            Aspiring full-stack developer with experience in building robust web
            and mobile applications using MERN Stack and React Native.
            Proficient in modern frameworks and technologies, with a strong
            foundation in computer science principles. Adept at problem-solving
            and continuously learning new skills. Seeking an opportunity to
            contribute to innovative projects and grow as a software engineer.
          </p>
        </div>
      </div>
    </div>
  );
}
