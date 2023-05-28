import { Jost } from 'next/font/google'
import Navbar from '../components/Navbar'

// const jost = Jost({ subsets: ['latin'] })

export const metadata = {
  title: 'Dashboard',
  description: 'Make Investments Easy',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}