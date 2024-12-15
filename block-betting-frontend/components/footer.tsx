import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-400">BlockBetting is a blockchain-based betting platform for the English Premier League.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/terms" className="text-sm text-gray-400 hover:text-green-500 transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-sm text-gray-400 hover:text-green-500 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/responsible-gambling" className="text-sm text-gray-400 hover:text-green-500 transition-colors">Responsible Gambling</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Gambling Warning</h3>
            <p className="text-sm text-gray-400">
              Warning: Gambling can be addictive. Please gamble responsibly. If you feel you may have a problem, seek help at <a href="https://www.begambleaware.org/" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">BeGambleAware</a>.
            </p>
            <p className="text-sm text-gray-400 mt-2">
              BlockBetting is licensed and regulated by the UK Gambling Commission under account number 12345.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} BlockBetting. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

