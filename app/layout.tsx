import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "江源輝 Yuan-Hui Chiang — Backend & Cloud Systems",
  description: "國立中央大學資訊管理研究所｜後端系統架構、雲端自動化維運與軟硬體整合",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW" className="dark">
      <body className="bg-[#0B0C0E] text-[#EDEDED] antialiased min-h-screen flex flex-col selection:bg-zinc-800 selection:text-white">
        {/* 頂部導覽列：極細邊框，無毛玻璃浮誇特效 */}
        <header className="border-b border-zinc-800/70">
          <nav className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between text-sm">
            <Link
              href="/"
              className="font-mono font-medium tracking-tight text-zinc-100 hover:text-zinc-400 transition-colors"
            >
              yuanhui.dev
            </Link>
            <div className="flex items-center gap-6 text-zinc-400">
              <Link href="/projects" className="hover:text-zinc-100 transition-colors">
                Projects
              </Link>
              <Link href="/blog" className="hover:text-zinc-100 transition-colors">
                Notes
              </Link>
              <Link href="/resume" className="hover:text-zinc-100 transition-colors">
                Resume
              </Link>
            </div>
          </nav>
        </header>

        {/* 主要內容區：單欄閱讀寬度 max-w-3xl */}
        <main className="flex-1 max-w-3xl w-full mx-auto px-6 py-16">
          {children}
        </main>

        {/* 底部資訊欄 */}
        <footer className="border-t border-zinc-800/70 py-6">
          <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-zinc-500">
            <span>Yuan-Hui Chiang</span>
            <span>Next.js · Cloud Run · Firestore · Terraform</span>
          </div>
        </footer>
      </body>
    </html>
  );
}