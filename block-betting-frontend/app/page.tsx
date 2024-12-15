import "./globals.css";
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-5xl font-bold mb-6 text-green-400">Welcome to BlockBetting</h1>
      <p className="text-xl mb-8 max-w-2xl">Experience the future of blockchain betting on the English Premier League</p>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="space-x-4">
        <Button asChild size="lg" className="bg-green-500 hover:bg-green-600">
          <Link href="/fixtures">View Fixtures</Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="border-green-500 text-green-500 hover:bg-green-500/10">
          <Link href="/stats">Explore Stats</Link>
        </Button>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>

    
  )
}

