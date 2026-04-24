import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata = {
  title: 'All Global Holding LLC | Capital, Property, Technology & Experiences',
  description: 'All Global Holding LLC - Capital, property, technology and experiences connected in one modern ecosystem. Born from finance and real estate. Built for fractional ownership, digital payments, premium experiences, events and artificial intelligence.',
  keywords: 'All Global Holding, Fractional Living, Vandefy, Sell Experience, Momentum, URMAH, real estate, fractional ownership, Quintana Roo, Cancun, Tulum, digital payments, crypto, premium experiences',
  authors: [{ name: 'All Global Holding LLC' }],
  openGraph: {
    title: 'All Global Holding LLC | Capital, Property, Technology & Experiences',
    description: 'Capital, property, technology and experiences connected in one modern ecosystem.',
    url: 'https://allglobalholding.com',
    siteName: 'All Global Holding LLC',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Global Holding LLC',
    description: 'Capital, property, technology and experiences connected in one modern ecosystem.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  themeColor: '#1e3a5f',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
