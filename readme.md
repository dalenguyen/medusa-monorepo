# PNPM Monorepo for Medusa

Monorepo starter for Medusa project. It utilizes [PNPM workspace](https://pnpm.io/workspaces) to improve Developer Experience. The project also takes advantage of [NX Workspace](https://nx.dev/) for 

- run tasks on only the packages that changed
- advanced caching based on file contents to not run anything that has already been computed previously
- remote distributed caching to speed up your CI

## Start all projects (PNPM)

```
pnpm start
```

## Start project (NX)

Nx uses the following form to run commands

```
npx nx <target> <project>

npx nx start backend
```

## Build all project (NX)

```
npx nx run-many --target=build --projects=backend,admin,storefront
```

## Add new package

```
pnpm add -D {package_name} --filter {app_name}
```