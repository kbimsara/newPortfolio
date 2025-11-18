# Vercel Deployment Setup Guide

This guide will help you set up automatic deployment to Vercel using GitHub Actions.

## Prerequisites

1. A Vercel account (sign up at https://vercel.com)
2. Your project connected to Vercel
3. GitHub repository with Actions enabled

## Step 1: Get Your Vercel Credentials

### 1.1 Get Vercel Token
1. Go to https://vercel.com/account/tokens
2. Click "Create Token"
3. Give it a name (e.g., "GitHub Actions")
4. Copy the token (you won't see it again!)

### 1.2 Get Project IDs
Run these commands in your terminal from your project directory:

```bash
# Install Vercel CLI globally
npm install -g vercel@latest

# Login to Vercel
vercel login

# Link your project (if not already linked)
vercel link

# Get your org and project IDs (look in .vercel/project.json)
```

After running `vercel link`, check the `.vercel/project.json` file:
- `orgId` is your `VERCEL_ORG_ID`
- `projectId` is your `VERCEL_PROJECT_ID`

## Step 2: Add Secrets to GitHub

1. Go to your GitHub repository
2. Click on **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add these three secrets:

   - **Name:** `VERCEL_TOKEN`  
     **Value:** Your Vercel token from Step 1.1

   - **Name:** `VERCEL_ORG_ID`  
     **Value:** Your org ID from `.vercel/project.json`

   - **Name:** `VERCEL_PROJECT_ID`  
     **Value:** Your project ID from `.vercel/project.json`

## Step 3: How It Works

The GitHub Action will automatically:

### On Pull Requests:
- Run type checking and linting
- Deploy to a preview URL
- Comment the preview URL on the PR (if configured)

### On Push to `main` branch:
- Run type checking and linting
- Deploy to production (your main domain)

### On Push to `Dev` branch:
- Run type checking and linting
- Deploy to a preview environment

## Step 4: Test Your Setup

1. Commit and push the workflow file:
   ```bash
   git add .github/workflows/vercel-deploy.yml
   git commit -m "Add Vercel deployment workflow"
   git push origin Dev
   ```

2. Go to your GitHub repository → **Actions** tab
3. You should see the workflow running
4. Check the logs to ensure everything works correctly

## Troubleshooting

### Error: "No Vercel credentials found"
- Make sure all three secrets are added to GitHub
- Check that secret names match exactly (case-sensitive)

### Error: "Project not found"
- Verify `VERCEL_PROJECT_ID` is correct
- Make sure the project exists in Vercel

### Build fails
- Check the logs in GitHub Actions
- Ensure your project builds locally with `npm run build`
- Verify all dependencies are in `package.json`

## Optional: Disable Vercel's Auto-Deploy

If you want GitHub Actions to be the only deployment method:

1. Go to your project in Vercel Dashboard
2. Settings → Git
3. Disable "Automatic deployments"

This prevents Vercel from deploying automatically on every push (GitHub Actions will handle it).

## Additional Resources

- [Vercel CLI Documentation](https://vercel.com/docs/cli)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vercel with GitHub Actions](https://vercel.com/guides/how-can-i-use-github-actions-with-vercel)
