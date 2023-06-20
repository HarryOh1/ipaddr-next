import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Your IP Address',
  description: 'This is your IP Address',
}

export default function RootLayout({ children }) {
  return (
    <html lang='ko'>
      {/* <body className={inter.className}>{children}</body> */}
      <body className='flex h-screen items-center justify-center bg-gradient-to-b from-[#00c9ff] to-[#92fe9d]'>
        {children}
      </body>
    </html>
  )
}
