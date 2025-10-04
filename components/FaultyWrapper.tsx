"use client";

import dynamic from "next/dynamic";

const FaultyTerminal = dynamic(() => import("./FaultyTerminal"), {
  ssr: false,
});

export default function FaultyWrapper() {
  return (
      <FaultyTerminal
        scale={1.5}
        gridMul={[2, 1]}
        digitSize={1}
        timeScale={0.5}
        pause={false}
        scanlineIntensity={0.5}
        glitchAmount={0.5}
        flickerAmount={0.5}
        noiseAmp={0.5}
        chromaticAberration={0}
        dither={0}
        curvature={0}
        tint="#d97532ff"
        mouseReact={false}
        mouseStrength={0.1}
        pageLoadAnimation={true}
        brightness={0.5}
      />
  );
}
