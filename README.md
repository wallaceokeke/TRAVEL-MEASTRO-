# 🌍✨ OpenTravel AI – Destination & Booking Search Engine

![OpenTravel Banner](https://img.shields.io/badge/OpenTravel-AI-blueviolet?style=for-the-badge\&logo=googleearth\&logoColor=white)
![AI Powered](https://img.shields.io/badge/AI-Powered-00bfff?style=for-the-badge\&logo=python\&logoColor=white)
![Database](https://img.shields.io/badge/JSON%20%2F%20PostgreSQL-Structured_Data-orange?style=for-the-badge\&logo=postgresql\&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## 📌 Overview

**OpenTravel AI** is an **AI-powered travel search engine** built on **open-source data** (Wikivoyage, OpenStreetMap, etc.) to deliver:

✅ Free, structured, transparent destination information
✅ Smart AI-assisted search with natural language queries
✅ Images, activities, and booking links from open sources
✅ A roadmap toward becoming the **Wikipedia + Booking.com of travel**

---

## ✨ Features

### ✅ Current MVP

* 🌍 **Scraping Engine** – pulls structured data from open travel sites.
* 🗂️ **JSON Output** – each destination includes name, country, description, best time to visit, activities, images & booking links.
* 🔎 **AI-Powered Search** – e.g. *“cheap beach holidays in Kenya”*.

```json
{
  "destination": "Mombasa",
  "country": "Kenya",
  "description": "A coastal city known for its beaches and Swahili culture.",
  "best_time_to_visit": "June - October",
  "activities": [
    {"name": "Fort Jesus Tour", "price_range": "Cheap"},
    {"name": "Diani Beach Resort Stay", "price_range": "Premium"}
  ],
  "images": [
    "https://upload.wikimedia.org/.../Mombasa_Beach.jpg"
  ],
  "booking_links": [
    {"platform": "OpenResorts", "url": "https://examplebooking.com/mombasa"}
  ]
}
```

---

## 🚀 Roadmap

### 🔹 Short-Term

* 🖼️ AI-enhanced images
* 📖 More data sources (reviews, hidden gems)
* 🏷️ Tiered activities (budget → luxury)

### 🔹 Mid-Term

* 🔗 Booking engine integrations
* ⚡ Smart itinerary builder (*e.g. 3-day Nairobi budget plan*)
* 🗄️ Database upgrade → PostgreSQL

### 🔹 Long-Term

* 🌐 Full travel marketplace
* 🤖 AI-powered personal travel agent
* 📱 Mobile app (iOS & Android)

---

## 🎨 Design Language

| Element           | Style                   |
| ----------------- | ----------------------- |
| **Primary Color** | Purple `#6a0dad`        |
| **Accent Color**  | Sky Blue `#00bfff`      |
| **Highlight**     | Golden Yellow `#ffd700` |
| **Background**    | Light Gray `#f5f5f5`    |
| **Font**          | `Poppins, sans-serif`   |

```css
:root {
  --primary: #6a0dad;
  --accent: #00bfff;
  --highlight: #ffd700;
  --neutral: #f5f5f5;
}

h1, h2, h3 { color: var(--primary); }
a { color: var(--accent); }
a:hover { text-decoration: underline; }
```

---

## 💡 Vision

OpenTravel AI is designed to **democratize travel data**:

* 🌍 Free & transparent like Wikipedia
* ⚡ Smart & automated like Booking.com
* 💜 Powered by open data + AI

---

## 🤝 Contributing

We welcome explorers 🧭:

1. 🍴 Fork the repo
2. 🌱 Create a feature branch
3. ✅ Commit your changes
4. 🚀 Push & open a PR

---

## 📄 License

This project is licensed under the **MIT License**.

---

💜 **OpenTravel AI** – *The future of smart, open-source travel discovery.* 🌍✨

---

