# Open Source Project Explorer

A modern, responsive web application for discovering, filtering, and bookmarking open-source projects. Built with Next.js App Router, TypeScript, and Tailwind CSS.

## Live Demo

🚀 **[View Live on Vercel](https://open-source-project-explorer.vercel.app)**

## About

Open Source Project Explorer is designed to help developers find open-source projects tailored to their interests and skill levels. Whether you are looking for beginner-friendly repositories to make your first contribution or advanced tools to dive deep into, this application makes discovery effortless.

## Features

- **Project Discovery**: Browse a curated list of open-source projects across various domains.
- **Search & Filter**: Find projects instantly by searching names, descriptions, or technologies. Filter by domain, difficulty level, and specific technologies.
- **Sorting**: Sort projects by GitHub stars or alphabetically.
- **Bookmarking**: Save your favorite projects to a personalized "Saved" list using LocalStorage (data persists across sessions).
- **Responsive Design**: Beautiful, polished UI with subtle hover effects and smooth transitions, fully responsive for mobile and desktop.
- **Dynamic Routing**: Dedicated detail pages for each project with a fallback 404 page for invalid links.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: React Hooks (`useState`, `useMemo`) & custom `useBookmarks` hook
- **Deployment**: [Vercel](https://vercel.com/)
- **Data Persistence**: Browser `localStorage`

## Getting Started

Follow these instructions to run the project locally on your machine.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Khushi-agarwal1401/Open-Source-Project-Explorer.git
   cd Open-Source-Project-Explorer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open the app**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser to see the application running.

## Screenshots

*(Note: Add screenshots of the Home page, Projects list, and Saved bookmarks here to showcase the UI!)*

## What I Learned

Throughout the development of this project, I gained hands-on experience with:
- **Next.js App Router Architecture**: Structuring dynamic routes (`[id]`), layouts, and global not-found handlers, while distinguishing cleanly between Server and Client components.
- **Advanced State Management**: Implementing complex, multi-layered filtering and sorting logic in React using `useMemo` for performance optimization.
- **Custom React Hooks**: Building a robust `useBookmarks` hook to safely interact with the browser's `localStorage` while hydrating UI state smoothly without hydration mismatches.
- **UI/UX Polish**: Applying Tailwind CSS for polished micro-interactions (hover, active, scale transitions), implementing a unified design system, and creating meaningful empty states.
