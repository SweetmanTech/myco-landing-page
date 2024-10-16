import '@/styles/globals.css'
import { Metadata, Viewport } from 'next'

import { cn } from '@/lib/utils'

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
    {
      name: 'sweetman.eth',
      url: 'https://warpcast.com/sweetman-eth',
    },
  ],
  creator: 'sweetman.eth',
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
    creator: '@sweetman_eth',
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
        <body className={cn('min-h-screen bg-background font-sans antialiased font-nounish')}>
          <div vaul-drawer-wrapper="">
            <div className="relative z-10 flex min-h-screen flex-col bg-background">{children}</div>
          </div>
        </body>
      </html>
    </>
  )
}
