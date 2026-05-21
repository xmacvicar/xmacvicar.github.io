---
id: deploy-static-site-vercel
title: Deploy a Static Site to Vercel with a Custom Domain
sidebar_position: 1
description: How to deploy a plain HTML/CSS site to Vercel using GitHub, and connect a custom domain with DNS configuration.
---

# Deploy a Static Site to Vercel with a Custom Domain

:::note Sample documentation
This guide documents the steps I followed to deploy my personal site, [davidmacvicar.com](https://www.davidmacvicar.com), to Vercel using GitHub. I wrote it up as a sample of procedural documentation drawn from a real workflow.
:::

This guide covers connecting a GitHub repository to Vercel, deploying a plain HTML/CSS site, and configuring a custom domain with DNS. Once complete, the site deploys automatically on every push to the main branch.

## Prerequisites

Before you start, you'll need:

- A GitHub account with your site's code in a repository
- A Vercel account (free tier is sufficient — sign up at [vercel.com](https://vercel.com))
- A registered domain name (this guide uses Namecheap for DNS examples, but the steps are similar for other registrars)

## How Vercel deployment works

Vercel watches a branch of your GitHub repository. When you push a commit, Vercel pulls the latest code, runs a build step if you have one, and publishes the output. For a plain HTML/CSS site there is no build step — Vercel serves your files directly.

Each push to your main branch triggers a production deployment. Pushes to other branches generate preview deployments at temporary URLs, which is useful for reviewing changes before they go live.

## Step 1: Import your repository into Vercel

1. Log in to [vercel.com](https://vercel.com) and click **Add New → Project**.
2. Under **Import Git Repository**, click **Continue with GitHub** and authorize Vercel to access your repositories.
3. Find your repository in the list and click **Import**.
4. On the configuration screen:
   - **Framework Preset**: leave set to **Other** for a plain HTML/CSS site
   - **Root Directory**: leave as `/` unless your site files are in a subdirectory
   - **Build and Output Settings**: leave blank — no build command is needed
5. Click **Deploy**.

Vercel builds and deploys your site in about 30 seconds. When it finishes, you'll get a preview URL in the format `your-project-name.vercel.app`. Open it to confirm your site is live.

:::tip
If your `index.html` is inside a subfolder rather than the root of the repo, set the **Root Directory** field to that folder name in step 4. Otherwise Vercel won't know where to find your entry point.
:::

## Step 2: Add your custom domain in Vercel

1. From your project dashboard, go to **Settings → Domains**.
2. Type your domain (`yourdomain.com`) into the field and click **Add**.
3. Vercel will display the DNS records you need to configure at your registrar. Keep this page open — you'll need these values in the next step.

Vercel typically provides one of two configurations:

| Record type | Use case |
|---|---|
| **A record** pointing to `76.76.21.21` | Recommended for apex domains (`yourdomain.com`) |
| **CNAME record** pointing to `cname.vercel-dns.com` | For subdomains (`www.yourdomain.com`) |

## Step 3: Configure DNS at your registrar

Log in to your domain registrar and navigate to your domain's DNS settings. The exact location varies by registrar but is usually under **Domain Management** or **Advanced DNS**.

### Add the A record (apex domain)

1. Create a new **A record**:
   - **Host**: `@` (represents the apex domain)
   - **Value**: `76.76.21.21`
   - **TTL**: Automatic or 3600

### Add the CNAME record (www subdomain)

1. Create a new **CNAME record**:
   - **Host**: `www`
   - **Value**: `cname.vercel-dns.com`
   - **TTL**: Automatic or 3600

### Remove conflicting records

If your registrar created default A records or CNAME records when you registered the domain, delete them. Conflicting records will prevent Vercel from verifying your domain.

:::warning
DNS changes can take up to 48 hours to propagate globally, though in practice they usually resolve within 30 minutes to a few hours. Vercel will show your domain as **Invalid Configuration** until propagation is complete — this is expected.
:::

## Step 4: Verify and enable HTTPS

Once DNS propagates, return to **Settings → Domains** in Vercel. Your domain status will change from **Invalid Configuration** to **Valid Configuration**.

Vercel automatically provisions an SSL certificate via Let's Encrypt and enables HTTPS. You can optionally enable **Force HTTPS redirect** in the domain settings to redirect any `http://` requests to `https://`.

## Step 5: Test the deployment pipeline

Confirm that automatic deployments are working:

1. Make a small change to your site locally — edit a line of text in `index.html`.
2. Commit and push to your main branch:

```bash
git add .
git commit -m "test deployment pipeline"
git push origin main
```

3. Go to your Vercel project dashboard. Under **Deployments**, you should see a new deployment appear within seconds.
4. When it completes, reload your live domain to confirm the change is visible.

From this point on, every push to main is a production deployment. You don't need to log in to Vercel again unless you're changing project settings.

## Troubleshooting

**Domain shows "Invalid Configuration" after several hours**

Check that you deleted any pre-existing A records at your registrar that conflict with the Vercel record. Use a DNS lookup tool like [dnschecker.org](https://dnschecker.org) to see what your domain is currently resolving to.

**Site deploys but shows a 404**

Vercel can't find your entry point. Confirm that `index.html` is in the root of your repository (or in the Root Directory you configured), and that the filename is lowercase — file names are case-sensitive on Vercel's servers.

**Changes pushed to GitHub aren't triggering deployments**

Go to **Settings → Git** in your Vercel project and confirm the **Production Branch** matches the branch you're pushing to. If you push to `main` but Vercel is watching `master`, deployments won't trigger.

## What's next

- **Preview deployments**: create a feature branch and push to it. Vercel will generate a temporary URL for that branch automatically, useful for reviewing work before merging.
- **Environment variables**: if your project grows to need API keys or config values, add them under **Settings → Environment Variables** rather than committing them to your repository.
- **Vercel Analytics**: available on the free tier, gives you basic page view data without adding third-party scripts to your site.