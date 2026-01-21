# GitHub Setup Guide

This guide covers two important topics:
1. How to host your React app on GitHub Pages
2. How to switch between GitHub accounts

## Part 1: Hosting on GitHub Pages

### Option A: Using GitHub Pages (Free Static Hosting)

#### Step 1: Install gh-pages package

```bash
npm install --save-dev gh-pages
```

#### Step 2: Update package.json

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://YOUR_USERNAME.github.io/quiz-app"
}
```

Replace `YOUR_USERNAME` with your GitHub username.

#### Step 3: Initialize Git and Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Make your first commit
git commit -m "Initial commit"

# Create a new repository on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/quiz-app.git
git branch -M main
git push -u origin main
```

#### Step 4: Deploy to GitHub Pages

```bash
npm run deploy
```

Your site will be live at: `https://YOUR_USERNAME.github.io/quiz-app`

**Note:** It may take a few minutes for the site to appear. You can check the deployment status in your repository under Settings → Pages.

### Option B: Using Vercel (Alternative - Easier Setup)

1. Push your code to GitHub (follow Step 3 above)
2. Go to [vercel.com](https://vercel.com)
3. Sign in with GitHub
4. Click "New Project"
5. Import your repository
6. Vercel will auto-detect Vite and deploy automatically!

---

## Part 2: Switching GitHub Accounts

Since you mentioned your origin is usually on your work account, here's how to switch to your personal account:

### Method 1: Change Remote URL (Quick Switch)

If you want to change the remote URL for this specific repository:

```bash
# Check current remote
git remote -v

# Remove current origin
git remote remove origin

# Add new origin with your personal account
git remote add origin https://github.com/YOUR_PERSONAL_USERNAME/quiz-app.git

# Verify the change
git remote -v
```

### Method 2: Use SSH with Multiple Accounts (Recommended)

This allows you to easily switch between accounts:

#### Step 1: Generate SSH Keys for Both Accounts

```bash
# For work account (if you don't have one)
ssh-keygen -t ed25519 -C "work@email.com" -f ~/.ssh/id_ed25519_work

# For personal account
ssh-keygen -t ed25519 -C "personal@email.com" -f ~/.ssh/id_ed25519_personal
```

#### Step 2: Add SSH Keys to SSH Agent

```bash
# Start ssh-agent
eval "$(ssh-agent -s)"

# Add both keys
ssh-add ~/.ssh/id_ed25519_work
ssh-add ~/.ssh/id_ed25519_personal
```

#### Step 3: Add Public Keys to GitHub

```bash
# Copy work public key
cat ~/.ssh/id_ed25519_work.pub

# Copy personal public key
cat ~/.ssh/id_ed25519_personal.pub
```

Go to GitHub → Settings → SSH and GPG keys → New SSH key, and add each public key.

#### Step 4: Create SSH Config File

Create/edit `~/.ssh/config`:

```
# Work account
Host github-work
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_work

# Personal account
Host github-personal
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_personal
```

#### Step 5: Use Different Hosts for Different Repos

```bash
# For work repos
git remote add origin git@github-work:work-org/repo-name.git

# For personal repos (like this one)
git remote add origin git@github-personal:YOUR_PERSONAL_USERNAME/quiz-app.git
```

### Method 3: Use GitHub CLI with Different Accounts

```bash
# Logout from current account
gh auth logout

# Login with personal account
gh auth login

# Select GitHub.com → HTTPS → Login with web browser
# Follow the prompts to authenticate
```

### Method 4: Change Git Config Per Repository

For this specific repository, you can set a different user:

```bash
# Set user for this repo only
git config user.name "Your Personal Name"
git config user.email "personal@email.com"

# Verify
git config user.name
git config user.email
```

### Quick Reference: Check Current Account

```bash
# Check git config
git config user.name
git config user.email

# Check GitHub CLI account
gh auth status

# Check remote URL
git remote -v
```

---

## Recommended Workflow for This Project

Since this is a personal project, I recommend:

1. **Use Method 2 (SSH with multiple accounts)** for the long term - it's the cleanest solution
2. **Or use Method 1** if you just want to quickly switch this repo to your personal account

For this quiz-app specifically:

```bash
# If using HTTPS with personal account
git remote set-url origin https://github.com/YOUR_PERSONAL_USERNAME/quiz-app.git

# If using SSH (after setting up Method 2)
git remote set-url origin git@github-personal:YOUR_PERSONAL_USERNAME/quiz-app.git
```

---

## Troubleshooting

### Authentication Issues

If you get authentication errors:

```bash
# Clear GitHub credentials from macOS Keychain
git credential-osxkeychain erase
host=github.com
protocol=https
[Press Enter twice]

# Or use GitHub CLI to re-authenticate
gh auth login
```

### Wrong Account Committing

If commits show the wrong author:

```bash
# Fix last commit
git commit --amend --author="Your Name <your.email@example.com>"

# Or set for future commits in this repo
git config user.name "Your Name"
git config user.email "your.email@example.com"
```
