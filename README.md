# 🧹 Public Cleanliness Monitoring — Schaerbeek SPEV 1030

> Monthly monitoring of public cleaning actions carried out by the SPEV (Service Communal Schaerbeek Propreté et Espaces Verts) · Data as of May 2026

---

## 🔗 Quick Access

| Tool | Description | Link |
|---|---|---|
| 🗺️ **Interactive Map (FR)** | Cleaning actions by street — French | [indexFR.html](https://gis1030.github.io/Bilan-SPEV1030/) |
| 🗺️ **Interactieve Kaart (NL)** | Reinigingsacties per straat — Nederlands | [indexNL.html](https://gis1030.github.io/Bilan-SPEV1030/indexNL.html) |

---

## 📋 About the Project

This project provides a monthly cartographic monitoring of **public cleanliness actions carried out by the SPEV** (Service Communal Schaerbeek Propreté et Espaces Verts) across all streets of the municipality of Schaerbeek.

The application presents the full range of SPEV interventions per street, including treatment actions (cleaning, sweeping, illegal dumping removal), awareness-raising campaigns, and enforcement actions. It is designed to support municipal transparency and service evaluation.

> ⚠️ For confidentiality reasons, information is provided by street address, without specifying the house number. For further information, contact the municipal call centre at **0800 939 88**.

---

## 🧭 Contents

### 🗺️ Interactive Map

The bilingual map (FR/NL) displays SPEV interventions per street for the year 2025.

**Available information per street**

- 🧹 Cleaning and sweeping actions
- 🗑️ Illegal dumping removal
- 📢 Awareness-raising interventions
- ⚖️ Enforcement actions

**Base maps** — Google Terrain (default) · Google Satellite · OpenStreetMap

---

## 🛠️ Technologies

- **HTML / CSS / JavaScript** — 100% client-side application, no server required
- **Leaflet.js** — interactive mapping
- **GitHub Pages** — static hosting

---

## 🌐 Compatibility

Compatible with recent versions of **Firefox**, **Chrome**, and **Edge**.
Available in French and Dutch. Optimised for desktop use.

---

## 📁 Repository Structure

```
Bilan-SPEV1030/
├── indexFR.html                  # Interactive map — French
├── indexNL.html                  # Interactive map — Dutch
├── index.html                    # Entry point / landing page
├── css/                          # Stylesheets and UI assets
├── data/                         # GeoJSON data (JS wrapper format)
│   └── *.js                      # SPEV intervention datasets by street
└── js/                           # Leaflet libraries + application logic
```

---

## 📅 Changelog

| Date | Description |
|---|---|
| August 2026 | Dataset updated — SPEV interventions 2025 |
| 2025 | Initial publication |

---

## 📄 Data Sources

| Dataset | Source | Date |
|---|---|---|
| SPEV cleaning interventions | SPEV — Commune de Schaerbeek | July 2026 |

Data is extracted from the SPEV internal monitoring system and packaged as static GeoJSON files for client-side rendering. No server-side queries are performed at runtime.

---

## 📄 Licence

This project is licensed under the **European Union Public Licence v. 1.2 (EUPL-1.2)**.
See the [LICENSE](LICENSE) file for the full text.

[![License: EUPL-1.2](https://img.shields.io/badge/License-EUPL%201.2-blue.svg)](https://eupl.eu/1.2/en/)

> © 2024–2026 Direction des Systèmes d'Information (DSI) · Commune de Schaerbeek · 1030 Brussels · Belgium

---

*Commune de Schaerbeek · Direction des Systèmes d'Information (DSI) · 1030 Brussels · Belgium*
