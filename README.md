# Independent Researcher Website

A minimal, high-performance academic portfolio based on the "Convergent Researcher" design pattern.

## Quick Start (Local)

1. **Install Hugo**:
   ```bash
   # MacOS
   brew install hugo
   ```

Build:

```bash
hugo server -D
```

Open http://localhost:1313.

Deployment
Option 1: GitHub Pages (Easiest)

Push this repo to GitHub.

Go to Settings > Pages.

Set Source to GitHub Actions.

The .github/workflows/deploy.yml will handle the rest.

Option 2: Cloudflare Pages (Faster)

Link your GitHub repo in Cloudflare Dashboard.

Build command: hugo --minify

Output directory: public

Contact Form Setup (Cloudflare Worker)

Create a new Worker in Cloudflare.

Paste the content of functions/submit-contact.js.

Set environment variables (if expanding logic).

Update content/contact.md with your Worker URL.

Secrets Required
Secret	Purpose
CONTACT_FORWARD_EMAIL	(Optional) Inside CF Worker code
