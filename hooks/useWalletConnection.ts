'use client'
import { useState } from 'react'

export default function useWalletConnection() {
  const [isConnected, setIsConnected] = useState(false)
  const [address, setAddress] = useState<string | null>(null)

  const connectWallet = async () => {
    setIsConnected(true)
    setAddress('0x742d...5eA3')
  }

  const disconnectWallet = () => {
    setIsConnected(false)
    setAddress(null)
  }

  return {
    isConnected,
    address,
    connectWallet,
    disconnectWallet,
  }
}
