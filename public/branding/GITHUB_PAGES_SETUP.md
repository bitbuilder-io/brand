# GitHub Pages Setup Instructions

The BitBuilder Cloud branding package is now configured for automatic deployment to GitHub Pages via GitHub Actions.

## Automatic Deployment

A GitHub Actions workflow has been created at `.github/workflows/deploy-branding.yml` that will automatically deploy the branding package whenever changes are pushed to the `main` branch under the `packages/landing/packages/www/public/branding/` directory.

## Manual Setup Required

To complete the GitHub Pages setup, follow these steps:

### 1. Enable GitHub Pages in Repository Settings

1. Go to your repository on GitHub: `https://github.com/bitbuilder-io/bitbuilder`
2. Click **Settings** (repository settings, not account settings)
3. In the left sidebar, click **Pages** (under "Code and automation")
4. Under **Source**, select **GitHub Actions** from the dropdown

### 2. Verify Deployment

After the first push to `main`, the workflow will automatically run:

1. Go to the **Actions** tab in your repository
2. Look for the "Deploy Branding Package to GitHub Pages" workflow
3. Once completed, your branding package will be live at:
   ```
   https://bitbuilder-io.github.io/bitbuilder/
   ```

### 3. Access Your Branding Assets

Once deployed, you can access:

- **Visual Catalog**: `https://bitbuilder-io.github.io/bitbuilder/`
- **Brand Guidelines**: `https://bitbuilder-io.github.io/bitbuilder/BRAND_GUIDELINES.md`
- **Social Media Assets**: `https://bitbuilder-io.github.io/bitbuilder/SOCIAL_MEDIA_ASSETS.md`
- **PNG Converter**: `https://bitbuilder-io.github.io/bitbuilder/svg-to-png-converter.html`
- **Business Card Templates**:
  - `https://bitbuilder-io.github.io/bitbuilder/templates/business-card-front.html`
  - `https://bitbuilder-io.github.io/bitbuilder/templates/business-card-back.html`
- **Letterhead**: `https://bitbuilder-io.github.io/bitbuilder/templates/letterhead.html`
- **Email Signature**: `https://bitbuilder-io.github.io/bitbuilder/templates/email-signature.html`

### 4. Custom Domain (Optional)

If you want to use a custom domain (e.g., `branding.bitbuilder.io`):

1. In GitHub repository **Settings** > **Pages**
2. Under **Custom domain**, enter your domain
3. Add a CNAME record in your DNS settings pointing to `bitbuilder-io.github.io`
4. Wait for DNS propagation (can take up to 24 hours)
5. Enable **Enforce HTTPS** once the certificate is issued

## Workflow Triggers

The deployment workflow runs:
- **Automatically** on every push to `main` that modifies files in the branding directory
- **Manually** via the Actions tab using "Run workflow" button

## Troubleshooting

### Build Fails
- Check the Actions tab for error logs
- Ensure all file paths are correct
- Verify permissions are set correctly in the workflow

### 404 Error After Deployment
- Confirm GitHub Pages is enabled with "GitHub Actions" as the source
- Wait a few minutes for the deployment to complete
- Check that `index.html` exists in the branding directory

### CSS/Images Not Loading
- Ensure all asset paths are relative (not absolute)
- Check browser console for 404 errors
- Verify file names match exactly (case-sensitive)

## Direct File Access

All branding assets can be accessed directly via GitHub Pages:

```
Base URL: https://bitbuilder-io.github.io/bitbuilder/

Logos:
  /logos/01-horizontal-black.svg
  /logos/02-horizontal-white.svg
  ... (all 12 variations)

Exports:
  /exports/optimized-svg/
  /exports/square-svg/
  /exports/circular-svg/
  /exports/inverted-svg/

Templates:
  /templates/business-card-front.html
  /templates/business-card-back.html
  /templates/letterhead.html
  /templates/email-signature.html
```

## Security Note

All assets are public once deployed to GitHub Pages. Do not include:
- API keys or secrets
- Internal contact information
- Proprietary or confidential materials

---

**Questions?** Contact daniel.bodnar@gmail.com or open an issue on GitHub.
