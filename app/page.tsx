import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* 個人簡介：純粹的文字層級與留白 */}
      <section className="space-y-6">
        <div className="space-y-2">
          <p className="font-mono text-xs text-zinc-500 tracking-wide">
            NCU MIS · SYSTEMS & CLOUD ENGINEERING
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-100">
            江源輝 <span className="text-zinc-500 font-normal">Yuan-Hui Chiang</span>
          </h1>
        </div>

        <p className="text-[15px] text-zinc-400 leading-7 max-w-2xl">
          國立中央大學資訊管理研究所（系統組）。專注於後端服務開發、容器化與雲端基礎設施自動化（IaC），以及低功耗邊緣端軟硬體整合。
        </p>

        {/* 文字型連結，去掉亮綠色大按鈕 */}
        <div className="flex items-center gap-6 text-sm font-medium pt-1">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-zinc-100 underline underline-offset-4 decoration-zinc-600 hover:decoration-zinc-100 transition-colors"
          >
            Selected Projects <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
          </Link>
          <a
            href="https://github.com/johnjohn1207"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            GitHub <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
          </a>
        </div>
      </section>

      {/* 系統架構即時狀態列：低調的終端機規格行，預留階段 2 API 串接 */}
      <section className="border-y border-zinc-800/70 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs">
        <div className="flex items-center gap-2.5 text-zinc-400">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
          <span>edge: cloudflare-pages</span>
          <span className="text-zinc-700">/</span>
          <span>api: gcp-cloud-run</span>
        </div>
        <div className="text-zinc-400">
          requests_total: <span className="text-zinc-100">pending_phase_2</span>
        </div>
      </section>

      {/* 技術棧：改用極簡雙欄清單，完全拿掉圓角外框與圖示 */}
      <section className="space-y-6">
        <h2 className="font-mono text-xs uppercase tracking-wider text-zinc-500">
          Technical Stack
        </h2>

        <dl className="divide-y divide-zinc-800/70 border-t border-b border-zinc-800/70 text-sm">
          <div className="py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4">
            <dt className="font-mono text-xs text-zinc-400 pt-0.5">Backend & Data</dt>
            <dd className="sm:col-span-2 text-zinc-200">
              Python (FastAPI), C++, Java, PostgreSQL, Firestore, Redis
            </dd>
          </div>
          <div className="py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4">
            <dt className="font-mono text-xs text-zinc-400 pt-0.5">Cloud & Infra</dt>
            <dd className="sm:col-span-2 text-zinc-200">
              GCP (Cloud Run, IAM, Artifact Registry), Docker, Terraform, GitHub Actions, Linux
            </dd>
          </div>
          <div className="py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4">
            <dt className="font-mono text-xs text-zinc-400 pt-0.5">Embedded & IoT</dt>
            <dd className="sm:col-span-2 text-zinc-200">
              ESP32, BLE RSSI Indoor Localization, PN532 NFC/RFID
            </dd>
          </div>
        </dl>
      </section>
    </div>
  );
}