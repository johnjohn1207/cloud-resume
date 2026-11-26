import Link from "next/link";
import { Terminal, Server, Cpu, ArrowRight, FolderGit2, Activity } from "lucide-react";
export default function HomePage() {
  return (
    <div className="space-y-14">
      {/* Hero 自我介紹區 */}
      <section className="space-y-5 pt-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Open to Backend / Cloud / IT Engineering Roles
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-100">
          江源輝 <span className="text-zinc-500 font-normal text-2xl sm:text-3xl">Yuan-Hui Chiang</span>
        </h1>

        <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
          國立中央大學資訊管理研究所（系統組）。專注於<strong className="text-zinc-200 font-medium">高併發後端架構</strong>、<strong className="text-zinc-200 font-medium">雲端自動化維運（DevOps）</strong>與<strong className="text-zinc-200 font-medium">邊緣端軟硬體系統整合</strong>。
        </p>

        {/* 行動按鈕 */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 text-zinc-950 font-semibold text-sm hover:bg-emerald-400 transition"
          >
            瀏覽系統專案 <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="https://github.com/johnjohn1207"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium text-sm hover:border-zinc-700 hover:text-white transition"
          >
            <FolderGit2 className="w-4 h-4" /> GitHub             </a>
        </div>
      </section>

      {/* 雲端即時監控看板（階段 2 將串接 GCP Cloud Run + Firestore） */}
      <section className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
        <div className="flex items-center gap-3">
          <Activity className="w-4 h-4 text-emerald-500 shrink-0" />
          <div>
            <span className="text-zinc-400">CLOUD ARCHITECTURE STATUS: </span>
            <span className="text-emerald-400 font-semibold">ALL SYSTEMS OPERATIONAL</span>
          </div>
        </div>
        <div className="text-zinc-400">
          VISITOR COUNTER: <span className="text-zinc-200 font-bold px-2 py-0.5 bg-zinc-800 rounded">[Pending Phase 2 API]</span>
        </div>
      </section>

      {/* 核心技術棧 */}
      <section className="space-y-4">
        <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-500">Core Tech Stack</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-2">
            <Server className="w-5 h-5 text-emerald-400" />
            <h3 className="font-semibold text-zinc-200">Backend & Database</h3>
            <p className="text-sm text-zinc-400">Python (FastAPI), C++, Java, SQL, PostgreSQL, Redis, Kafka</p>
          </div>
          <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-2">
            <Terminal className="w-5 h-5 text-emerald-400" />
            <h3 className="font-semibold text-zinc-200">Cloud & DevOps</h3>
            <p className="text-sm text-zinc-400">GCP (Cloud Run, Firestore), Docker, Kubernetes (k3s), Terraform, GitHub Actions</p>
          </div>
          <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-2">
            <Cpu className="w-5 h-5 text-emerald-400" />
            <h3 className="font-semibold text-zinc-200">Systems & Embedded</h3>
            <p className="text-sm text-zinc-400">Linux (Ubuntu), ESP32, BLE RSSI Localization, PN532 NFC/RFID</p>
          </div>
        </div>
      </section>
    </div>
  );
}