import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Agents Studio',
  description: 'Do it yourself with the help of an agent',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-white">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
