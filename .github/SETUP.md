# GitHub Actions CI/CD Setup for Vercel

This repository includes automated CI/CD pipelines using GitHub Actions for deploying to Vercel.

## 🚀 Workflows

### 1. CI Pipeline (`ci.yml`)
Runs on every push and pull request to validate code quality:
- Installs dependencies
- Runs ESLint
- Type checks with TypeScript
- Builds the project
- Uploads build artifacts

### 2. Deploy Pipeline (`deploy.yml`)
Automatically deploys to Vercel:
- **Preview Deployments**: On pull requests and Dev branch pushes
- **Production Deployments**: On main branch pushes
- Comments PR with deployment URL
- Includes linting and building

## 📋 Setup Instructions

### Step 1: Get Vercel Credentials

1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Link your project:
   ```bash
   vercel link
   ```

4. Get your Vercel Token:
   - Go to https://vercel.com/account/tokens
   - Create a new token
   - Copy the token value

5. Get Project and Org IDs:
   ```bash
   cat .vercel/project.json
   ```
   This will show your `projectId` and `orgId`

### Step 2: Add GitHub Secrets

Go to your GitHub repository → Settings → Secrets and variables → Actions

Add the following secrets:

- **VERCEL_TOKEN**: Your Vercel token from Step 1.4
- **VERCEL_ORG_ID**: Your organization ID from Step 1.5
- **VERCEL_PROJECT_ID**: Your project ID from Step 1.5

### Step 3: Configure Vercel Project (Optional)

Add `.vercelignore` if needed:
```
node_modules
.next
.git
```

### Step 4: Test the Pipeline

1. Create a new branch:
   ```bash
   git checkout -b test-deployment
   ```

2. Make a change and push:
   ```bash
   git add .
   git commit -m "Test CI/CD pipeline"
   git push origin test-deployment
   ```

3. Create a pull request on GitHub

4. Check the Actions tab to see the workflows running

## 🔧 Customization

### Change Branch Names
Edit the workflow files to match your branch strategy:
```yaml
on:
  push:
    branches:
      - main        # Production branch
      - develop     # Staging branch
```

### Disable Preview Deployments
Remove the preview deployment step from `deploy.yml`:
```yaml
- name: Deploy to Vercel (Preview)
  if: github.event_name == 'pull_request' || github.ref != 'refs/heads/main'
```

### Add Tests
Add a test step before deployment:
```yaml
- name: Run tests
  run: npm test
```

## 📊 Deployment Status

Deployments will show:
- ✅ Success with deployment URL
- ❌ Failed builds in the Actions tab
- 💬 PR comments with preview URLs

## 🔒 Security Notes

- Never commit `.vercel` directory
- Keep secrets secure in GitHub Secrets
- Use environment-specific tokens
- Review Vercel access permissions

## 🐛 Troubleshooting

**Build fails on Vercel:**
- Check Node.js version matches locally
- Verify all dependencies are in `package.json`
- Check build command in `package.json`

**Secrets not working:**
- Verify secret names match exactly
- Re-create secrets if needed
- Check Vercel token hasn't expired

**Deployment URL not showing:**
- Check GitHub Actions permissions
- Verify workflow has write access to PRs

## 📚 Resources

- [Vercel CLI Documentation](https://vercel.com/docs/cli)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
