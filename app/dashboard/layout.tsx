import { Jost } from 'next/font/google'
import AuthProvider from '../components/AuthProvider'
import Navbar from '../components/Navbar'
import ToastProvider from '../components/ToastProvider'
import '../globals.css'

// const jost = Jost({ subsets: ['latin'] })

export const metadata = {
  title: 'Dashboard',
  description: 'Make Investments Easy',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
      <ToastProvider>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </ToastProvider>
      </body>
    </html>
  )
}