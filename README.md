# BitBuilder Cloud - Complete Brand Package

Welcome to the BitBuilder Cloud brand identity system! This package contains everything you need to represent the BitBuilder Cloud brand professionally and consistently across all media.

---

## 📦 Package Contents

```
/branding/
├── README.md                          ← You are here
├── BRAND_GUIDELINES.md                ← Complete brand guidelines
├── SOCIAL_MEDIA_ASSETS.md             ← Social media specifications
│
├── /logos/                            ← Extracted logo variations
│   ├── 01-horizontal-black.svg
│   ├── 02-horizontal-white.svg
│   ├── 03-large-black.svg
│   ├── 04-large-white.svg
│   ├── 05-with-tagline-white.svg
│   ├── 06-with-tagline-black.svg
│   ├── 07-compact-blue.svg
│   ├── 08-horizontal-icon-black.svg
│   ├── 09-compact-black.svg
│   ├── 10-compact-icon-black.svg
│   ├── 11-compact-icon-white.svg
│   └── 12-full-brand-white.svg
│
├── /exports/                          ← Generated assets
│   ├── /optimized-svg/                ← Clean, optimized SVG files
│   ├── /square-svg/                   ← Square format logos
│   ├── /circular-svg/                 ← Circular format logos
│   ├── /inverted-svg/                 ← Color-inverted versions
│   ├── /square-png/                   ← PNG square versions
│   ├── /circular-png/                 ← PNG circular versions
│   └── /favicons/                     ← ICO files for web
│
├── /templates/                        ← Ready-to-use templates
│   ├── business-card-front.html       ← Business card front
│   ├── business-card-back.html        ← Business card back
│   ├── letterhead.html                ← Letterhead template
│   └── email-signature.html           ← Email signature generator
│
├── /tools/                            ← Utilities
│   ├── extract-logos.ts               ← Logo extraction script
│   ├── optimize-and-export.ts         ← SVG optimization
│   └── svg-to-png-converter.html      ← PNG generation tool
│
└── catalog.html                       ← Visual catalog (coming soon)
```

---

## 🚀 Quick Start

### 1. Choose Your Logo

We have **12 unique logo variations** for different use cases:

- **Horizontal layouts** (01, 02, 08, 09): For headers, website navigation
- **Large scale** (03, 04): For high-impact placements
- **With tagline** (05, 06, 12): For marketing materials
- **Compact versions** (07, 10, 11): For space-constrained areas

👉 See `/logos/` folder for all variations
👉 Read `BRAND_GUIDELINES.md` for detailed usage instructions

### 2. Generate PNGs

Open `svg-to-png-converter.html` in your browser to:
- Select any logo variation
- Choose output sizes (16×16 to 2048×2048)
- Set background color or transparent
- Download PNGs instantly

### 3. Use Templates

All templates are HTML-based and fully customizable:

- **Business Cards**: Open `templates/business-card-front.html` and `business-card-back.html`
- **Letterhead**: Open `templates/letterhead.html`
- **Email Signature**: Open `templates/email-signature.html`

Each template allows you to:
- Edit content directly in the browser
- Print to PDF (File → Print → Save as PDF)
- Customize colors and information

---

## 📋 Logo Variations Guide

### Primary Logos

#### 01. Horizontal Black
**Use for**: Light backgrounds, default placement
**File**: `logos/01-horizontal-black.svg`
**Best for**: Website headers, print materials

#### 02. Horizontal White
**Use for**: Dark backgrounds
**File**: `logos/02-horizontal-white.svg`
**Best for**: Dark mode UIs, video overlays

### Full Brand Marks (with tagline)

#### 05. White on Dark
**Use for**: Complete brand identity presentation
**File**: `logos/05-with-tagline-white.svg`
**Best for**: Marketing materials, presentations

#### 06. Black on Light
**Use for**: Print documents, business cards
**File**: `logos/06-with-tagline-black.svg`
**Best for**: White papers, official documents

### Compact Versions

#### 10. Compact with Icon - Black
**Use for**: Small spaces, technical badges
**File**: `logos/10-compact-icon-black.svg`
**Best for**: Documentation, developer materials

#### 11. Compact with Icon - White
**Use for**: Dark backgrounds, small placements
**File**: `logos/11-compact-icon-white.svg`
**Best for**: Dark mode badges, footers

---

## 🎨 Color Palette

### Primary Colors

```css
/* Terminal Black */
#111111 - RGB(17, 17, 17)

/* Pure White */
#FFFFFF - RGB(255, 255, 255)

/* Cloud Blue */
#252A34 - RGB(37, 42, 52)
```

### Usage

- **#111111**: Primary logo color for light backgrounds
- **#FFFFFF**: Logo color for dark backgrounds
- **#252A34**: Secondary branding, accents, headers

### CMYK (for print)

- **Terminal Black**: C0 M0 Y0 K93
- **Pure White**: C0 M0 Y0 K0
- **Cloud Blue**: C29 M19 Y0 K80

---

## 🖼️ File Formats

### SVG (Scalable Vector Graphics)
- **Use**: Web, digital applications, any size
- **Benefits**: Infinite scalability, small file size
- **Location**: `/exports/optimized-svg/`

### PNG (Portable Network Graphics)
- **Use**: Digital applications requiring raster images
- **Sizes**: 16×16 to 2048×2048
- **Generate**: Use `svg-to-png-converter.html`

### ICO (Icon Format)
- **Use**: Favicons, Windows icons
- **Location**: `/exports/favicons/`

---

## 📱 Social Media

### Profile Pictures

Use **square** or **circular** versions:
- Twitter/X: 400×400px
- LinkedIn: 400×400px
- Instagram: 320×320px
- GitHub: 400×400px

**Recommended**: `11-compact-icon-white-square.svg` (dark mode profiles)

### Cover Photos

Platform-specific dimensions required:
- Twitter/X: 1500×500px
- LinkedIn: 1584×396px
- Facebook: 820×312px

👉 See `SOCIAL_MEDIA_ASSETS.md` for complete specifications

---

## 🖨️ Print Guidelines

### Business Cards
- **Standard US**: 3.5" × 2"
- **Standard EU**: 85mm × 55mm
- **Resolution**: 300 DPI minimum
- **Templates**: `/templates/business-card-*.html`

### Letterhead
- **US Letter**: 8.5" × 11"
- **A4**: 210mm × 297mm
- **Template**: `/templates/letterhead.html`

### Minimum Sizes
- **Digital**: 120px width minimum
- **Print**: 1 inch (25.4mm) width minimum
- **Favicon**: 32×32px minimum

---

## ⚡ Quick Tasks

### Task: Add Logo to Website
1. Choose variation (usually `01-horizontal-black.svg` or `02-horizontal-white.svg`)
2. Copy from `/exports/optimized-svg/`
3. Add to your HTML:
   ```html
   <img src="bitbuilder-logo.svg" alt="BitBuilder Cloud" width="200">
   ```

### Task: Create Social Media Profile Picture
1. Open `svg-to-png-converter.html`
2. Select `11-compact-icon-white.svg`
3. Choose size 512×512
4. Select transparent background
5. Download and upload to platform

### Task: Print Business Cards
1. Open `templates/business-card-front.html`
2. Edit your name and role
3. Print to PDF (Ctrl/Cmd + P)
4. Open `templates/business-card-back.html`
5. Edit contact information
6. Print to PDF
7. Send both PDFs to printer

### Task: Create Email Signature
1. Open `templates/email-signature.html`
2. Fill in your information
3. Click "Copy HTML Code"
4. Paste into your email client's signature settings

---

## 🔧 Tools & Scripts

### Logo Extraction (`extract-logos.ts`)
Extracts all 12 unique logo variations from the master `logos.svg` file.

```bash
bun extract-logos.ts
```

### Optimization (`optimize-and-export.ts`)
Optimizes SVGs and creates square, circular, and inverted versions.

```bash
bun optimize-and-export.ts
```

### PNG Converter (`svg-to-png-converter.html`)
Browser-based tool to generate PNGs at any size. Just open in a web browser!

---

## 📖 Documentation

### Complete Guides

1. **BRAND_GUIDELINES.md**
   - Logo usage rules
   - Color specifications
   - Typography guidelines
   - Do's and don'ts
   - File formats

2. **SOCIAL_MEDIA_ASSETS.md**
   - Platform-specific dimensions
   - Content templates
   - Hashtag strategy
   - Brand voice guidelines

### What's Included

✅ 12 unique logo variations
✅ SVG, PNG, and ICO formats
✅ Square and circular versions
✅ Inverted color variations
✅ Business card templates
✅ Letterhead template
✅ Email signature generator
✅ PNG export tool
✅ Complete brand guidelines
✅ Social media specifications

---

## 💡 Tips & Best Practices

### Logo Usage

- ✅ Always use provided files without modification
- ✅ Maintain proper aspect ratios
- ✅ Ensure adequate contrast with background
- ✅ Keep clear space around logo
- ❌ Don't stretch, distort, or rotate
- ❌ Don't change colors or add effects
- ❌ Don't use low-resolution versions

### File Management

- Keep original SVG files as source of truth
- Generate PNGs as needed (don't commit to Git)
- Use version control for SVG files
- Document any customizations

### Requesting Custom Assets

Need something not included? Contact:
- **Email**: daniel.bodnar@gmail.com
- **GitHub**: [@danielbodnar](https://github.com/danielbodnar)

---

## 🎯 Common Use Cases

### Website Header
**Logo**: `01-horizontal-black.svg` or `02-horizontal-white.svg`
**Size**: 150-200px width
**Format**: SVG (scalable)

### Favicon
**Logo**: `10-compact-icon-black-square.svg`
**Sizes**: 16×16, 32×32, 180×180
**Format**: ICO or PNG
**Tool**: `svg-to-png-converter.html`

### Social Media Avatar
**Logo**: `11-compact-icon-white-circular.svg`
**Size**: 512×512px
**Format**: PNG
**Background**: Transparent or solid color

### Email Signature
**Template**: `templates/email-signature.html`
**Customization**: Fill in personal information
**Export**: Copy HTML code
**Format**: HTML for email clients

### Business Card
**Templates**: `business-card-front.html` + `business-card-back.html`
**Customization**: Edit text fields
**Export**: Print to PDF
**Format**: PDF at 300 DPI

### Marketing Material
**Logo**: `05-with-tagline-white.svg` or `06-with-tagline-black.svg`
**Size**: Varies by medium
**Format**: SVG for print, PNG for digital

---

## 📞 Support

### Questions?

- **Brand Guidelines**: Read `BRAND_GUIDELINES.md`
- **Social Media**: Read `SOCIAL_MEDIA_ASSETS.md`
- **Technical Issues**: Open an issue on GitHub
- **Custom Requests**: Email daniel.bodnar@gmail.com

### Contributing

Found an issue or have a suggestion?
1. Fork the repository
2. Make your changes
3. Submit a pull request

---

## 📜 License

© 2025 BitBuilder Cloud. All rights reserved.

The BitBuilder Cloud logo and brand assets are proprietary and protected by copyright law. Unauthorized use, reproduction, or distribution is prohibited.

**Authorized Use**:
- BitBuilder Cloud team members and authorized partners
- Community members for promoting BitBuilder Cloud (with attribution)
- Open source contributors in BitBuilder Cloud projects

**Prohibited Use**:
- Commercial use without permission
- Modification or creation of derivative works
- Use that implies endorsement without authorization

For licensing inquiries, contact: daniel.bodnar@gmail.com

---

## 🚀 What's Next?

1. **Read the guidelines**: Start with `BRAND_GUIDELINES.md`
2. **Choose your logos**: Browse `/logos/` folder
3. **Generate assets**: Use `svg-to-png-converter.html`
4. **Use templates**: Customize business cards, letterhead, email signatures
5. **Stay consistent**: Follow the brand guidelines across all materials

---

**BitBuilder Cloud** - Secure Engineering
*A Distributed, Vendor Agnostic, E2E Encrypted, Multi-Cloud Infrastructure Platform*

Built with ❤️ by the BitBuilder team

---

Last updated: October 28, 2025
Version: 1.0
