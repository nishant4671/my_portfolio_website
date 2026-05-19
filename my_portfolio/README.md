# Nishant Kumar - Portfolio

This is Nishant Kumar's personal portfolio website. It is built with Next.js, React, Tailwind CSS, TypeScript, and custom UI components.

## What This Website Includes

- A responsive portfolio homepage
- Project cards with separate detail pages
- Education detail pages
- Achievements, hobbies, skills, experience, and resume sections
- Live GitHub stats through a local API route
- Resume view and PDF download options
- Dark theme styling
- Smooth animations

## Tech Stack

- **Next.js 16**
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Lucide React**
- **GSAP**
- **Framer Motion**
- **ESLint 9**

## Changes I Made

I cloned this project locally and made some maintenance changes to fix terminal errors, remove security warnings, and make the website more reliable.

### 1. Fixed Security Warnings

The old Next.js version had npm security warnings.

What changed:

- Updated `next` to a newer secure version
- Updated `eslint-config-next`
- Added a `postcss` override

Result:

- `npm audit` now shows `0 vulnerabilities`

### 2. Fixed Install and Lint Errors

After updating Next.js, the old ESLint setup was no longer compatible.

What changed:

- Updated ESLint from version 8 to version 9
- Replaced the old `next lint` command with `eslint .`
- Added `eslint.config.mjs`

Result:

- `npm install` works
- `npm run lint` works

### 3. Fixed Build Issue Caused by Google Fonts

The build was failing because the app tried to download the Inter font from Google during `next build`.

What changed:

- Removed `next/font/google`
- Added a system font stack in `app/globals.css`

Result:

- The website can build even when external font requests fail

### 4. Improved GitHub Stats API

The GitHub stats route was using Axios and could run during build time.

What changed:

- Removed Axios
- Used native `fetch`
- Added cache headers
- Made the GitHub API route dynamic

Result:

- Smaller dependency list
- Fewer repeated GitHub API calls
- Build no longer depends on GitHub being reachable

### 5. Reduced Extra Client-Side JavaScript

Some components were marked as client components even though they did not use browser-only features.

What changed:

- Removed unnecessary `"use client"` from static sections

Result:

- Less JavaScript is sent to the browser
- Better performance

### 6. Small Accessibility and Code Quality Fixes

What changed:

- Added safer external link attributes
- Added labels for icon-only links
- Added accessibility attributes to the mobile menu button
- Fixed one JSX text escaping issue

Result:

- Cleaner linting
- Better accessibility
- Safer external links

## How to Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open this URL in the browser:

```text
http://localhost:3000
```

## How to Check Everything Before Pushing

Run these commands:

```bash
npm run lint
npm run build
npm audit
```

Current result after changes:

- `npm run lint` passes
- `npm run build` passes
- `npm audit` shows `0 vulnerabilities`

## Files Changed

Main files changed in this update:

- `package.json`
- `package-lock.json`
- `eslint.config.mjs`
- `README.md`
- `app/layout.tsx`
- `app/globals.css`
- `app/api/github/route.ts`
- `app/open-source/page.tsx`
- Several components inside the `components/` folder

## Short Pull Request Summary

This update fixes dependency, lint, audit, and build issues in the portfolio website. It upgrades the project to a secure Next.js version, updates ESLint, removes the Google Fonts build dependency, replaces Axios with native Fetch, improves the GitHub stats API, reduces unnecessary client-side JavaScript, and improves small accessibility details. The project now installs, builds, lints, and audits successfully.
