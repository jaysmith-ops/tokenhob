"use client";

import { WalletType } from "@/lib/wallet-images";
import { useState } from "react";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface useWalletProps {
  selectedWallet: WalletType | null;
  onSelect: (wallet: WalletType) => void;
}

export const createWallet = create(
    persist<useWalletProps>(
      (set, get) => ({
        selectedWallet: null,
        onSelect: (wallet: WalletType) => set({ selectedWallet: wallet }),
      }),
      {
        name: "wallet",
        storage: createJSONStorage(() => localStorage),
      }
    )
  );

export const useWallet = () => {
  const [walletError, setWalletError] = useState(undefined);

  const { selectedWallet, onSelect } = createWallet();

  return {
    selectedWallet,
    onSelect,
    walletError,
    setWalletError,
  };
};