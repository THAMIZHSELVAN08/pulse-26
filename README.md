# PULSE'26 - National Level Technical Symposium Website

A modern, responsive website for PULSE'26, a National Level Technical Symposium organized by the Department of Electrical and Electronics Engineering, Sri Venkateswara College of Engineering.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript

## ✨ Features

- 🎨 Modern dark tech theme with neon blue/cyan accents
- 📱 Fully responsive (mobile + desktop)
- 🎭 Smooth animations with Framer Motion
- 🪟 Glassmorphism UI cards
- 🔗 Dynamic routing for event pages
- 📋 Registration form with validation
- 🎯 SEO-friendly structure

## 📁 Project Structure

```
├── app/
│   ├── events/
│   │   ├── [slug]/
│   │   │   └── page.tsx          # Dynamic event detail pages
│   │   └── page.tsx              # Events listing page
│   ├── register/
│   │   └── page.tsx              # Registration page
│   ├── contact/
│   │   └── page.tsx              # Contact page
│   ├── layout.tsx                # Root layout with navbar
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── components/
│   ├── Navbar.tsx                # Navigation bar component
│   └── BackToHome.tsx            # Back to home button
├── data/
│   └── events.json               # Events data
└── public/
    └── images/                   # Place images here
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd AEEE
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Adding Event Images

To add event poster images:

1. Create a `public/images/` directory
2. Add images with these names:
   - `poster.jpg` - Main symposium poster (for home page)
   - `uno-hunt.jpg` - UNO Hunt event poster
   - `electric-wordza.jpg` - Electric Wordza event poster
   - `paper-presentation.jpg` - Paper Presentation event poster
   - `project-presentation.jpg` - Project Presentation event poster
   - `sail-the-circuit.jpg` - Sail The Circuit event poster
   - `battle-ship.jpg` - Battle Ship event poster

3. Update the image paths in `data/events.json` if using different names

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:
- `neon-blue`: Primary neon blue color
- `neon-cyan`: Secondary cyan color
- `neon-purple`: Accent purple color
- `dark-bg`: Background color
- `dark-card`: Card background color

### Events Data

Edit `data/events.json` to update event information, add new events, or modify existing ones.

## 📱 Pages

- **Home** (`/`) - Hero section, poster, about section
- **Events** (`/events`) - Grid of all events
- **Event Details** (`/events/[slug]`) - Individual event pages
- **Register** (`/register`) - Registration form
- **Contact** (`/contact`) - Contact information and coordinators

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

Build the project:
```bash
npm run build
npm start
```

## 📄 License

This project is created for PULSE'26 symposium.

## 👥 Credits

- **College:** Sri Venkateswara College of Engineering (SVCE)
- **Department:** Electrical and Electronics Engineering
- **Association:** AEEE (Association of Electrical & Electronics Engineers)
- **Date:** 19 February 2026

---

Built with ❤️ for PULSE'26
