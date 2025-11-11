# Connect Training Solutions - Official Website

This is the official website for Connect Training Solutions Pvt Ltd, a company dedicated to bridging the gap between academia and industry by providing top-tier placement training for engineering students. This project is built with a modern, performant, and scalable tech stack, with a strong focus on SEO and user experience.

This project was bootstrapped and is maintained with **Firebase Studio**.

## Tech Stack

The application is built using a curated set of modern web technologies:

- **Framework:** [Next.js](https://nextjs.org/) (using the App Router)
- **UI Library:** [React](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Component Library:** [ShadCN/UI](https://ui.shadcn.com/) for beautiful, accessible components.
- **Generative AI:** [Firebase Genkit](https://firebase.google.com/docs/genkit) for AI-powered features.
- **Deployment & Hosting:** [Firebase App Hosting](https://firebase.google.com/docs/app-hosting)

## Project Structure

The codebase is organized to be modular and easy to navigate. Here is an overview of the key directories:

```
.
├── public/               # Static assets like images and fonts
├── src
│   ├── app/              # Core application routes (pages) and layouts
│   ├── components/       # Reusable React components (UI, layout, homepage sections)
│   ├── lib/              # Shared utilities, data, and helper functions
│   └── ai/               # Genkit flows and AI-related server-side logic
├── tailwind.config.ts    # Tailwind CSS configuration
└── next.config.ts        # Next.js configuration
```

- **`src/app`**: Contains all the page routes for the application (e.g., `page.tsx`, `about/page.tsx`, `blog/[slug]/page.tsx`). It also includes the root layout and global styles.
- **`src/components`**: Divided into `ui` (reusable ShadCN components), `layout` (Header, Footer), and `homepage` (sections specific to the main page).
- **`src/lib`**: Holds shared logic, such as utility functions (`utils.ts`), blog post data (`blog-posts.ts`), and placeholder image definitions.

## Getting Started

To run this project locally, follow these steps:

1.  **Install Dependencies:**
    Open your terminal and run the following command to install all the necessary packages.
    ```bash
    npm install
    ```

2.  **Run the Development Server:**
    Once the installation is complete, start the Next.js development server.
    ```bash
    npm run dev
    ```

The application will now be running on [http://localhost:9002](http://localhost:9002).

## Key Features

- **Fully Responsive Design:** The layout is optimized for all screen sizes, from mobile phones to desktops.
- **SEO Optimized:** The site is structured for high visibility on search engines, with:
  - Unique metadata (titles, descriptions) for each page.
  - SEO-friendly URL structures.
  - JSON-LD structured data for enhanced brand recognition.
- **Blog Functionality:** A complete blog system to publish articles, driving organic traffic and establishing industry authority.
- **Modern UI/UX:** Built with ShadCN/UI and Tailwind CSS for a clean, professional, and accessible user interface.
- **Performance:** Leverages Next.js server components and image optimization for fast load times.

## Deployment

This project is configured for seamless deployment on **Firebase App Hosting**. The `apphosting.yaml` file contains the basic configuration for the hosting environment. Any push to the linked repository's main branch can trigger an automatic build and deployment.
