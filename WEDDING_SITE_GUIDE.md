# Elegant Wedding Invitation Website

This is a beautiful, responsive wedding invitation website built with Next.js, React, and Tailwind CSS. It features a sophisticated dark theme with gold accents and elegant serif typography.

## Features

### 📄 Pages

1. **Main Page** (`/`)
   - **Hero Section**: Full-screen welcome with couple names
   - **Story Section**: How the couple met and their journey
   - **Details Section**: Event timeline, location, and dress code
   - **Gallery Section**: Photo gallery with lightbox
   - **QR Code Section**: Link to guest management system
   - **RSVP Section**: Interactive form for guests to respond
   - **Footer**: Links and contact information

2. **Guest List Page** (`/guests`)
   - Search and filter guests by name or status
   - View RSVP statistics
   - See total guest count and accepting status

## Design System

### Colors
- **Primary**: Gold/Yellow (`oklch(0.72 0.19 70)`) - Used for accents and CTAs
- **Background**: Deep Black (`oklch(0.12 0 0)`)
- **Secondary**: Dark Charcoal (`oklch(0.25 0.01 0)`)
- **Foreground**: Off-white (`oklch(0.95 0.01 60)`)

### Typography
- **Headings**: Playfair Display (serif, elegant)
- **Body Text**: Lora (serif, readable)

## Customization

### Update Couple Information
Edit the following files to customize the content:
- `/app/page.tsx` - Main page content
- `/components/sections/*.tsx` - Individual section components

### Update Images
Replace these image files in `/public/`:
- `hero-bg.jpg` - Hero background
- `story-image.jpg` - Story section image
- `gallery-1.jpg` through `gallery-6.jpg` - Gallery images

### Update Colors
Edit the theme colors in `/app/globals.css`:
- Look for the `:root` and `.dark` sections
- Modify the `--primary` variable to change the gold accent color
- Adjust `--background`, `--foreground`, and `--secondary` for other colors

### Update Event Details
Edit `/components/sections/Details.tsx`:
- Update the `events` array with correct dates/times
- Modify location and address information

### Update Guest List
Edit `/app/guests/page.tsx`:
- Replace the `guestData` array with your actual guest list
- Adjust the guest management system link

## Deployment

The site is optimized for Vercel deployment:

```bash
npm run build
npm run start
```

Or connect your repository to Vercel for automatic deployments.

## Component Structure

```
/components
  /sections
    - Hero.tsx (Landing section)
    - Story.tsx (Couple's story)
    - Details.tsx (Event information)
    - Gallery.tsx (Photo gallery with lightbox)
    - QRCode.tsx (Guest management QR)
    - RSVP.tsx (Guest response form)
    - Footer.tsx (Footer links)

/app
  - page.tsx (Main page - combines all sections)
  - /guests
    - page.tsx (Guest list management)
  - layout.tsx (Root layout with fonts/theme)
  - globals.css (Global styles and design tokens)

/public
  - hero-bg.jpg
  - story-image.jpg
  - gallery-*.jpg
  - qr-code.svg
```

## Features to Enhance

- Add a backend to store RSVP submissions
- Integrate email notifications for RSVPs
- Add animation on scroll
- Create a real QR code for your guest management system
- Add a registry or gift link
- Include a travel guide section
- Add music to the site
- Create a countdown timer to the wedding date

Enjoy your beautiful wedding website!
