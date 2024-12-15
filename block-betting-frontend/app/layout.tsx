import "./globals.css";
import { Poppins } from 'next/font/google'
import { ThemeProvider } from "../components/theme-provider";
import Header from "../components/header"
import Footer from '../components/footer'
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] })

export const metadata = {
  title: 'BlockBetting',
  description: 'Blockchain betting on the English Premier League',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} bg-gradient-to-br from-black via-gray-900 to-green-900 text-white min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

