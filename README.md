# DreamLadder 📈

A modern, high-performance frontend web application tailored for wealth management, investment advisory, and financial services. 

DreamLadder provides a modular, business-oriented user interface featuring dynamic financial calculators, interactive data visualizations, and dedicated routes for complex financial product offerings.

## 🚀 Key Features

* **Comprehensive Financial Routing:** Dedicated, modular pages for a wide array of wealth management services including Mutual Funds, Portfolio Management Services (PMS), Bonds, Structured Products, Legacy & Estate Planning, and Insurance.
* **Interactive Data Visualization:** Integrates `recharts` and `@mui/x-charts` to render complex financial data, return sliders, and investment analytics clearly and dynamically.
* **Modular Architecture:** Component-driven design separating core landing page sections (SlideShow, ReturnSlider, Insights) from deep-dive service pages.
* **Modern UI/UX:** Built with Material UI (`@mui/material`) and custom SCSS/SASS for a responsive, maintainable, and highly polished user experience.

## 🛠️ Tech Stack

* **Core:** React 19, Vite
* **Routing:** React Router v7
* **Styling:** SCSS / SASS, Material UI (@mui/material), Emotion
* **Data Visualization:** Recharts, MUI X-Charts
* **Icons:** Lucide React

## 📂 Project Structure

```text
dreamladder/
├── public/                 # Static assets, fonts (Genos, SyneMono), and images
├── src/
│   ├── LandingPage/        # Modular components for the home page
│   │   ├── 1.NavBar/
│   │   ├── 2.SlideShow/
│   │   ├── 4.ReturnSlider/
│   │   ├── 5.Calculator/
│   │   └── ...
│   ├── ExtraPages/         # Dedicated business offering modules
│   │   ├── CalcGraph/      # Standalone financial calculator & graphs
│   │   ├── MFs/            # Mutual Funds
│   │   ├── PMSAIF/         # Portfolio Management Services
│   │   ├── Bonds/
│   │   ├── LEP/            # Legacy Estate Planning
│   │   └── ...
│   ├── mixins/             # Global SCSS mixins and typography
│   ├── App.jsx             # Main application router
│   └── main.jsx            # Entry point
├── package.json
└── vite.config.js
