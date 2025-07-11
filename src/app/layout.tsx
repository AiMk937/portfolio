// src/app/layout.tsx
import '../styles/globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={`${inter.className}`}>
        {children}
      </body>
    </html>
  )
}