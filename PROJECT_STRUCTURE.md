# Youth Skills & Entrepreneurship Hub - Project Structure

## Overview
This is a modern, youth-friendly website for a skills training and entrepreneurship organization. Built with React, TypeScript, and TailwindCSS with a sustainable eco-theme using green and blue colors.

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Main navigation component
│   ├── Footer.tsx          # Global footer component
│   └── Layout.tsx          # Layout wrapper for all pages
│
├── pages/
│   ├── Home.tsx            # Landing page (/)
│   ├── About.tsx           # About Us page (/about)
│   ├── Programs.tsx        # Programs listing (/programs)
│   ├── Events.tsx          # Events & Blog (/events)
│   ├── Impact.tsx          # Impact showcase (/impact)
│   ├── Contact.tsx         # Contact & Partnership (/contact)
│   └── Donate.tsx          # Donation page (/donate)
│
├── assets/
│   ├── images/             # Image assets
│   └── icons/              # Custom icons (if needed)
│
├── styles/
│   └── globals.css         # Global styles and custom utilities
│
├── App.tsx                 # Main app component with routing
├── main.tsx                # App entry point
└── index.css               # Tailwind imports
```

## Color Palette (Sustainable/Eco Theme)
- **Primary Green**: For CTAs, highlights, nature/growth themes
- **Primary Blue**: For trust, professionalism, water/sky themes
- **Neutral Grays**: For text and backgrounds
- **White**: Clean backgrounds
- **Accent Colors**: Success green, warning amber if needed

## Pages Overview

### Home (/)
- Hero banner with impactful headline
- Mission statement
- Featured programs preview
- Upcoming events
- Donation CTA
- Impact statistics

### About (/about)
- Organization story
- Mission, vision, values
- Team members
- Partners
- Timeline/milestones

### Programs (/programs)
- Program listings
- Categories/filters
- Program details and enrollment
- Success stories

### Events & Blog (/events)
- Upcoming events
- Event registration
- Blog posts
- Past events archive

### Impact (/impact)
- Key metrics and statistics
- Success stories
- Testimonials
- Visual data representations

### Contact (/contact)
- Contact form
- Office information
- Map
- Partnership inquiries

### Donate (/donate)
- Donation form
- Impact of contributions
- Payment integration
- Alternative support options

## Technology Stack
- **React 18** with TypeScript
- **Vite** for build tooling
- **TailwindCSS** for styling
- **Lucide React** for icons
- **Supabase** for backend (database, auth, storage)

## Design Principles
- Mobile-first responsive design
- Clean, modern aesthetics
- Youth-friendly and accessible
- Fast loading and performance
- Intuitive navigation
- Strong visual hierarchy

## Next Steps
1. All component and page files are created as empty skeletons
2. Ready for implementation of actual code
3. Routing will be set up in App.tsx
4. Global styles will be added to styles/globals.css
