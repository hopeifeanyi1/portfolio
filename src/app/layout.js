import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'
import NavBar from './components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Hope's Portfolio",
  description: "Ifeanyi Hope Portfolio website",
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`flex min-h-screen flex-col bg-white text-black dark:bg-black dark:text-white ${inter.className}`}>
        <NavBar />
        {children}
        <Toaster position="bottom-left" />
      </body>
    </html>
  )
}