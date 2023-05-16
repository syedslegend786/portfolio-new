import { Metadata } from 'next'
import './globals.css'
import { Montserrat } from 'next/font/google'
import { NavBar } from '@/components'

const inter = Montserrat({ subsets: ['latin'], variable: "--font-mont" })
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-mont min-h-screen w-full bg-light`} >
        <NavBar />
        {children}
      </body>
    </html>
  )
}
