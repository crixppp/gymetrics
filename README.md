# Gymetrics

A minimal static gym calculator (HTML/CSS/JS) designed to run locally or on GitHub Pages.

## Brand assets

You can place the brand image files in the repository root or in an `assets/` folder. The app auto-detects the first matching file from these names:

- `gymetrics full.png`
- `gymetrics icon.png`
- `gymetrics icon copy.png`
- `gymetrics name.png`
- `gymetrics favicon.png`

If a logo image is found, it is shown in the header. If a favicon image is found, it is applied to the browser tab icon.

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
