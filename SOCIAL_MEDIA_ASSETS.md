# BitBuilder Cloud - Social Media Asset Specifications

**Version 1.0** | Last Updated: October 28, 2025

---

## Quick Reference

| Platform | Profile Picture | Cover/Banner | Post Image | Story/Reel |
|----------|----------------|--------------|------------|------------|
| **Twitter/X** | 400×400px | 1500×500px | 1200×675px | 1080×1920px |
| **LinkedIn** | 400×400px | 1584×396px | 1200×627px | 1080×1920px |
| **Facebook** | 180×180px | 820×312px | 1200×630px | 1080×1920px |
| **Instagram** | 320×320px | N/A | 1080×1080px | 1080×1920px |
| **GitHub** | 400×400px | N/A | 1280×640px | N/A |
| **YouTube** | 800×800px | 2560×1440px | 1280×720px | 1080×1920px |

---

## Profile Pictures / Avatars

### Recommended Logos

Use **square** or **circular** versions of these variations:

1. **`11-compact-icon-white-square.svg`** (Best for dark mode profiles)
2. **`10-compact-icon-black-square.svg`** (Best for light mode profiles)
3. **Terminal icon only** - Extract from logo for minimalist look

### Specifications by Platform

#### Twitter/X
- **Size**: 400×400px
- **Format**: PNG or JPG
- **Safe Area**: Keep important elements within center 360×360px
- **Recommendation**: Use circular version with transparent background

#### LinkedIn
- **Size**: 400×400px
- **Format**: PNG or JPG
- **Max File Size**: 8MB
- **Recommendation**: Square version with professional look (`10-compact-icon-black`)

#### Facebook
- **Size**: 180×180px (displays at 170×170px)
- **Format**: PNG or JPG
- **Recommendation**: Square version with high contrast

#### Instagram
- **Size**: 320×320px
- **Format**: JPG (PNG not recommended due to size)
- **Displays as**: Circular crop
- **Recommendation**: Use circular version to control crop

#### GitHub
- **Size**: 400×400px
- **Format**: PNG with transparency
- **Recommendation**: `10-compact-icon-black` or terminal icon only

---

## Cover Photos / Banners

### Design Considerations

- **Keep text to minimum** - Many platforms crop aggressively
- **Safe zones**: Important content in center 50% of width
- **Mobile view**: Test how it looks on mobile devices
- **Contrast**: Ensure logo is visible against background

### Recommended Designs

#### Option 1: Clean Minimal
```
Background: Solid #252a34 (dark blue-grey)
Logo: 12-full-brand-white.svg (centered)
Text: None or minimal tagline
```

#### Option 2: Terminal Aesthetic
```
Background: Dark gradient (#1a1e28 to #252a34)
Logo: 05-with-tagline-white.svg (left-aligned)
Decoration: Subtle terminal code pattern
Text: "Distributed • Vendor Agnostic • E2E Encrypted"
```

#### Option 3: Brand Statement
```
Background: White
Logo: 06-with-tagline-black.svg (centered)
Text: Large impact statement about platform
```

### Specifications by Platform

#### Twitter/X
- **Size**: 1500×500px
- **Format**: JPG or PNG
- **Max File Size**: 5MB
- **Safe Area**: Avoid top-left 400×400px (profile picture overlap)

#### LinkedIn Company Page
- **Size**: 1584×396px
- **Format**: PNG or JPG
- **Max File Size**: 8MB
- **Note**: Profile picture overlaps bottom-left

#### Facebook Page
- **Size**: 820×312px
- **Format**: JPG or PNG
- **Max File Size**: 100KB
- **Mobile Crop**: Shows as 640×360px on mobile

#### YouTube Channel Art
- **Size**: 2560×1440px
- **Safe Area**: 1546×423px (visible on all devices)
- **Format**: JPG or PNG
- **Max File Size**: 6MB

---

## Post Images / Content

### Standard Post Dimensions

#### Square Posts (Instagram, LinkedIn)
- **Size**: 1080×1080px
- **Format**: PNG or JPG
- **Use**: Product announcements, quotes, tips

#### Landscape Posts (Twitter, Facebook, LinkedIn)
- **Size**: 1200×630px
- **Format**: PNG or JPG
- **Use**: Blog post previews, announcements

#### Portrait Posts (Pinterest, Stories)
- **Size**: 1080×1920px
- **Format**: PNG or JPG
- **Use**: Tutorials, step-by-step guides

### Content Templates

#### 1. Announcement Template
```
Background: #252a34
Logo: Top center (200px width)
Headline: White, bold, 48-72px
Body: White, regular, 24-36px
CTA: Button or link at bottom
```

#### 2. Quote/Stat Template
```
Background: White or light grey
Quote: #252a34, large and bold
Attribution: Small, with logo
Border: 3px solid #252a34
```

#### 3. Technical/Code Template
```
Background: Terminal black (#111111)
Content: Code snippet or terminal output
Logo: Small corner watermark
Font: Monospace
```

### Image Generator Tools

Use the provided `svg-to-png-converter.html` to generate images at exact dimensions needed for each platform.

**Pro Tip**: Generate at 2× resolution for Retina displays, then scale down in post composer.

---

## Stories / Reels / Short-Form Video

### Vertical Format (9:16)
- **Size**: 1080×1920px
- **Safe Areas**:
  - Top 250px: Avoid (profile info)
  - Bottom 250px: Avoid (UI elements)
  - Keep important content in center 1080×1420px

### Story Templates

#### 1. Product Update Story
```
Frame 1: Logo with "Update" badge
Frame 2-4: Feature highlights with screenshots
Frame 5: CTA with swipe-up link
```

#### 2. Behind-the-Scenes Story
```
Frame 1: Team photo or workspace
Frame 2-3: Process/workflow visuals
Frame 4: Logo with tagline
```

#### 3. Educational Story
```
Frame 1: Problem statement
Frame 2-4: Solution steps
Frame 5: Summary with CTA
```

---

## Hashtag Strategy

### Primary Hashtags
```
#BitBuilder
#SecureEngineering
#CloudInfrastructure
#SystemD
#ContainerSecurity
```

### Secondary Hashtags (by topic)

**Security**:
`#CyberSecurity #E2EEncryption #ZeroTrust #SecureByDesign`

**Cloud/Infrastructure**:
`#MultiCloud #CloudNative #InfrastructureAsCode #DevOps #SRE`

**Open Source**:
`#OpenSource #Linux #UnixPhilosophy #FOSS`

**Technology**:
`#Rust #TypeScript #SystemD #Containers #Kubernetes`

---

## Platform-Specific Guidelines

### Twitter/X

**Profile Setup**:
- Name: "BitBuilder Cloud"
- Handle: @bitbuilder_io (or similar)
- Bio: "Distributed, vendor-agnostic, E2E encrypted multi-cloud platform. Built on systemd. Secure engineering. 🔐☁️"
- Website: bitbuilder.io
- Location: "Global / Open Source"

**Post Format**:
- Keep text concise (280 characters)
- Use 1-2 hashtags max
- Include visual with every post
- Thread for longer content

### LinkedIn

**Company Page Setup**:
- Company Name: "BitBuilder Cloud"
- Tagline: "Secure Engineering for Multi-Cloud Infrastructure"
- Industry: "Computer & Network Security"
- Company Size: "2-10 employees" (or actual)
- About: Focus on technical excellence, security, open-source

**Post Format**:
- Professional tone
- Technical depth welcome
- Use hashtags sparingly
- Link to blog posts / technical content

### Instagram

**Profile Setup**:
- Name: "BitBuilder Cloud"
- Username: @bitbuilder.io (or similar)
- Bio: "Secure multi-cloud infrastructure 🔐
Distributed • E2E Encrypted
Built on systemd
→ bitbuilder.io"

**Post Format**:
- Visual-first
- Use all 30 hashtags in first comment
- Post consistently
- Use Stories for informal content

### GitHub

**Organization Profile**:
- Name: "BitBuilder Cloud"
- Display Name: "BitBuilder"
- Bio: "Distributed, vendor-agnostic, E2E encrypted multi-cloud infrastructure platform"
- Website: bitbuilder.io
- Twitter: @bitbuilder_io
- Location: "Global"

**Repository README**:
- Use logo at top
- Include badges (build status, license, etc.)
- Link to main website
- Professional documentation

---

## Content Calendar Recommendations

### Weekly Cadence

**Monday**: Technical blog post / tutorial
**Wednesday**: Product update / feature highlight
**Friday**: Community spotlight / open-source contribution

### Monthly Themes

- **Week 1**: Security focus
- **Week 2**: Performance / scalability
- **Week 3**: Developer experience
- **Week 4**: Community / case studies

---

## Asset Generation Workflow

### 1. Design Phase
- Choose appropriate logo variation
- Select platform and dimensions
- Plan layout and messaging

### 2. Generation
- Use `svg-to-png-converter.html` for base logos
- Create in design tool (Figma, Canva, or HTML/CSS)
- Export at correct dimensions

### 3. Optimization
- Compress images (TinyPNG, ImageOptim)
- Test on actual platform
- Verify visibility on mobile

### 4. Scheduling
- Use platform-native schedulers
- Or tools like Buffer, Hootsuite
- Maintain consistent posting schedule

---

## Brand Voice & Tone

### Core Principles

**Technical but Accessible**
- Use precise technical language
- Explain complex concepts clearly
- Don't dumb down, but don't gatekeep

**Confident but Humble**
- Showcase capabilities
- Acknowledge challenges
- Learn from community

**Open and Transparent**
- Share development process
- Admit mistakes
- Welcome feedback

### Writing Style

**Do**:
- Use active voice
- Be direct and clear
- Include code examples
- Link to documentation
- Credit contributors

**Don't**:
- Use marketing fluff
- Overpromise features
- Ignore feedback
- Copy competitors' messaging

---

## Tools & Resources

### Design Tools
- **Figma**: Professional design collaboration
- **Canva**: Quick social media graphics
- **GIMP**: Open-source image editing
- **Inkscape**: SVG editing

### Image Optimization
- **TinyPNG**: PNG compression
- **ImageOptim**: Multi-format optimization
- **SVGO**: SVG optimization

### Scheduling Tools
- **Buffer**: Multi-platform scheduling
- **Hootsuite**: Enterprise social management
- **Later**: Visual Instagram planning

### Analytics
- **Platform Native**: Use built-in analytics first
- **Google Analytics**: Track website referrals
- **UTM Parameters**: Track campaign performance

---

## Questions & Support

For social media asset questions or custom requests:

- **Email**: daniel.bodnar@gmail.com
- **GitHub**: [@danielbodnar](https://github.com/danielbodnar)
- **Organization**: [BitBuilder Cloud](https://github.com/bitbuilder-io)

---

**BitBuilder Cloud** - Secure Engineering
*A Distributed, Vendor Agnostic, E2E Encrypted, Multi-Cloud Infrastructure Platform*

---

© 2025 BitBuilder Cloud. All rights reserved.
