## Ink & Impact — Conversion Copywriter Website

Ink & Impact is a single-page marketing site for a fractional conversion copywriter. It highlights services, process, case studies, testimonials, and contact options in a polished, high-converting layout that can be deployed to Vercel.

### Tech Stack
- [Next.js 16 (App Router)](https://nextjs.org/) with TypeScript
- Tailwind CSS for styling
- Geist font family via `next/font`

### Local Development
```bash
npm install
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build
```bash
npm run build
npm run start
```

### Deployment
The project is optimized for Vercel. Set `VERCEL_TOKEN` in your environment and ship with:
```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-d6cce240
```
