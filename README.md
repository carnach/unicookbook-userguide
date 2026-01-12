# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

This is the user guide and documentation site for the UniCookbook recipe management application.

## 📝 Recent Updates

### January 2026
- Updated documentation for admin role and access control
- Added cooking mode functionality documentation
- Updated navigation and filter documentation
- Enhanced administrative tier implementation documentation
- Improved admin user management guides

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
