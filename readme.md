# PNPM Monorepo for Medusa
![Medusa Hackathon 2022](docs/assets/medua-logos-cover.jpg)

## About

### Participants

Dale Nguyen - @dalenguyen

[Twitter](https://twitter.com/dale_nguyen)

### Description

Monorepo starter for Medusa project. It utilizes [PNPM workspace](https://pnpm.io/workspaces) to improve Developer Experience. The project also takes advantage of [NX Workspace](https://nx.dev/) for 

- saving disk space and boosting installation speed
- share library
- run tasks on only the packages that changed
- advanced caching based on file contents to not run anything that has already been computed previously
- remote distributed caching to speed up your CI

## Set up Project

### Prerequisites

Make sure you have [PNPM](https://pnpm.io/installation) on your machine.

### Install packages

```
pnpm i
```

### Start project (NX)

Nx uses the following form to run commands

```
npx nx <target> <project>

npx nx start backend
npx nx start admin
npx nx start storefront
```

### Build all project (NX)

```
npx nx run-many --target=build --projects=backend,admin,storefront
```

### Add new package

```
pnpm add -D {package_name} --filter {app_name}
```

## Resources

- [Medusa’s GitHub repository](https://github.com/medusajs/medusa)
- [PNPM](https://pnpm.io/installation)
- [NX](https://nx.dev)