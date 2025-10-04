"use client";

import dynamic from "next/dynamic";

const FaultyTerminal = dynamic(() => import("./FaultyTerminal"), {
  ssr: false,
});

export default FaultyTerminal;
