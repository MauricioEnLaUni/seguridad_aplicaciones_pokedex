import type { Metadata } from 'next';

import ThemeProvider from '@prv/ThemeProvider';

import './globals.css';

export const metadata: Metadata = {
  title: 'Pokedex',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        </body>
    </html>
  )
}
