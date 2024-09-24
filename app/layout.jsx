import { Poppins } from 'next/font/google'
import "./globals.scss"

const poppins = Poppins({ subsets: ['latin'], weight: '400', style: 'normal' })

export const metadata = {
  title: "Brewy",
  description: "Organic Colombian Coffee",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased max-w[1920px] mx-auto bg-white text-green-950`}
      >
        {children}
      </body>
    </html>
  )
}
