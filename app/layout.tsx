import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "江源輝 Yuan-Hui Chiang | Backend & Cloud Engineer",
  description: "中央大學資管所系統組｜專注於後端系統架構、雲端維運與軟硬體整合",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW" className="dark">
      <body className="bg-zinc-950 text-zinc-100 antialiased min-h-screen flex flex-col">
        {/* 頂部導覽列 */}
        <header className="border-b border-zinc-800/80 sticky top-0 bg-zinc-950/80 backdrop-blur-md z-50">
          <nav className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="font-mono font-bold text-lg tracking-tight text-zinc-100 hover:text-emerald-400 transition">
              yuanhui<span className="text-emerald-500">.dev</span>
            </Link>
            <div className="flex items-center gap-6 text-sm font-medium text-zinc-400">
              <Link href="/projects" className="hover:text-zinc-100 transition">Projects</Link>
              <Link href="/blog" className="hover:text-zinc-100 transition">Architecture & Notes</Link>
              <Link href="/resume" className="hover:text-zinc-100 transition">Resume</Link>
            </div>
          </nav>
        </header>

        {/* 主要內容區 */}
        <main className="flex-1 max-w-4xl w-full mx-auto px-6 py-12">
          {children}
        </main>

        {/* 底部版權與系統狀態預留區 */}
        <footer className="border-t border-zinc-800/80 py-8 text-center text-xs text-zinc-500 font-mono">
          <p>Built with Next.js, Tailwind CSS, GCP Cloud Run & Terraform</p>
        </footer>
      </body>
    </html>
  );
}