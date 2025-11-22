import { ChainSelector } from "./ChainSelector";
import { WalletConnect } from "./WalletConnect";

export function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 h-16 glass backdrop-blur-3xl border-b border-white/10 z-50 flex items-center justify-between px-8">
      <div className="flex items-center gap-8">
        <h1 className="text-2xl font-black bg-gradient-to-r from-gold to-cyan bg-clip-text text-transparent">
          AURELIUM NEXUS
        </h1>
        <div className="flex gap-6">
          <div>AUM: <span className="text-green-400">$3.84B</span></div>
          <div>PnL 24h: <span className="text-green-400">+$127.3M</span></div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <ChainSelector />
        <WalletConnect />
        <div className="w-10 h-10 bg-purple-600 rounded-full animate-pulse" />
      </div>
    </div>
  );
}
