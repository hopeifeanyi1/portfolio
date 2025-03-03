import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Hope's Portfolio",
  description: "Ifeanyi Hope Portfolio website",
}


export default function RootLayout({ children }) {
  return (
      <html lang='en'>
        <body className={inter.className}>{children}</body>
        </html>
  )
}

