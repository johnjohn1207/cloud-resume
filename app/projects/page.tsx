import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    year: "2026",
    title: "Cloud Resume & Serverless Portfolio Architecture",
    role: "Full-Stack / Cloud Infrastructure",
    description:
      "採用前後端分離與基礎設施即程式碼（IaC）建置的雲端作品集架構。靜態前端部署於 Cloudflare Pages 邊緣節點；後端以 Python FastAPI 封裝為 Docker 容器運行於 GCP Cloud Run，串接 Firestore 實現原子性訪客計數，並透過 Terraform 與 GitHub Actions 實現全自動化測試與部署。",
    stack: "Next.js · FastAPI · Docker · GCP Cloud Run · Firestore · Terraform · GitHub Actions",
    repo: "https://github.com/johnjohn1207/cloud-resume",
  },
  {
    year: "2026",
    title: "ESP32 + PN532 室內失物追蹤與區域定位系統",
    role: "Embedded Systems & Hardware Integration",
    description:
      "整合三組 ESP32 微控制器、BLE RSSI 訊號強度區域定位演算法與 PN532 NFC/RFID 感測模組，建立低延遲的室內物品位置追蹤與標籤驗證機制。",
    stack: "ESP32 · C++ · BLE RSSI · PN532 RFID",
    repo: "https://github.com/johnjohn1207",
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-12">
      <div className="space-y-2 border-b border-zinc-800/70 pb-6">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-100">Projects</h1>
        <p className="text-sm text-zinc-400">
          系統架構設計、雲端基礎設施自動化與軟硬體整合專案紀錄。
        </p>
      </div>

      <div className="divide-y divide-zinc-800/70">
        {projects.map((project, idx) => (
          <article key={idx} className="py-8 first:pt-0 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <h2 className="text-lg font-medium text-zinc-100">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-zinc-300 transition-colors"
                >
                  {project.title}
                  <ArrowUpRight className="w-4 h-4 text-zinc-500" />
                </a>
              </h2>
              <span className="font-mono text-xs text-zinc-500 shrink-0">
                {project.year} · {project.role}
              </span>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed">
              {project.description}
            </p>

            <p className="font-mono text-xs text-zinc-500 pt-1">
              {project.stack}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}