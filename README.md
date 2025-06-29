# Mariia Riabushenko - Product Manager Portfolio

A modern, responsive portfolio website showcasing product management skills, case studies, and professional experience.

## 🚀 Features

- **Modern Design**: Clean, professional layout with pearl background and accent colors
- **Responsive**: Mobile-first design that works on all devices
- **Accessible**: WCAG compliant with keyboard navigation and screen reader support
- **Fast Loading**: Optimized for performance with minimal dependencies
- **Print Friendly**: Optimized print styles for professional printing

## 📁 Project Structure

```
personal-site/
├── index.html              # Main HTML file
├── css/
│   ├── style.css          # Main stylesheet with design system
│   └── responsive.css     # Mobile-first responsive styles
├── js/
│   └── main.js           # JavaScript functionality
├── images/
│   ├── profile-photo.jpg  # Profile image (add your photo)
│   ├── banner-bg.jpg      # Banner background (optional)
│   └── icons/            # SVG icons for navigation
├── assets/
│   └── favicon.ico       # Site favicon
├── PORTFOLIO_OVERVIEW.md # Technical overview document
└── README.md             # This file
```

## 🛠️ Technology Stack

- **HTML5**: Semantic markup with modern elements
- **CSS3**: Flexbox/Grid layouts, custom properties, smooth animations
- **Vanilla JavaScript**: Minimal interactivity, no frameworks
- **Responsive Design**: Mobile-first approach with breakpoints

## 🎨 Design System

### Colors
- **Primary Background**: Pearl (#F5F5F0)
- **Text**: Dark Gray (#333333)
- **Accent Green**: (#4CAF50)
- **Accent Brown**: (#8D6E63)
- **White**: (#FFFFFF)

### Typography
- **Font Family**: System fonts (San Francisco, Segoe UI, etc.)
- **Base Size**: 16px
- **Scale**: Modular scale for consistent sizing

### Spacing
- **Container**: Max-width 1200px
- **Grid Gap**: 24px between sections
- **Card Padding**: 20px internal spacing

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Basic knowledge of HTML/CSS (for customization)

### Installation

1. **Clone or Download** the project files to your local machine

2. **Add Your Content**:
   - Replace `images/profile-photo.jpg` with your professional photo
   - Update contact information in `index.html`
   - Customize case studies and skills
   - Add your own content to the goals backlog

3. **Customize Colors** (Optional):
   - Edit CSS custom properties in `css/style.css`
   - Modify the `:root` section to change colors

4. **Test Locally**:
   - Open `index.html` in your web browser
   - Test on different screen sizes
   - Verify all links work correctly

### Deployment

#### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload your files
3. Enable GitHub Pages in repository settings
4. Your site will be available at `https://username.github.io/repository-name`

#### Option 2: Netlify (Free)
1. Sign up for Netlify
2. Drag and drop your project folder
3. Your site will be deployed instantly
4. Get a custom domain (optional)

#### Option 3: Vercel (Free)
1. Sign up for Vercel
2. Connect your GitHub repository
3. Deploy automatically on every push

## 📝 Customization Guide

### Adding Your Photo
1. Replace `images/profile-photo.jpg` with your professional photo
2. Recommended size: 300x300px (minimum 150x150px)
3. Format: JPG, PNG, or WebP
4. Keep file size under 100KB for fast loading

### Updating Contact Information
Edit the contact section in `index.html`:
```html
<div class="contact-info">
    <a href="mailto:your-email@example.com" class="contact-link email">your-email@example.com</a>
    <a href="https://linkedin.com/in/your-profile" class="contact-link linkedin" target="_blank" rel="noopener">LinkedIn</a>
</div>
```

### Customizing Case Studies
Replace the placeholder case studies in the `case-studies-grid` section:
```html
<article class="case-study-card">
    <h3>Your Project Title</h3>
    <p class="case-summary">Brief description of the project</p>
    <ul class="case-points">
        <li>Key achievement 1</li>
        <li>Key achievement 2</li>
        <li>Key achievement 3</li>
    </ul>
</article>
```

### Updating Skills and Tools
Modify the skills sections in `index.html`:
- **Soft Skills**: Update the `skills-list` in the sidebar
- **Technologies**: Update the `tech-list` with your tools
- **Core Skills**: Modify the `skills-grid` tags

### Changing Colors
Edit the CSS custom properties in `css/style.css`:
```css
:root {
    --color-primary: #F5F5F0; /* Change background color */
    --color-accent-green: #4CAF50; /* Change green accent */
    --color-accent-brown: #8D6E63; /* Change brown accent */
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (single column layout)
- **Tablet**: 768px - 1023px (two column case studies)
- **Desktop**: 1024px+ (full layout with sidebar)

## ♿ Accessibility Features

- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: Semantic HTML structure
- **Focus Indicators**: Clear focus states
- **Skip Links**: Skip to main content
- **Alt Text**: Descriptive image alt text
- **Color Contrast**: WCAG AA compliant

## 🎯 Performance Optimizations

- **Minimal JavaScript**: Lightweight vanilla JS
- **CSS Optimization**: Efficient selectors and properties
- **Image Optimization**: Recommended image formats and sizes
- **Lazy Loading**: Intersection Observer for animations
- **Print Styles**: Optimized for printing

## 🔧 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile
- **Fallbacks**: Graceful degradation for older browsers

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue.

## 📞 Support

For questions or support:
- Check the [PORTFOLIO_OVERVIEW.md](PORTFOLIO_OVERVIEW.md) for technical details
- Review the customization guide above
- Open an issue for bugs or feature requests

## 🎉 Next Steps

After setting up your portfolio:

1. **Add Real Content**: Replace all placeholder text with your actual experience
2. **Optimize Images**: Compress images for faster loading
3. **Add Analytics**: Consider adding Google Analytics or similar
4. **SEO Optimization**: Add meta tags and structured data
5. **Domain Setup**: Purchase a custom domain for professional branding
6. **Regular Updates**: Keep your portfolio current with new projects and skills

---

**Built with ❤️ for product managers who want to showcase their skills effectively.** 