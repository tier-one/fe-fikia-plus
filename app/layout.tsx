import './globals.css'
import { Jost } from 'next/font/google'
import Provider from './components/Provider'

const jost = Jost({ subsets: ['latin'] })

export const metadata = {
  title: 'Fikia Plus',
  description: 'Make Investments Easy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
