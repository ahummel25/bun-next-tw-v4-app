import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'

import Navbar from '@/components/Navbar'
import DefaultLayout from '@/components/Layouts'
import { ReactQueryClientProvider } from '@/components/providers/ReactQueryClientProvider'
import { ThemeProvider } from './theme-provider'

import './globals.css'

export const metadata: Metadata = {
  title: 'Dev App',
  description: 'Created by Andrew Hummel',
  keywords: [
    'Next.js',
    'React',
    'Tailwind',
    'TypeScript',
    'Server Components',
    'MongoDB',
    'NextUI',
    'NextAuth',
    'OpenAI',
    'GPT'
  ],
  authors: [
    {
      name: 'Andrew Hummel',
      url: 'https://github.com/ahummel25'
    }
  ],
  creator: 'Andrew Hummel',
  publisher: 'Andrew Hummel'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={GeistSans.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <ReactQueryClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <DefaultLayout>
              {children}
            </DefaultLayout>
          </ThemeProvider>
        </ReactQueryClientProvider>
      </body>
    </html>
  )
}
