# 🔐 SETUP.md - Configuration & Secrets

> **⚠️ SECURITY WARNING:** This file contains sensitive configuration details. Do not share publicly.

---

## 📋 Services & Integrations

| # | Service | Description | Status |
|---|---------|-------------|--------|
| 1 | **OpenClaw Gateway** | Core AI Assistant Platform | ✅ Active |
| 2 | **MiniMax Portal** | Primary AI Model (OAuth) | ✅ Active |
| 3 | **Google Cloud** | Gmail, Calendar, Drive, Sheets, Maps | ✅ Active |
| 4 | **FMP (Financial Modeling Prep)** | Financial Data API (Starter Plan) | ✅ Active |
| 5 | **Brave Search** | Web Search (Monthly Reset) | ✅ Active |
| 6 | **Tavily AI Search** | AI-Optimized Search | ✅ Active |
| 7 | **LINE OA** | LINE Official Account | ⚠️ Config Issues |
| 8 | **Discord Bot** | Discord Channel Integration | ✅ Active |
| 9 | **Telegram Bot** | Telegram Bot (@GaneshNiti_bot) | ✅ Active |
| 10 | **Weather API (wttr.in / Open-Meteo)** | Weather Data | ✅ Active |
| 11 | **PM2.5 API (AQICN)** | Air Quality Data | ✅ Active |
| 12 | **Yahoo Finance API** | Real-time Gold Prices (Free) | ✅ Active |

---

## 🔑 API Keys Used (Reference Only)

> **NOTE:** Actual keys are stored securely in system environment variables, NOT in this file.

| Service | Key Type | Where to Find |
|---------|----------|---------------|
| OpenClaw | Token | `openclaw.json` |
| MiniMax | OAuth | System Config |
| Google | Service Account JSON | `SECRETS_VAULT.md` |
| FMP | API Key | `SECRETS_VAULT.md` |
| Brave | API Key | `SECRETS_VAULT.md` |
| Tavily | API Key | `SECRETS_VAULT.md` |
| LINE | Channel Access Token | `openclaw.json` |
| Discord | Bot Token | `openclaw.json` |
| Telegram | Bot Token | `openclaw.json` |

---

## 🖥️ System Information

| Item | Value |
|------|-------|
| **OS** | Linux (WSL2 on Windows) |
| **Workspace** | `/home/administrator/.openclaw/workspace` |
| **CLI Prefix** | `npx` (Required for all OpenClaw commands) |
| **Primary Model** | MiniMax M2.5 |
| **Backup Model** | Google Gemini 3.1 Pro Preview |

---

## 📂 Channel Configuration

| Channel | ID / Handle | Status |
|---------|-------------|--------|
| **Discord** | `channel:1479824041861976066` (Ocean Ten HQ) | ✅ Active |
| **LINE** | User ID: `U61afb80928bd1b5260757127425c07a5` | ⚠️ Issues |
| **Telegram** | `@GaneshNiti_bot` | ✅ Active |

---

## 📁 Key File Locations

| File | Purpose |
|------|---------|
| `MEMORY.md` | Long-term memory (Core) |
| `HEARTBEAT.md` | Task schedules & Cron jobs |
| `SOUL.md` | Cognitive framework |
| `IDENTITY.md` | Persona & rules |
| `openclaw.json` | Main system config |
| `SECRETS_VAULT.md` | Encrypted API keys (Local Only) |

---

## 🛡️ Security Best Practices

1. **NEVER commit keys to Git.** Use `.gitignore`.
2. **Use Environment Variables** for production.
3. **Rotate Keys Monthly** (especially Brave Search).
4. **Check Usage** regularly to avoid unexpected quotas.

---

*Last Updated: 2026-03-11*
*Maintained by: Nong Kung (Claw) - CEO of Ocean Ten*
