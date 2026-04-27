# Nishant Kumar - Portfolio

A modern, high-performance portfolio website built with Next.js 14, Tailwind CSS, and shadcn/ui.

## Features
- **App Router:** Utilizing the latest Next.js 14 features.
- **Single Page Scroll:** Smooth scrolling to sections with active link highlighting.
- **Dynamic Routes:** Detailed pages for projects and education that open in new windows.
- **GitHub Live Stats:** Real-time fetching of repository counts, stars, and followers.
- **Dark Theme:** Sleek dark mode using Tailwind CSS.
- **Responsive Design:** Optimized for mobile, tablet, and desktop.
- **Animations:** GSAP and Framer Motion for smooth transitions and hover effects.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui (custom implementation)
- **Icons:** Lucide React
- **Animations:** GSAP, Framer Motion
- **HTTP Client:** Axios

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd my_portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Deployment
This application is ready to be deployed on **Vercel**. Simply push to a GitHub repository and connect it to Vercel.

## Customization
- **Project Content:** Edit `lib/data.ts` to update project details, skills, or achievements.
- **Personal Info:** Update the `personalInfo` object in `lib/data.ts`.
- **Resume:** Replace `public/Nishant_Kumar_Resume.pdf` with your actual resume file.
