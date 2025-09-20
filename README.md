# 🌐 Taha Sabir's Portfolio Website

A beautiful, Apple-inspired portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## ✨ Features

- **Apple-like Design**: Clean, minimal aesthetic with smooth animations
- **Responsive Layout**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Framer Motion powered interactions and transitions
- **Interactive Components**: Modal lightboxes for projects with detailed views
- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Performance Optimized**: Fast loading with Next.js Image optimization

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Design System

### Colors

- **Primary**: Apple Blue (#007AFF)
- **Background**: Pure White (#FFFFFF)
- **Text**: Dark Gray (#1D1D1F)
- **Accents**: Subtle grays and gradients

### Typography

- **Font**: Inter (Google Fonts)
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)

### Components

- **Buttons**: Rounded with hover animations
- **Cards**: Soft shadows with hover effects
- **Modals**: Backdrop blur with smooth transitions

## 📱 Sections

1. **Hero Section**: Animated introduction with typewriter effect
2. **About Me**: Two-column layout with skills showcase
3. **Projects**: Grid layout with modal details
4. **Contact**: Social links and contact information
5. **Footer**: Minimal footer with credits

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Custom components with Radix UI primitives
- **Icons**: Lucide React

## 📦 Key Dependencies

```json
{
  "next": "^14.0.0",
  "react": "^18.0.0",
  "typescript": "^5.0.0",
  "tailwindcss": "^3.0.0",
  "framer-motion": "^10.0.0",
  "lucide-react": "^0.300.0",
  "@radix-ui/react-dialog": "^1.0.0"
}
```

## 🎯 Customization

### Adding Projects

Edit `src/components/ProjectsSection.tsx` to add new projects:

```typescript
const projects: Project[] = [
  {
    id: "project-id",
    title: "Project Title",
    description: "Project description...",
    image: "/path/to/image",
    tech: ["React", "Node.js", "TypeScript"],
    github: "https://github.com/username/repo",
    demo: "https://demo-url.com",
    blog: "https://blog-post-url.com",
  },
];
```

### Updating Content

- **Hero Section**: Edit `src/components/HeroSection.tsx`
- **About Section**: Edit `src/components/AboutSection.tsx`
- **Contact Links**: Update URLs in `src/components/ContactSection.tsx`

### Styling

- **Global Styles**: Edit `src/app/globals.css`
- **Tailwind Config**: Edit `tailwind.config.ts`
- **Component Styles**: Use Tailwind classes in components

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms

```bash
npm run build
npm start
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

Built with ❤️ by Taha Sabir
