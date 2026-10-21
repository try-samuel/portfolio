This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Ferno analytics

Set the portfolio project's browser API key before building or running the site:

```sh
NEXT_PUBLIC_FERNO_API_KEY=ferno_pk_your_project_key
NEXT_PUBLIC_FERNO_API_URL=https://data.useferno.com
```

Use `.env.local` for local development and set the same variables in the deployment environment. The API URL defaults to `https://data.useferno.com`; override it for a local Ferno API. The project key is sent by the browser, so use only a browser-intended project key and ensure the Ferno API permits this site's origin through CORS. Do not commit a populated environment file.

The site records page views, project-link opens, work filters and view switches, outbound-link destinations, and contact-form start, submission, and outcome. General click autocapture is disabled. The browser SDK still captures rage/dead click signals, route changes and time on page, and click heatmaps. It supplies browser, locale, page, referrer, and campaign context. A per-tab session ID is added to both automatic and explicit events and rotates after 30 minutes of inactivity.

Contact form contents are masked. Full query strings are removed from event URLs; only bounded UTM campaign parameters are retained. Raw browser exceptions are not captured because their messages and stack traces can include submitted text. No contact names, email addresses, or messages are sent to Ferno. With no project key configured, analytics stays disabled. Review the site's analytics notice and consent requirements before broadening collection further.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
