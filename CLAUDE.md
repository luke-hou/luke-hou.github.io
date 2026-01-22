# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Luke Hou's personal portfolio website (luke.ninja) - a static HTML site showcasing AI projects, automation workflows, tutorials, blog posts, and podcasts. The site features a terminal-style design with multiple color themes and is published via GitHub Pages.

**Key Characteristics:**
- Pure static HTML/CSS/JavaScript (no build tools or package.json)
- Content is in Traditional Chinese (zh-TW)
- Terminal/cyberpunk aesthetic with multiple color themes
- Organized into distinct sections: home, portfolio, tutorials, blog, podcast

## Site Architecture

### Page Structure

The site follows a flat structure with top-level HTML pages and organized subdirectories:

```
index.html          - Homepage with hero section, skills, featured projects
portfolio.html      - All projects with filtering (Full Product, Automation, AI-Powered, LINE Bot)
tutorials.html      - Tutorial series (n8n RAG, Gemini CLI for PMs)
blog.html          - Personal blog posts (travel, tech, life)
podcast.html       - Podcast content
404.html           - Custom error page
```

### Content Organization

- **`/projects/`** - Individual project pages
  - Each project has TWO versions: technical (`*-business.html`) and business (`*.html`)
  - Example: `prd-ai-generation.html` (tech) + `prd-ai-generation-business.html` (business)
  - Featured projects: LineBot MVP, vibeTask, PRD AI Generation, QA Report Automation

- **`/n8n_tutorials/`** - n8n workflow tutorials (10 chapters)
  - Covers Supabase/Qdrant vector databases, RAG implementation
  - Files: `n8n-tutorial-1.html` through `n8n-tutorial-10.html`

- **`/tutorials/`** - Gemini CLI tutorial series for Product Managers
  - Main series: 5 chapters + special Git guide + podcast episode
  - Files: `gemini-cli-tutorial-1.html` through `gemini-cli-tutorial-5.html`
  - Special: `gemini-cli-special-git-for-pm.html`

- **`/blog/`** - Blog articles in HTML format
  - Topics: Travel (Kenya Safari), tech (Git, NIS, RAG), martial arts, Go-Live guides

- **`/css/`** - Multiple terminal-style themes
  - `terminal-style-cyan.css` - Homepage (Professional Navy + Gold)
  - `terminal-style-green.css` - Portfolio page
  - `terminal-style-red.css` - Blog page
  - `modern-style.css`, `style.css` - Alternative styles

- **`/js/`** - Minimal JavaScript
  - `main.js` - General utilities
  - `sniper-scope.js` - Special effects

- **`/images/`** - All image assets organized by project

### Key Structural Files

- **`SITE_STRUCTURE.md`** - Complete site map in Chinese, lists all pages and their hierarchy
- **`sitemap.xml`** - XML sitemap for SEO (must update when adding/removing pages)
- **`robots.txt`** - Search engine crawler configuration
- **`GEMINI.md`** - Instructions for Gemini AI (update sitemap.txt on changes)
- **`_navbar.html`** - Reusable navigation component (not currently used in live pages)

## Design System

### Terminal Theme Colors

Each page uses a different color scheme via CSS variables:

- **Homepage** (`terminal-style-cyan.css`): Professional Navy Blue (#58a6ff) + Gold (#d29922)
- **Portfolio** (`terminal-style-green.css`): Green theme
- **Blog** (`terminal-style-red.css`): Red theme

All themes use:
- Dark background: `#0d1117` (--terminal-bg)
- Monospace font: 'Fira Code'
- Terminal-style components: cards with window controls, prompt indicators
- Consistent spacing and border styles

### Component Patterns

**Terminal Card:**
```html
<div class="terminal-card">
  <div class="terminal-card-header">
    <div class="window-controls">
      <span class="close"></span>
      <span class="minimize"></span>
      <span class="maximize"></span>
    </div>
    <span class="file-path">~/path/to/file</span>
  </div>
  <div class="terminal-card-body">
    <!-- Content -->
  </div>
</div>
```

**Terminal Prompt:**
```html
<p class="terminal-prompt">cat ~/path/file.md</p>
```

**Tags for Projects:**
```html
<div class="terminal-tags">
  <span class="terminal-tag">Python</span>
  <span class="terminal-tag">n8n</span>
</div>
```

**Impact Labels:**
```html
<span class="terminal-impact">🚀 PRD 時間 -80% - Multi-Agent</span>
```

## Common Development Tasks

### Adding a New Project

1. Create project page(s) in `/projects/`:
   - Technical version: `project-name.html`
   - Business version: `project-name-business.html`

2. Add project images to `/images/` (create subdirectory if needed)

3. Update main listing in `portfolio.html`:
   - Add card to portfolio grid with appropriate `data-categories` attribute
   - Categories: `full-product`, `automation`, `ai-powered`, `line-bot`

4. Consider adding to homepage `index.html` featured projects section

5. **Update `sitemap.xml`** with new URLs and lastmod dates

6. **Update `SITE_STRUCTURE.md`** with new project entries

### Adding a New Blog Post

1. Create HTML file in `/blog/` directory

2. Add card to `blog.html` in the main grid section

3. Update `sitemap.xml` and `SITE_STRUCTURE.md`

### Adding a New Tutorial

1. Create HTML file in appropriate directory:
   - n8n tutorials: `/n8n_tutorials/n8n-tutorial-X.html`
   - Gemini tutorials: `/tutorials/gemini-cli-tutorial-X.html`

2. Update `tutorials.html` with new entry in appropriate section

3. Update `sitemap.xml` and `SITE_STRUCTURE.md`

### Modifying Styles

- Edit the appropriate theme CSS file in `/css/`
- Each page imports its theme in the `<head>` section
- CSS variables are defined at `:root` level
- Maintain consistency across themes for shared components

## SEO and Metadata

All HTML pages include:
- Meta charset, viewport, description, keywords
- Canonical URL
- Open Graph tags (Facebook)
- Twitter Card tags
- Structured data (Schema.org) for homepage
- Google Analytics (gtag.js with ID: G-0V2L1DQVPY)
- Favicon reference: `/images/favicon.jpg`

**Important:** When adding/removing pages, update:
1. `sitemap.xml` - Add URL entry with lastmod, changefreq, priority
2. `SITE_STRUCTURE.md` - Document in appropriate section
3. Page meta tags - Ensure proper title, description, og:image

## Navigation Structure

Standard navbar appears on all pages:
```
$ luke@ninja ~
  ~/home      -> index.html
  ~/tutorials -> tutorials.html
  ~/podcast   -> podcast.html
  ~/projects  -> portfolio.html
  ~/blog      -> blog.html
```

Active page marked with `nav-link active` class.

## Content Guidelines

- All content is in **Traditional Chinese (zh-TW)**
- Use terminal/coding metaphors consistently (cat, ls, git log, etc.)
- Maintain professional tone while being approachable
- Projects emphasize business impact and technical implementation
- Include both "商業視角" (business view) and "技術視角" (technical view) for major projects

## Deployment

- Hosted on **GitHub Pages** from this repository
- Domain: `luke.ninja` (configured via CNAME file)
- No build process - direct HTML/CSS/JS serving
- Git workflow: commit changes and push to `main` branch to deploy

## Project Categories & Taxonomy

Projects are tagged with multiple categories for filtering:
- **Full Product**: Complete applications (vibeTask, LineBot MVP)
- **Automation**: n8n workflows, automated reports
- **AI-Powered**: Projects using AI/LLM features
- **LINE Bot**: LINE messaging integration projects

## Technical Stack References

Technologies commonly featured in projects:
- **AI/LLM**: Gemini, Multi-Agent AI, RAG systems
- **Automation**: n8n workflows
- **Backend**: Python, FastAPI
- **Frontend**: PyQt (desktop apps), vanilla HTML/CSS/JS (web)
- **Databases**: Supabase, Qdrant (vector), SQLite
- **Integrations**: Jira, Confluence, Gmail, Telegram, LINE Bot API

## Bootstrap & Dependencies

Uses Bootstrap 5.3.0 and Font Awesome 6.4.0 from CDN:
- Bootstrap CSS/JS bundle
- Font Awesome icons
- Typed.js for typing animations (homepage)
- Google Fonts: Fira Code (monospace)

All dependencies loaded via CDN - no local npm packages.
