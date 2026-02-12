---
description: how to deploy the application to GitHub Pages
---

# Deploying Tradesarthi AI to GitHub Pages

The project is already configured for easy deployment using the `gh-pages` package.

### 1. Push Your Changes

Ensure all your local changes are committed and pushed to the `main` branch:

```bash
git add .
git commit -m "Your description of changes"
git push origin main
```

### 2. Deploy to GitHub Pages

Run the following command to build the project and publish it:

```bash
npm run deploy
```

### Under the Hood (Configuration)

In case you need to set this up on a new repo:

1. **Install gh-pages**: `npm install gh-pages --save-dev`
2. **vite.config.js**: Ensure `base: '/repo-name/'` is set.
3. **package.json**:
   - Add `"homepage": "https://username.github.io/repo-name/"`
   - Add scripts:
     ```json
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
     ```
