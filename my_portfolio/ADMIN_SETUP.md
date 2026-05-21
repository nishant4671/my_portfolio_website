# Admin Dashboard Setup Guide

Your portfolio now has a hidden Admin Dashboard at `/admin`. This allows you to add projects and certifications without writing code.

## 1. Create a GitHub Token
1. Go to [GitHub Settings > Developer Settings > Personal Access Tokens > Tokens (classic)](https://github.com/settings/tokens).
2. Click **Generate new token (classic)**.
3. Give it a name (e.g., "Portfolio Admin").
4. Select the **repo** scope (this allows the dashboard to update your code).
5. Copy the token. **Warning: You won't see it again!**

## 2. Add Environment Variables to Vercel
1. Go to your project on the [Vercel Dashboard](https://vercel.com/dashboard).
2. Go to **Settings > Environment Variables**.
3. Add the following variables:
   - `GITHUB_TOKEN`: Paste the token you copied from GitHub.
   - `ADMIN_PASSWORD`: Choose a password you will use to log in to `/admin`.
   - `GITHUB_OWNER`: Your GitHub username (`Nishant-Kumar-Dev`).
   - `GITHUB_REPO`: The name of your repository on GitHub.
4. Click **Save**.

## 3. How to Use
1. Visit `your-portfolio-url.com/admin`.
2. Log in with your `ADMIN_PASSWORD`.
3. Fill out the form for a Project or Certification.
4. Click **Save**.
5. **Wait 1-2 minutes.** Vercel will see the change on GitHub and rebuild your site automatically. Your new project will appear with its own page!

## 4. Local Testing
If you are running the project locally (`npm run dev`), you can create a `.env.local` file in the root folder and add the same variables there to test the dashboard.
