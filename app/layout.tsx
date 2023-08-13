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
  session,
}: {
  children: React.ReactNode;

  session: any;

}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={jost.className}>
        <Provider session={session}>
            {children}
        </Provider>
      </body>
    </html>
  )
}
