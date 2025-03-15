# Personal Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. This template includes sections for your introduction, experience, projects, and contact information.

## Features

- 📱 Fully responsive design
- 🎨 Modern and clean UI
- 🌊 Smooth scroll navigation
- 📝 Contact form
- ✨ CSS animations
- 🍔 Mobile-friendly navigation
- 🎯 Intersection Observer for scroll animations

## Customization

### 1. Personal Information
Edit the `index.html` file to add your:
- Name (replace "Your Name")
- Profile picture (replace the placeholder image)
- About section content
- Skills
- Experience
- Projects
- Contact information

### 2. Styling
The `styles.css` file contains CSS variables at the top that you can modify to change the color scheme:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --text-color: #1f2937;
    --light-text: #6b7280;
    --background: #ffffff;
    --section-bg: #f3f4f6;
}
```

### 3. Projects
Add your projects in the projects section of `index.html`. Each project should follow this structure:
```html
<div class="project-card">
    <div class="project-image">
        <img src="path-to-project-image" alt="Project Name">
    </div>
    <div class="project-info">
        <h3>Project Name</h3>
        <p>Project description goes here.</p>
        <div class="project-links">
            <a href="#" class="btn small">View Project</a>
            <a href="#" class="btn small secondary">Source Code</a>
        </div>
    </div>
</div>
```

### 4. Contact Form
The contact form currently logs the form data to the console. To make it functional:
1. Set up a backend server to handle form submissions
2. Update the form submission code in `script.js`
3. Add your server endpoint to the form action

## Setup

1. Clone or download this repository
2. Replace the placeholder content with your information
3. Add your images to the project
4. Deploy to your preferred hosting service

## Browser Support

The website is compatible with all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## License

This project is open source and available under the MIT License.

## Credits

- Font Awesome for icons
- Inter font family
- Placeholder images from placeholder.com 