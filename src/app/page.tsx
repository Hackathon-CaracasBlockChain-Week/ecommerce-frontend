'use client'

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

import { WagmiConfig } from 'wagmi'
import { arbitrum, mainnet } from 'wagmi/chains'

// 1. Get projectId
const projectId = process.env.NEXT_PUBLIC_WALLET_BUTTON

// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'localhost:3000',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, arbitrum]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains })

export default function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <h1>Inicio de Sesión</h1>
      <w3m-button />
    </WagmiConfig>
  )
}