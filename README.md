# Gymetrics

A minimal static gym calculator (HTML/CSS/JS) designed to run locally or on GitHub Pages.

## GitHub Pages compatibility

This project is GitHub Pages compatible out of the box:

- `index.html` is in the repository root (valid Pages entrypoint).
- All asset references are relative (`./styles.css`, `./app.js`), so it works from a repo subpath such as `https://<user>.github.io/<repo>/`.
- A `.nojekyll` file is included to ensure Pages serves files as plain static content.

## Deploy on GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, select:
   - **Source:** Deploy from a branch
   - **Branch:** your branch (commonly `main`) and `/ (root)`
4. Save and wait for Pages to publish.

Your site will be available at:

`https://<your-username>.github.io/<repo-name>/`
