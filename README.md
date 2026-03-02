# My Agency

![My Agency](https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=300&fit=crop&auto=format,compress)

A stunning creative agency website built with Next.js 16 and Cosmic CMS. Showcases portfolio work, services, team members, and client testimonials with a beautiful, modern, responsive design.

## Features

- 🏠 **Dynamic Homepage** — Hero section with featured projects, services, team, and testimonials
- 🎨 **Portfolio Gallery** — Filterable project grid with detailed project pages
- ⚙️ **Services Showcase** — Service cards with icons and detailed descriptions
- 👥 **Team Directory** — Team member profiles with headshots, bios, and LinkedIn links
- ⭐ **Client Testimonials** — Star ratings with client photos and company attribution
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop
- 🚀 **Server-Side Rendering** — Fast performance with Next.js 16 App Router
- 🎯 **SEO Optimized** — Proper metadata and semantic HTML throughout
- 💅 **Modern Design** — Clean typography, smooth animations, and gradient accents

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=69a51fd9361119eec8726e91&clone_repository=69a5213f33dd5691286459fc)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a creative agency website with portfolio work, services, team members, and client testimonials."

### Code Generation Prompt

> "Build a Next.js application for a company website called 'My Agency'. The content is managed in Cosmic CMS with the following object types: projects, services, team-members, testimonials. Create a beautiful, modern, responsive design with a homepage and pages for each content type."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) — React framework with App Router
- [React 19](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — Type-safe development
- [Tailwind CSS 3](https://tailwindcss.com/) — Utility-first CSS framework
- [Cosmic](https://www.cosmicjs.com/docs) — Headless CMS for content management
- [@cosmicjs/sdk](https://www.npmjs.com/package/@cosmicjs/sdk) — Cosmic JavaScript SDK

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+
- A [Cosmic](https://www.cosmicjs.com) account with the content models set up

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd my-agency
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory with:
```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Cosmic SDK Examples

### Fetching Projects
```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: projects } = await cosmic.objects
  .find({ type: 'projects' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching a Single Team Member
```typescript
const { object: member } = await cosmic.objects
  .findOne({ type: 'team-members', slug: 'john-doe' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This application integrates with the following Cosmic object types:

| Object Type | Slug | Metafields |
|---|---|---|
| 🎨 Projects | `projects` | description, featured_image, category, project_url |
| ⚙️ Services | `services` | icon, short_description, featured_image |
| 👤 Team Members | `team-members` | role, bio, headshot, linkedin_url |
| ⭐ Testimonials | `testimonials` | client_name, company, quote, rating, client_photo |

## Deployment Options

### Vercel (Recommended)
1. Push your code to a Git repository
2. Import the project in [Vercel](https://vercel.com)
3. Add the environment variables (COSMIC_BUCKET_SLUG, COSMIC_READ_KEY, COSMIC_WRITE_KEY)
4. Deploy

### Netlify
1. Push your code to a Git repository
2. Import the project in [Netlify](https://netlify.com)
3. Set the build command to `bun run build`
4. Set the publish directory to `.next`
5. Add the environment variables
6. Deploy

<!-- README_END -->