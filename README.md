# Personal portfolio

A static-first personal portfolio built with Next.js, TypeScript, and Tailwind CSS.

## Local development

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Replacing placeholder content

- Update personal details, experience, education, certifications, links, and skills in `src/content/site.ts`.
- Add verified portfolio projects to the currently empty array in `src/content/projects.ts`.
- Replace project artwork in `public/projects` while keeping the corresponding paths in project data current.
- Add the final production URL to metadata when the deployment domain is known.

Each project automatically appears on the projects route and receives a statically generated detail page based on its `slug`.
