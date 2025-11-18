# Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive across all devices
- **Dark/Light Mode**: Theme toggle with persistent preferences
- **Type Safety**: Full TypeScript implementation
- **CI/CD**: Automated deployment pipeline with GitHub Actions
- **Preview Deployments**: Automatic preview URLs for pull requests
- **Code Quality**: ESLint and TypeScript type checking

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **CI/CD**: GitHub Actions

## 🛠️ Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository
```bash
git clone https://github.com/kbimsara/newPortfolio.git
cd newPortfolio
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🌳 Branch Strategy

- **`main`** - Production branch (auto-deploys to Vercel production)
- **`Dev`** - Development branch (auto-deploys to Vercel preview)
- **Feature branches** - Create PRs to `main` (generates preview deployments)

## 🚢 Deployment

### Automatic Deployments

The project uses GitHub Actions for automated deployments:

- **Push to `Dev`** → Deploys to preview environment
- **Push to `main`** → Deploys to production
- **Pull Request to `main`** → Creates preview deployment with PR comment

### Required Secrets

Add these secrets to your GitHub repository settings:
- `VERCEL_TOKEN` - Vercel authentication token
- `VERCEL_ORG_ID` - Your Vercel organization ID
- `VERCEL_PROJECT_ID` - Your Vercel project ID

## 📂 Project Structure

```
newPortfolio/
├── app/
│   ├── components/      # React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── ThemeProvider.tsx
│   │   └── ThemeToggle.tsx
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── public/              # Static assets
├── .github/
│   └── workflows/       # GitHub Actions workflows
├── eslint.config.mjs    # ESLint configuration
├── next.config.ts       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js and Vercel