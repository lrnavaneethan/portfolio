import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Navaneethan L R | Full Stack Developer & Technical Lead',
  description: 'Full Stack Developer and Technical Lead with 2+ years of experience building scalable web applications, cloud-native solutions, and modern digital experiences.',
  keywords: ['Full Stack Developer', 'Technical Lead', 'React', 'Next.js', 'Node.js', 'AWS', 'TypeScript'],
  generator: 'v0.app',
  openGraph: {
    title: 'Navaneethan L R | Full Stack Developer & Technical Lead',
    description: 'Full Stack Developer and Technical Lead with 2+ years of experience building scalable web applications',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icons8-portfolio-32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icons8-portfolio-32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icons8-portfolio-32.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased bg-background">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
