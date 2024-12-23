"use client";

import { defineChain } from "viem";
import { Outfit } from "next/font/google";
import "./global.css";
import { PrivyProvider } from "@privy-io/react-auth";
import React from "react";

const font = Outfit({ subsets: ["latin"] });

const BaseSepolia = defineChain({
  id: 84532,
  name: "Base Sepolia Testnet",
  network: "Base Sepolia",
  nativeCurrency: {
    decimals: 18,
    name: "Base Sepolia Testnet",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: ["https://sepolia.base.org/"],
    },
  } as any,
  blockExplorers: {
    default: {
      name: "Explorer",
      url: "https://sepolia-explorer.base.org/",
    },
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) 
{

  if(!process.env.NEXT_PUBLIC_NEXT_PRIVY_APP_ID) {
    throw new Error("NEXT_PUBLIC_NEXT_PRIVY_APP_ID is not defined")
  }
  const appID = process.env.NEXT_PUBLIC_NEXT_PRIVY_APP_ID;

  return (
    <html lang="en">
      <body className={font.className}>
        <PrivyProvider
          appId={appID}
          config={{
            appearance: {
              theme: "light",
              accentColor: "#676FFF",
              logo: "https://your-logo-url",
            },
            embeddedWallets: {
              createOnLogin: "users-without-wallets",
            },
            defaultChain: BaseSepolia,
            supportedChains: [BaseSepolia],
          }}
        >
          {children}
        </PrivyProvider>
      </body>
    </html>
  );
}
