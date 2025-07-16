# Adagolodjo Academic Website

Personal academic website for Dr. Yinoussa Adagolodjo, Assistant Professor at the University of Lille, specializing in robotics and augmented reality applications in healthcare.

## 🚀 Features

- **Modern Design**: Clean, responsive design using Bulma CSS framework
- **Academic Focus**: Optimized for academic content (research, publications, teaching)
- **Dark Mode**: Toggle between light and dark themes
- **Search Functionality**: Site-wide search capability
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Cards
- **Mobile Responsive**: Works perfectly on all devices
- **Fast Loading**: Optimized images and assets

## 📁 Project Structure

```
docs/
├── _config.yml          # Site configuration
├── _data/               # Data files (navigation, courses, publications)
├── _includes/           # Reusable HTML components
├── _layouts/            # Page templates
├── _pages/              # Static pages
├── _posts/              # Blog posts and news
├── _projects/           # Research projects
├── _sass/               # Custom styles
├── assets/              # Images, CSS, and other assets
└── index.md             # Homepage
```

## 🛠️ Setup Instructions

### Prerequisites

- Ruby 2.6+ (recommended: Ruby 3.0+)
- Bundler gem
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/adagolodjo/adagolodjo.github.io.git
   cd adagolodjo.github.io/docs
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Run locally**
   ```bash
   bundle exec jekyll serve --livereload
   ```

4. **Visit the site**
   Open http://localhost:4000 in your browser

### Deployment

This site is configured for GitHub Pages. Simply push changes to the main branch and GitHub Pages will automatically build and deploy the site.

## 📝 Content Management

### Adding New Content

- **Blog Posts**: Add files to `_posts/` with YAML front matter
- **Projects**: Add files to `_projects/` for research projects
- **Pages**: Add files to `_pages/` for static content
- **Publications**: Update `_data/publications.yml`
- **Courses**: Update `_data/courses.yml`

### Example Blog Post

```markdown
---
layout: post
title: "New Research Project"
date: 2024-01-15
categories: [research, projects]
---

Your content here...
```

## 🎨 Customization

### Colors and Styling

Edit `_sass/style.scss` to customize:
- Color palette
- Typography
- Layout spacing
- Animations

### Navigation

Update `_data/navigation.yml` to modify the site navigation structure.

### Configuration

Modify `_config.yml` for:
- Site metadata
- URL settings
- Plugin configuration
- Collection settings

## 🔧 Troubleshooting

### Common Issues

1. **Ruby/Bundler Version Conflicts**
   - Use rbenv or rvm to manage Ruby versions
   - Update to Ruby 3.0+ for better compatibility

2. **Build Errors**
   - Clear Jekyll cache: `bundle exec jekyll clean`
   - Update dependencies: `bundle update`

3. **Missing Images**
   - Ensure all referenced images exist in `assets/images/`
   - Check file paths in front matter

### Performance Optimization

- Optimize images before adding to `assets/images/`
- Use WebP format when possible
- Compress CSS and JavaScript files

## 📊 Analytics

The site is configured to work with Google Analytics. Add your tracking ID to `_config.yml`:

```yaml
google_analytics: YOUR_TRACKING_ID
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

For questions or support, please contact:
- Email: yinoussa.adagolodjo@univ-lille.fr
- GitHub: [@adagolodjo](https://github.com/adagolodjo)

---

**Last Updated**: January 2024 