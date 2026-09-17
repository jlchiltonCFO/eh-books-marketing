# EH Books Go-to-Market Site

Public marketing site for **EH Books**, EnrollHere's human-in-the-loop Financial Operations Service for insurance distribution.

## What this repository contains

- `dist/index.html` — public-safe production static site
- `dist/assets/` — approved EnrollHere logo and interface assets
- `.github/workflows/pages.yml` — GitHub Pages deployment workflow
- `embed-assets.mjs` — creates a portable single-file HTML copy

## Publishing

Every push to `main` deploys the contents of `dist/` to GitHub Pages. The repository must have **Settings → Pages → Source** set to **GitHub Actions**.

The intended domain architecture is:

- Marketing: `enrollhere.vip`
- Invite-only customer portal, once approved and configured: `books.enrollhere.vip`

The `CNAME` file configures the marketing site for `enrollhere.vip`. The customer portal is a separate application and is not contained in this repository.

## Content boundary

This repository contains the public marketing experience only. Internal work orders, customer-specific terms, implementation status, launch gates and campaign-planning materials must not be added to `dist/`.

