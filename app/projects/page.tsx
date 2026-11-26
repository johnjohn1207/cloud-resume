import { FolderGit2 } from "lucide-react";
const projects = [
  {
    title: "Cloud Resume & Serverless Portfolio Architecture",
    status: "In Progress",
    description:
      "採用前後端分離與基礎設施即程式碼（IaC）打造的雲端作品集架構。前端部署於 Cloudflare Pages 並啟用 WAF 防護，後端採用 Python FastAPI 打包為 Docker 容器運行於 GCP Cloud Run，搭配 Firestore 實現原子性訪客計數，並透過 Terraform 與 GitHub Actions 實現全自動化 CI/CD 部署。",
    tags: ["Next.js", "FastAPI", "Docker", "GCP Cloud Run", "Terraform", "GitHub Actions"],
    github: "https://github.com/johnjohn1207/cloud-resume",
  },
  {
    title: "ESP32 + PN532 室內失物追蹤與區域定位系統",
    status: "Active",
    description:
      "結合三組 ESP32 微控制器、BLE RSSI 訊號強度區域定位演算法與 PN532 NFC/RFID 感測模組的軟硬體整合系統，解決室內物品遺失與即時盤點追蹤問題。",
    tags: ["ESP32", "C++", "BLE RSSI", "PN532 RFID", "IoT"],
    github: "https://github.com/johnjohn1207",
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Featured Projects</h1>
        <p className="text-zinc-400">系統架構設計、雲端自動化與軟硬體整合專案紀錄。</p>
      </div>

      <div className="grid gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h2 className="text-xl font-semibold text-zinc-100">{project.title}</h2>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-800 text-emerald-400 w-fit">
                {project.status}
              </span>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-2 pt-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2.5 py-1 rounded-md bg-zinc-950 border border-zinc-800 text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-4 text-sm">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-emerald-400 transition"
              >
                <FolderGit2 className="w-4 h-4" /> Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}