import { Poppins } from "next/font/google";
import "./globals.scss";

import { ReactLenis } from "@/app/utils/lenis";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: "normal",
});

export const metadata = {
  title: "Brewy",
  description: "Organic Colombian Coffee",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-[100vw] overflow-x-hidden">
      <ReactLenis root>
        <body
          className={`${poppins.className} antialiased max-w[1920px] mx-auto bg-black text-green-950 overflow-x-hidden`}
        >
          {children}
        </body>
      </ReactLenis>
    </html>
  );
}
