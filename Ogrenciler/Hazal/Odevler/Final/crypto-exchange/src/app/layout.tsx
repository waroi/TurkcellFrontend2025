import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StoreProvider from './../providers/StoreProvider'
import AppProvider from './../providers/AppProvider'
import  Footer  from './../components/molecules/Footer'
import  Navbar from './../components/molecules/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Crypto Exchange',
  description: 'Cryptocurrency trading platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <AppProvider locale={'tr'} messages={{}}>
            <Navbar />
            <main>{children}</main>
          </AppProvider>
        </StoreProvider>
      </body>
    </html>
  )
}
