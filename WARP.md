# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a static HTML website for Aboda Emperor Services Nigeria Limited, a marine services company specializing in offshore/onshore logistics, wreck removal, and underwater services. The site is built with vanilla HTML, CSS, and minimal JavaScript.

## Architecture

### File Structure
- `index.html` - Main homepage with company showcase and services
- `features.html` - Contact page with company mission and office locations
- `css/` - Stylesheets directory
  - `style.css` - Main styling with responsive design and animations
  - `utilities.css` - Utility classes and component styles
- `images/` - Static assets including company logo, service images, and background photos

### Key Design Elements
- **Responsive grid system** - Custom CSS grid implementation with mobile-first approach
- **Background overlay system** - Uses linear gradients over background images for text readability
- **Component-based styling** - Cards, buttons, and form controls with consistent design tokens
- **CSS animations** - Slide-in animations for showcase elements using keyframes
- **Color scheme** - Primary (#4fafc8), secondary (#1c3fa8), dark (#132146) defined as CSS custom properties

## Development Commands

### Local Development
```bash
# Serve the site locally using Python
python3 -m http.server 8000

# Alternative using Node.js if available
npx serve .

# Open in browser
open http://localhost:8000
```

### Asset Management
```bash
# Optimize images (if needed)
find images/ -name "*.jpg" -o -name "*.png" | xargs -I {} echo "Optimize: {}"

# Check for broken image links
grep -r "src=" *.html | grep -o 'src="[^"]*"'
```

### Code Quality
```bash
# Validate HTML
curl -s -F "uploaded_file=@index.html" -F "output=gnu" https://validator.w3.org/check | grep -E "(Error|Warning)"
curl -s -F "uploaded_file=@features.html" -F "output=gnu" https://validator.w3.org/check | grep -E "(Error|Warning)"

# Check CSS syntax
find css/ -name "*.css" -exec echo "Checking: {}" \;
```

## Technical Notes

### Email Integration
- Uses SMTP.js for contact form functionality
- **Security Issue**: Email credentials are hardcoded in index.html (lines 208-220)
- Contact form sends emails directly from client-side JavaScript

### Responsive Breakpoints
- Mobile: `max-width: 500px`
- Tablet: `max-width: 700px` and `max-width: 768px`
- Desktop: Default styles above 768px

### External Dependencies
- Font Awesome 6.0.0-beta2 (CDN)
- Google Fonts (Roboto) 
- SMTP.js v3 (CDN)

### Browser Compatibility
- Uses modern CSS features (CSS Grid, custom properties, flexbox)
- Includes vendor prefixes for older browser support
- Should work in all modern browsers (IE11+ with some limitations)

## Common Tasks

### Adding New Pages
1. Create new HTML file following the structure of `index.html`
2. Include the navbar structure and footer
3. Link CSS files: utilities.css and style.css
4. Update navigation links in both existing pages

### Modifying Styles
- Global styles: `css/style.css`
- Utility classes: `css/utilities.css`
- Color scheme: Modify CSS custom properties in `:root` selector

### Image Updates
- Maintain aspect ratios for grid layouts
- Use compressed images for web performance
- Update alt text for accessibility

### Security Improvements Needed
- Move email credentials to environment variables or server-side
- Implement proper form validation and sanitization
- Consider using a contact form service instead of client-side email

## Deployment

This is a static site that can be deployed to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- Traditional web hosting

No build process required - files can be served directly.
