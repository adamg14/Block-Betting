"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "../components/ui/button"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import { Wallet } from 'lucide-react'
import { ethers } from "ethers";
import { Elsie_Swash_Caps } from 'next/font/google'


export default function Header() {
  const [address, setAddress] = useState<string | null>(null)
  const [walletAddress, setWalletAddress] = useState(null);

async function connectEthWallet(){
    try {
      if (!window.ethereum){
        alert("Metamask is not installed");
        return;
      }

      // request account acces
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      const account = accounts[0];
      setWalletAddress(account);
      setAddress(account);
    } catch (error) {
      alert("Error connecting to a wallet try again ");
    }
  }

async function connectSolWallet(){
    try {
      // Check if Solana wallet is available
      if (window.solana) {
        // Connect to Phantom wallet
        const response = await window.solana.connect();
        setWalletAddress(response.publicKey.toString());
        setAddress(response.publicKey.toString());
        console.log("Connected to wallet:", response.publicKey.toString());
      } else {
        alert("No compatible Solana wallet found. Please install Phantom.");
      }
    } catch (error) {
      alert("Error connecting to a wallet");
    }
  }

  // logic for disconnecting the browser web3 wallet
  const disconnectWallet = () => {
    setWalletAddress(null);
    setAddress(null);
    console.log("wallet disconnected");
  }
  return (
    <header className="border-b border-gray-800 py-4">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-400">BlockBetting</Link>
        <div className="flex items-center space-x-4">
          <Link href="/fixtures" className="hover:text-green-500 transition-colors">Fixtures</Link>
          <Link href="/standings" className="hover:text-green-500 transition-colors">Standings</Link>
          <Link href="/stats" className="hover:text-green-500 transition-colors">Stats</Link>
          {address ? (
            <Button variant="outline" className="border-green-500 text-green-500">
              {address}
            </Button>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-green-500 text-green-500">
                  <Wallet className="mr-2 h-4 w-4" />
                  Connect Wallet
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>

                <DropdownMenuItem onClick={ connectEthWallet }>
                  MetaMask
                </DropdownMenuItem>

                <DropdownMenuItem onClick={ connectSolWallet }>
                  Phantom
                </DropdownMenuItem>

              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </nav>
    </header>
  )
}