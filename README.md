[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
![GitHub last commit](https://img.shields.io/github/last-commit/cliqbite/cb-client-web)

## Getting Started

1. run `pnpm install` for installing the packages.
2. After that run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

If you want to run the production server:

```bash
pnpm serve
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Update package

To update the packages run the following command

```bash
npx npm-check-updates -u
```

### Other ways to debug Node.js:

```bash
pnpm dev:debug
```

Open [chrome://inspect](chrome://inspect/) in a Chromium-based browser or [edge://inspect](edge://inspect) in Edge
Copy the devtoolsFrontendUrl from the output of /json/list or the --inspect hint text and paste into Chrome

## Learn More

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

> ### Clear you local branches afte push
>
> ```bash
> git branch | grep -v "develop" | xargs git branch -D
> ```
>
> change branch `develop` to your current branch

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
