import './globals.css'

export const metadata = {
    title: process.env.NEXT_PUBLIC_SITE_NAME || 'My Blog',
    description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'A minimal blog powered by Substack',
}

export default function RootLayout({ children }) {
    return (
          <html lang="en">
            <body className="min-h-screen bg-white text-gray-900">
              <header className="border-b border-gray-200 py-8">
                <div className="max-w-2xl mx-auto px-4">
                  <h1 className="text-4xl font-bold mb-2">{process.env.NEXT_PUBLIC_SITE_NAME || 'My Blog'}</h1>
            <p className="text-gray-600">{process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'Thoughts and ideas'}</p>
  </div>
  </header>
        <main className="max-w-2xl mx-auto px-4 py-12">
{children}
  </main>
        <footer className="border-t border-gray-200 py-8 mt-16">
            <div className="max-w-2xl mx-auto px-4 text-center text-gray-500 text-sm">
              <p>© 2026. All rights reserved.</p>
  </div>
  </footer>
  </body>
  </html>
  )
}
