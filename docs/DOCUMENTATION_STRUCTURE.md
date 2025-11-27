# Documentation Structure

This document explains the organization of all markdown files in the project.

## 📁 File Organization

### Root Directory
- **README.md** - Main project README with quick start and links to documentation

### `/docs/` - All Project Documentation
All project documentation, guides, and reference materials are organized here:

#### Getting Started Guides
- `START_HERE.md` - Complete setup guide for new developers (includes Node.js installation)
- `QUICK_START.md` - Quick start instructions for experienced developers

#### Development & Deployment
- `LOCAL_TESTING.md` - Local development and testing guide
- `DEPLOYMENT.md` - Deployment instructions and procedures (includes Cloudflare Pages setup)

#### Project Information
- `SECURITY.md` - Security policies and best practices
- `README.md` - Documentation index and overview

#### `/docs/resources/` - Resource Source Files
Source markdown files for downloadable PDF resources:
- `what-is-aeo.md` - Source for "What is AEO?" PDF
- `what-is-geo.md` - Source for "What is GEO?" PDF
- `aeo-best-practices.md` - Source for AEO best practices PDF
- `aeo-optimization-checklist.md` - Source for AEO checklist PDF
- `geo-best-practices.md` - Source for GEO best practices PDF
- `geo-optimization-guide.md` - Source for GEO guide PDF
- `seo-aeo-geo-comparison-guide.md` - Source for comparison guide PDF

**Note:** PDFs generated from these files are stored in `public/resources/` for download.

### `/src/content/blog/` - Blog Content
Blog post markdown files remain here as they are part of the Astro content collection system. These are not documentation but actual published content.

### `/linkedin-posts/` - LinkedIn Content
LinkedIn post content in text format. These are source materials for social media content.

## 🔄 Migration Notes

All documentation markdown files were moved from the root directory to `/docs/` on November 27, 2025 to:
- Clean up the root directory
- Organize documentation in a dedicated folder
- Improve project structure and maintainability

## 📝 Best Practices

- **Documentation**: Add new documentation files to `/docs/`
- **Blog Posts**: Add new blog posts to `/src/content/blog/`
- **Resources**: Source markdown files go in `/docs/resources/`, PDFs in `/public/resources/`
- **LinkedIn Posts**: Store in `/linkedin-posts/` for reference

