# Nalanda Learning - Next.js Website

A modern, responsive website for Nalanda Learning built with Next.js 15, React 19, and a comprehensive design system.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with App Router, React 19
- **Responsive Design**: Mobile-first approach with Bootstrap grid
- **SEO Optimized**: Dynamic metadata, sitemap, and structured data
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation
- **Performance**: Optimized images, lazy loading, and efficient bundling
- **Content Management**: Structured data files for easy content updates

## 📁 Project Structure

```
├── app/                          # Next.js App Router pages
│   ├── blog/                     # Blog listing and single pages
│   │   ├── [slug]/page.js       # Dynamic blog post pages
│   │   └── page.js              # Blog listing page
│   ├── career/page.js           # Career opportunities page
│   ├── directors/page.js        # Leadership team page
│   ├── mepsc/page.js           # MEPSC services page
│   ├── b2b-saas/page.js        # B2B SAAS platform page
│   ├── terms/page.js           # Terms & Conditions
│   ├── privacy/page.js         # Privacy Policy
│   ├── layout.js               # Root layout with header/footer
│   ├── page.js                 # Homepage
│   └── globals.css             # Global styles
├── components/                  # Reusable React components
│   ├── Header.js               # Navigation header
│   └── Footer.js               # Site footer
├── lib/                        # Data and utility files
│   ├── blogData.js             # Blog posts data
│   ├── teamData.js             # Team members data
│   └── jobsData.js             # Job openings data
└── public/                     # Static assets
    ├── images/                 # Image assets
    ├── css/                    # External stylesheets
    └── js/                     # JavaScript libraries
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.18+ or 20+
- npm 9+ (recommended)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd nalanda-next
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📝 Content Management

### Adding New Blog Posts

Edit `lib/blogData.js` and add a new post object:

```javascript
{
  id: 10,
  title: "Your Blog Post Title",
  slug: "your-blog-post-slug",
  excerpt: "Brief description of the post...",
  content: `<p>Full HTML content...</p>`,
  image: "/images/blog/your-image.jpg",
  date: "2024-03-20",
  author: {
    name: "Author Name",
    title: "Author Title",
    avatar: "/images/team/author.jpg"
  },
  category: "Category Name",
  tags: ["tag1", "tag2", "tag3"],
  readTime: "5 min read"
}
```

### Adding Team Members

Edit `lib/teamData.js` and add a new member:

```javascript
{
  id: 13,
  name: "New Team Member",
  designation: "Job Title",
  image: "/images/team/member.jpg",
  bio: "Brief bio description...",
  linkedin: "https://linkedin.com/in/username",
  twitter: "https://twitter.com/username",
  email: "email@nalandalearning.in"
}
```

### Adding Job Openings

Edit `lib/jobsData.js` and add a new position:

```javascript
{
  id: 9,
  title: "Job Title",
  type: "Full-time",
  location: "Location",
  remote: true,
  department: "Department",
  summary: "Job description...",
  requirements: ["Requirement 1", "Requirement 2"],
  responsibilities: ["Responsibility 1", "Responsibility 2"]
}
```

## 🎨 Styling

The project uses a custom CSS framework with:

- **CSS Custom Properties**: For theming and consistency
- **Bootstrap Grid**: For responsive layouts
- **Component-based Styles**: Modular CSS for each component
- **Mobile-first Design**: Responsive breakpoints
- **Dark Mode Support**: Built-in theme switching capability

### Key CSS Classes

- `.btn-one`: Primary button style
- `.btn-outline`: Outline button style
- `.section-header`: Standard section heading
- `.wow`: Animation trigger class
- `.bg-sub`: Secondary background color

## 🔧 Available Scripts

- `npm run dev`: Start development server with Turbopack
- `npm run build`: Create production build
- `npm run start`: Start production server
- `npm run lint`: Run ESLint checks

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- Alt text for images

## 🔍 SEO Features

- Dynamic metadata generation
- Open Graph tags
- Twitter Card support
- Structured data
- XML sitemap
- Optimized URLs

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Deploy automatically on push to main branch

### Manual Deployment

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm run start
   ```

## 📄 License

This is a private project. All rights reserved.

## 🤝 Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📞 Support

For technical support or questions:

- Email: tech@nalandalearning.in
- Phone: +91 33 4060 1234

---

Built with ❤️ by the Nalanda Learning team
