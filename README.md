# lump

A lump of experiments within monorepo

_/app_

1. docs (storybook)
2. app1 (react)

_/packages_

1. eslint config
2. tailwind config
3. ui (shared library)
4. utils (shared)

### Useful Commands

- `pnpm run build` - Build all packages, including the Storybook site
- `pnpm run dev` - Run all packages locally and preview with Storybook
- `pnpm  --filter docs run dev` - Runs only for `docs`
- `pnpm run lint` - Lint all packages
- `pnpm run changeset` - Generate a changeset
- `pnpm run clean` - Clean up all `node_modules` and `dist` folders (runs each package's clean script)

### Apps & Packages

Workspaces enables us to "hoist" dependencies that are shared between packages to the root `package.json`. Turborepo runs each `build` in parallel and caches & hashes the output to speed up future builds.
