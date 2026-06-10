# Data Analyst Portfolio

This is a modern, dark-themed portfolio website for "New Tontan Tipakun", built with React, TypeScript, and Vite.

## Tech Stack
* **Framework:** React (Vite)
* **Language:** TypeScript
* **Styling:** Vanilla CSS (Dark/Light mode support)
* **Fonts:** JetBrains Mono

## Features
* Modern, responsive design
* Dark/Light mode toggle
* About section, Project showcase, and Contact information
* Automated deployment to GitHub Pages

## Deployment

This project is configured to deploy to GitHub Pages from the `docs` folder. The deployment is automated via GitHub Actions on every push to the `main` branch.

To ensure proper deployment:
1. Go to your repository settings on GitHub.
2. Navigate to **Pages**.
3. Under **Build and deployment** > **Source**, ensure it's set to "Deploy from a branch".
4. Ensure the branch is set to `main` and the folder is set to `/docs`.

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production (outputs to `docs` folder).
- `npm run lint`: Runs ESLint to check for linting errors.
- `npm run preview`: Previews the production build locally.
