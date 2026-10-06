# InnoApp Technologies Website

A modern, animated corporate website for InnoApp Technologies - an independent software studio.

## Tech Stack

- **Framework:** React + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** Wouter
- **UI Components:** Radix UI / shadcn/ui
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run serve
```

## Project Structure

```
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── ui/         # Base UI components
│   │   ├── Header.tsx  # Navigation header
│   │   ├── Footer.tsx  # Site footer
│   │   └── ...
│   ├── pages/          # Page components
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ServicesPage.tsx
│   │   └── ...
│   ├── data/           # Static data
│   ├── hooks/          # Custom hooks
│   ├── lib/            # Utilities
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Static assets
│   └── assets/         # Images and logos
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies
```

## Color Palette

- **Primary:** #182039 (Dark Navy)
- **Accent:** #ff6d53 (Coral)
- **Secondary:** #d9f47b (Lime Green)
- **Background:** #f4f1eb (Cream)

## Features

- Fully responsive design
- Smooth animations and transitions
- Modern glassmorphism effects
- Interactive mobile menu
- Horizontal scrollable card sections

## License

© 2026 InnoApp Technologies. All rights reserved.
