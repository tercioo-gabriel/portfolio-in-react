import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tércio Gabriel',
  description: 'Página de portfolio de Tércio Gabriel de Jesus',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
