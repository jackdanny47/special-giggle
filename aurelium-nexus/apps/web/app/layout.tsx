import "./globals.css";
import { AIOrb } from "../components/AIOrb";
import { TopBar } from "../components/TopBar";
import { HologramSidebar } from "../components/HologramSidebar";
import { GlobeBackground } from "../components/3d/GlobeBackground";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <body className="bg-black text-white overflow-hidden">
        <GlobeBackground />
        <TopBar />
        <HologramSidebar />
        <main className="ml-20 pt-20">{children}</main>
        <AIOrb />
      </body>
    </html>
  );
}
