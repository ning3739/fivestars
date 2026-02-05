# Five Stars Cleaning

Professional cleaning services website for Queenstown, New Zealand.

## 🌟 Features

- **Modern Design** - Clean, professional UI built with Next.js 16 and Tailwind CSS 4
- **Responsive** - Fully responsive design for all devices
- **SEO Optimized** - Complete SEO setup with meta tags, Open Graph, and structured data
- **Fast Performance** - Optimized images, lazy loading, and Turbopack
- **Accessible** - WCAG compliant with proper ARIA labels
- **Animations** - Smooth scroll animations with Motion
- **Type-Safe** - Full TypeScript support with strict mode

## 🛠 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Animations**: [Motion](https://motion.dev/) (Framer Motion)
- **Icons**: [Google Material Symbols](https://fonts.google.com/icons)
- **Forms**: [Web3Forms](https://web3forms.com/)
- **Captcha**: [hCaptcha](https://www.hcaptcha.com/)

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── services/          # Services pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── icons/            # Icon components
│   ├── layout/           # Layout components (Navbar, Footer)
│   ├── sections/         # Page sections
│   └── ui/               # Reusable UI components
├── lib/                  # Utility functions
│   ├── constants.ts      # App constants and data
│   ├── utils.ts          # Helper functions
│   └── validation.ts     # Form validation
├── types/                # TypeScript type definitions
├── public/               # Static assets
└── next.config.ts        # Next.js configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ning3739/fivestars.git

# Navigate to project directory
cd fivestars

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Update .env.local with your keys
```

### Development

```bash
# Run development server with Turbopack
npm run dev

# Open http://localhost:3000
```

### Production

```bash
# Build for production
npm run build

# Start production server
npm start

# Type check
npm run type-check

# Lint code
npm run lint
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# Web3Forms Access Key
NEXT_PUBLIC_WEB3FORMS_KEY=your_access_key_here

# hCaptcha Site Key
NEXT_PUBLIC_HCAPTCHA_SITEKEY=50b2fe65-b00b-4b9e-ad62-3ba471098be2

# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 📄 Pages

- **Home** (`/`) - Hero, services overview, testimonials, stats, contact form
- **Services** (`/services`) - Detailed service pages with process steps and FAQs
- **About** (`/about`) - Company story, values, team information
- **Contact** (`/contact`) - Contact form, location map, service areas, FAQs

## 🎨 Design System

The project uses a consistent design system with:

- **Colors**: Primary (#1F3A5F), Gold (#F5C542), Background (#FFFFFF/#F7F9FC)
- **Typography**: Inter (body), Manrope (headings)
- **Spacing**: 4px base unit (Tailwind default)
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)

## 📞 Contact

- **Phone**: +64 22 503 0102
- **Email**: info@fivestarscleaning.co.nz
- **Address**: 38 Lochy Road, Fernhill, Queenstown
- **Location**: Queenstown, New Zealand

## 📝 License

© 2025 Five Stars Cleaning. All rights reserved.
