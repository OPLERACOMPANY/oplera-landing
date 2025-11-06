# OPLERA Landing Page

A modern, responsive landing page for OPLERA - an AI Automation Agency, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with glassmorphism effects
- **Smooth Animations**: Framer Motion for elegant transitions and micro-interactions
- **Form Validation**: React Hook Form with Zod schema validation
- **Performance Optimized**: Lazy loading, optimized animations, and SEO-friendly
- **Accessibility**: ARIA labels, keyboard navigation, and semantic HTML
- **Modular Architecture**: Clean component structure with separation of concerns

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── layout/           # Layout components
│   │   ├── Header.tsx    # Navigation header
│   │   └── Footer.tsx    # Site footer
│   ├── sections/         # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── PricingSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/               # UI components
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── Textarea.tsx
│       └── Select.tsx
├── hooks/                # Custom React hooks
│   ├── useMobileMenu.ts
│   └── useBillingToggle.ts
├── lib/                  # Utilities and data
│   ├── data.ts          # Static data
│   ├── utils.ts         # Utility functions
│   └── validations.ts   # Zod schemas
└── types/               # TypeScript types
    └── index.ts
```

## 🎨 Design System

### Colors
- **Primary Navy**: `#0A1B3D`
- **Electric Cyan**: `#00D1D1`
- **Soft Violet**: `#7A5AF8`
- **Dark Background**: `#051122`

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900

### Effects
- **Glassmorphism**: Translucent cards with backdrop blur
- **Gradient Mesh**: Animated radial gradients
- **Neon Borders**: Glowing cyan borders with hover effects
- **Shimmer Text**: Animated gradient text effects

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd oplera-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📱 Responsive Design

The landing page is fully responsive and optimized for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px - 1440px
- **Large Desktop**: 1440px+

## ⚡ Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting with Next.js
- **Lazy Loading**: Intersection Observer for animations
- **SEO Optimization**: Meta tags, OpenGraph, structured data
- **Accessibility**: WCAG 2.1 AA compliance

## 🎭 Animations

- **Framer Motion**: Smooth page transitions and micro-interactions
- **Staggered Animations**: Sequential element reveals
- **Hover Effects**: Interactive card lifts and glows
- **Scroll Animations**: Elements animate on scroll
- **Loading States**: Form submission feedback

## 📝 Form Handling

- **Validation**: Real-time validation with Zod schemas
- **Error Handling**: User-friendly error messages
- **Loading States**: Visual feedback during submission
- **Accessibility**: Proper labels and ARIA attributes

## 🔧 Customization

### Adding New Sections
1. Create component in `src/components/sections/`
2. Add to `src/app/page.tsx`
3. Update navigation in `src/lib/data.ts`

### Modifying Colors
Update the color palette in `tailwind.config.js` and `src/app/globals.css`

### Adding Animations
Use Framer Motion variants in components for consistent animations

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📞 Support

For support, email support@oplera.com or create an issue in the repository.
=======
# oplera-landing
#Oplera Official Website built with Next.js and TailwindCSS
