This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install necessary dependencies:

```bash
pnpm run docker:dev
```
Run docker containers in dev mode:

```bash
pnpm run docker:dev
```
Next, generate migrations and push them to the database:

```bash
pnpm run migrations:generate
pnpm run migrations:push
```
Next, seed the database with data:

```bash
pnpm run db:seed
```
Finally, run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000/api/test](http://localhost:3000/api/test) with your browser to see the database query result.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the web page.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Useful Commands

### Linting:

```bash
# check for linting errors
pnpm run lint
# fix linting errors
pnpm run lint:fix
```

### Formatting:

```bash
# check for formatting errors
pnpm run format
# fix formatting errors
pnpm run format:fix
```

### Docker:

```bash
# stop running docker container
pnpm run docker:down
# stop running docker container and purge container volumes
pnpm run docker:purge
```

### Database and ORM:

```bash
# generate migration scripts
pnpm run migrations:generate
# push migrations to the database
pnpm run migrations:push
# seed the database with data:
pnpm run db:seed
# database studio to monitor changes
pnpm run db:studio
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
