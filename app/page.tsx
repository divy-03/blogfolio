import { DockMenu } from "@/components/Dock";
import FaultyTerminal from "../components/FaultyTerminal";
import Terminal from "../components/Terminal";


export default function Home() {
  return (
    <div className="hero w-screen h-screen relative">
      {/* FaultyTerminal stays in the background */}
      <FaultyTerminal
        scale={1.5}
        gridMul={[2, 1]}
        digitSize={1.2}
        timeScale={0.5}
        pause={false}
        scanlineIntensity={0.5}
        glitchAmount={0.5}
        flickerAmount={0.5}
        noiseAmp={0.5}
        chromaticAberration={0}
        dither={0}
        curvature={0}
        tint="#32c90dff"
        mouseReact={true}
        mouseStrength={0.1}
        pageLoadAnimation={false}
        brightness={0.5}
      />
      <Terminal />
      <DockMenu />
    </div>
  );
}
