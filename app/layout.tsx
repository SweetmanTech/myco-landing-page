import '@/styles/globals.css'
import { Metadata, Viewport } from 'next'

import { fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { Toaster as NewYorkSonner } from '@/components/ui/sonner'
import { Toaster as DefaultToaster, Toaster as NewYorkToaster } from '@/components/ui/toaster'
import { ThemeProvider } from '@/components/providers'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { ThemeSwitcher } from '@/components/theme-switcher'

export const metadata: Metadata = {
  title: {
    default: 'MYCO',
    template: `%s - MYCO`,
  },
  metadataBase: new URL('https://myco.wtf'),
  description: 'tools for creative builders',
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'Server Components', 'Radix UI'],
  authors: [
    {
      name: 'Jordan-Gilliam',
      url: 'https://Jordan-Gilliam.com',
    },
  ],
  creator: 'Jordan-Gilliam',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://myco.wtf',
    title: 'myco',
    description: 'tools for creative builders',
    siteName: 'myco',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'myco',
    description: 'tools for creative builders',
    creator: '@nolansym',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `https://myco.wtf/site.webmanifest`,
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div vaul-drawer-wrapper="">
              <div className="relative z-10 flex min-h-screen flex-col bg-background">
                {children}
              </div>
            </div>
            <TailwindIndicator />
            <ThemeSwitcher />
            <NewYorkToaster />
            <DefaultToaster />
            <NewYorkSonner />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
