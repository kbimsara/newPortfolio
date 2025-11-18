# Vercel CI/CD Deployment Guide

This repository uses GitHub Actions to automatically deploy to Vercel.

## 🚀 Deployment Workflow

### **Dev Branch** → Preview Deployment
- Push to `Dev` branch triggers a preview deployment
- Preview URL available in Actions summary
- Perfect for testing features before merging

### **Dev → Main Merge** → Production Deployment 🎉
- When `Dev` is merged into `main`, it automatically deploys to production
- Type checks and linting run before deployment
- Production URL is your live site

### **Pull Requests** → Preview with PR Comment
- Creating a PR to `main` triggers a preview deployment
- Preview URL is automatically commented on the PR
- Great for code review and testing

## 📋 Setup Instructions

### 1. Get Vercel Credentials

You've already linked your project! The IDs are:
- **Org ID:** `team_82fANJnfLuEKxemaPYO8TBr2`
- **Project ID:** `prj_lpByYDLjOoPRiqCM7YDJgdPm09DS`

### 2. Create Vercel Token

1. Go to [Vercel Tokens](https://vercel.com/account/tokens)
2. Click **"Create Token"**
3. Name it: `GitHub Actions`
4. Copy the token (you'll only see it once!)

### 3. Add GitHub Secrets

Go to your repository:
```
GitHub → Settings → Secrets and variables → Actions → New repository secret
```

Add these **3 secrets**:

| Secret Name | Value |
|-------------|-------|
| `VERCEL_TOKEN` | Your token from step 2 |
| `VERCEL_ORG_ID` | `team_82fANJnfLuEKxemaPYO8TBr2` |
| `VERCEL_PROJECT_ID` | `prj_lpByYDLjOoPRiqCM7YDJgdPm09DS` |

## 🔄 Deployment Flow

```
┌─────────────────────────────────────────────────────────┐
│                    Development Flow                      │
└─────────────────────────────────────────────────────────┘

1. Work on Dev branch
   └─> Push to Dev
       └─> ✓ Type Check
           ✓ Lint
           └─> 📦 Deploy Preview

2. Create PR: Dev → main
   └─> ✓ Type Check
       ✓ Lint
       └─> 📦 Deploy Preview
           └─> 💬 Comment PR with URL

3. Merge PR to main
   └─> ✓ Type Check
       ✓ Lint
       └─> 🚀 Deploy Production
```

## 📊 Monitoring Deployments

### View Workflow Runs
- Go to [Actions Tab](https://github.com/kbimsara/newPortfolio/actions)
- See real-time deployment status
- View logs for debugging

### Vercel Dashboard
- [Vercel Dashboard](https://vercel.com/dashboard)
- See all deployments
- View deployment URLs
- Monitor performance

## ⚙️ Workflow Features

✅ **Automatic Quality Checks**
- TypeScript type checking
- ESLint code linting
- Prevents broken code from deploying

✅ **Environment-Specific Deployments**
- Dev branch → Preview environment
- Main branch → Production environment
- PRs → Preview with comment

✅ **Fast Deployments**
- Uses npm cache for faster installs
- Prebuilt artifacts for quick deploys
- Efficient GitHub Actions runners

## 🧪 Testing the Workflow

### Test Preview Deployment (Dev branch)
```powershell
git checkout Dev
# Make some changes
git add .
git commit -m "Test preview deployment"
git push origin Dev
```
Check Actions tab for preview URL.

### Test Production Deployment (Merge to main)
```powershell
# From Dev branch
git checkout main
git merge Dev
git push origin main
```
Check Actions tab for production deployment.

## 🛠️ Troubleshooting

### Deployment Fails with "Invalid token"
- Verify `VERCEL_TOKEN` secret is set correctly
- Token may have expired - create a new one

### Type Check or Lint Errors
- Run locally: `npm run type-check`
- Run locally: `npm run lint`
- Fix errors before pushing

### Deployment Stuck
- Check [Vercel Status](https://www.vercel-status.com/)
- Rerun workflow from Actions tab

## 📝 Manual Deployment (if needed)

```powershell
# Preview deployment
npx vercel

# Production deployment
npx vercel --prod
```

## 🔒 Security Notes

- Never commit `.vercel/` folder (already in `.gitignore`)
- Keep secrets in GitHub Secrets only
- Rotate tokens periodically
- Use environment-specific tokens if possible

## 📚 Resources

- [Vercel CLI Documentation](https://vercel.com/docs/cli)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)

---

**Ready to deploy!** Just add the secrets and push to trigger your first automated deployment! 🎉
