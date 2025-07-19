# node-cli-starter

![CI Build](https://github.com/coryrylan/node-cli-starter/actions/workflows/build.yml/badge.svg)

Minimal starter kit for building Node CLI applications with TypeScript.

## Getting Started

To get started clone repo locally and run `pnpm install` at the root of the repo. Run `ncs --version` to see installed CLI.

## Commands

- `pnpm run start`: execute CLI via pnpm script
- `pnpm run postinstall`: runs global pnpm link/install of CLI
- `pnpm run uninstall`: runs global pnpm unlink/uninstall of CLI
- `ncs --version`: log version from CLI
- `ncs greet "world"`: log greeting command from CLI