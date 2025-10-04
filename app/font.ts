import localFont from "next/font/local";

export const bitcount = localFont({
  src: "../public/fonts/Bitcoin.ttf",
  variable: "--bitcoin",
  weight: "400", // or "100 900" if variable font
  style: "normal",
});

export const monocraft = localFont({
  src: "../public/fonts/Monocraft.ttf",
  variable: "--monocraft",
  weight: "400",
  style: "normal"
})
