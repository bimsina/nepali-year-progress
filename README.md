# 🇳🇵 Nepali Year Progress

A minimalist web application and API to visualize your year at a glance. Generate beautiful, dynamic wallpapers for your lock screen that update automatically to show you how much of the Nepali year has passed.

Live at [nepali-year-progress.bimsina.dev](https://nepali-year-progress.bimsina.dev). Inspired by [thelifecalendar.com](https://www.thelifecalendar.com).

## Features

- **Three Visualizations**:
  - **Days Grid**: Full-year progress as a single dot matrix.
  - **Months Grid**: All Nepali months with per-month progress.
  - **Current Month**: Minimal month-only focus view.
- **Automated Updates**: Setup guides for iOS (Shortcuts) and Android (MacroDroid) to keep your wallpaper fresh every day.
- **Dynamic Image Generation**: High-quality PNG wallpapers generated on-the-fly with [@cf-wasm/og](https://github.com/fineshopdesign/cf-wasm) and cached at the edge until Nepal midnight.
- **Device Optimized**: Support for a wide range of iOS and Android screen resolutions.

## API Endpoints

All endpoints accept:

- `width` (optional, default `1170`)
- `height` (optional, default `2532`)

Routes:

- `/api/days?width=1170&height=2532`
- `/api/months?width=1170&height=2532`
- `/api/current-month?width=1170&height=2532`

## Tech Stack

- [TanStack Start](https://tanstack.com/start) (React 19, Vite)
- Tailwind CSS v4 + shadcn/ui
- Deployed on [Cloudflare Workers](https://developers.cloudflare.com/workers/)

## Local Development

```bash
pnpm install
pnpm dev
```

Useful checks:

```bash
pnpm check
pnpm preview   # production build running in the Workers runtime
```

## Deployment

Pushes to `main` deploy automatically through Cloudflare Workers Builds. To deploy manually:

```bash
pnpm run deploy
```

## Screenshots

|               Days Grid                |                Months Grid                 |                    Current Month                    |
| :------------------------------------: | :----------------------------------------: | :-------------------------------------------------: |
| ![Days Grid Preview](/assets/days.png) | ![Months Grid Preview](/assets/months.png) | ![Current Month Preview](/assets/current_month.png) |
