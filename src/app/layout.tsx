import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetbrains_mono = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GabLunaDev - Portfólio',
  description: 'Gabriel Luna Portfolio',
  icons: {
    icon: "/icon.jpg"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{scrollBehavior:'smooth'}}>
      <body className={jetbrains_mono.className}>{children}</body>
    </html>
  )
}
