// import { JetBrains_Mono as FontMono, Inter as FontSans } from "next/font/google"
import { JetBrains_Mono as FontMono } from 'next/font/google'
import localFont from 'next/font/local'

export const fontSans = localFont({
  src: '../fonts/haskoy.ttf',
  variable: '--font-sans',
})

// export const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// })
// export const fontSans = GeistSans

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
})
