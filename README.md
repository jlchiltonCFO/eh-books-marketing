# EH Books Go-to-Market Site

Interactive marketing and launch concept for **EH Books**, EnrollHere's human-in-the-loop Financial Operations Service for insurance distribution.

## What this repository contains

- `dist/index.html` — production-ready static site
- `dist/assets/` — approved EnrollHere logo and interface assets
- `.github/workflows/pages.yml` — GitHub Pages deployment workflow
- `embed-assets.mjs` — creates a portable single-file HTML copy

## Publishing

Every push to `main` deploys the contents of `dist/` to GitHub Pages. The repository must have **Settings → Pages → Source** set to **GitHub Actions**.

The intended domain architecture is:

- Marketing: `enrollhere.vip`
- Invite-only customer portal, once approved and configured: `books.enrollhere.vip`

Do not add a `CNAME` file or change DNS until the production marketing-domain decision is approved. The customer portal is a separate application and is not contained in this repository.

## Current status

This site is an internal go-to-market concept based on the September 16, 2026 Agency Collective pilot draft. Commercial terms, claims, integrations, trademarks, order forms, launch gates, and domains require final approval before public use.

