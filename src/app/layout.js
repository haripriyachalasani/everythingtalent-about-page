import './globals.css'

export const metadata = {
  title: 'Everything Talent',
  description: 'Simplify hiring with free ATS and AI-driven assessments',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/logo.webp" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  )
}