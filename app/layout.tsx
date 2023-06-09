import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header/Header'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CodePholio',
  description: 'My portfolio site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
       <link rel="icon" href = "/next.svg"/>
      </Head>
      <body className={inter.className}>
        <Header/>
        {children}
        </body>
    </html>
  )
}
