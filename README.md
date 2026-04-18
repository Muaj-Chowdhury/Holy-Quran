# Quran Explorer App

A modern, high-performance Quran reading and exploration web application built with **Next.js**. This project focuses on speed, usability, and a clean reading experience using Static Site Generation (SSG).

---

## Live Demo

Live Site: https://holy-quran-peach.vercel.app/
Screen Recording: https://drive.google.com/file/d/1ZAI-izjCYdEuext5ZsDgEeoZhe47gwYD/view?usp=drive_link

---

## Tech Stack

* Framework: Next.js
* Frontend: React.js
* Styling: Tailwind CSS / DaisyUI
* State Management: React Hooks
* Data Fetching: Static Site Generation (SSG)
* Persistence: localStorage

---

## Features & Functionality

### Surah Navigation (Requirement: Surah List Page)

Dynamic List: Displays all 114 Surahs using high-performance Static Site Generation (SSG).

Dual Language: Shows every Surah with its Arabic Name and English Transliteration.

Quick Metadata: Instant view of total verses and revelation type (Meccan/Medinan).

---

### High-Fidelity Reading (Requirement: Ayat Page)

Full Context: Displays the Arabic text alongside its English translation.

SSG Optimized: Every individual Surah page is pre-rendered at build time, ensuring zero loading time for the user.

Responsive Design: Fully fluid layout that adapts perfectly from desktop monitors to mobile screens.

---

### Smart Search (Requirement: Search Functionality)

Translation Search: Real-time filtering through the entire Quranic translation (~6,236 verses).

Deep Link Navigation: Clicking a search result doesn't just open the Surah; it automatically scrolls the user to the exact verse they were looking for using hash-fragment anchoring.

---

### Settings Panel (Requirement: Sidebar & Persistence)

Multi-Font Support: Minimum of 2 distinct Arabic font options (Amiri and Lateef) for personalized calligraphy.

Independent Scaling: Separate sliders to adjust the font size for both the Arabic script and the English translation.

Persistence: Built with localStorage integration, ensuring the user's preferred font and size choices are remembered even after the browser is closed or refreshed.

---

## Challenges & Solutions

### Hydration Error Fix

* Problem: Mismatch between server and client rendering
* Solution: Controlled client-side rendering with proper state handling

### Search + Scroll Logic

* Problem: Navigating to specific Ayah after search
* Solution: Implemented hash-based scrolling with `useEffect`

### Performance Optimization

* Used SSG to pre-render all Surah pages
* Result: Near-instant page loads and better SEO

---

## Future Roadmap

* Audio recitation support
* Dark mode enhancements
* Bookmark & favorite Ayahs
* Multi-language translations

---

## Installation & Setup

### Install dependencies

```bash
npm install
```
