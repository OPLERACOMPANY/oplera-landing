# 📦 Product Page Template - Documentation

## Overview

A fully reusable, type-safe product page template for all Oplera AI products. Build beautiful, consistent product pages in minutes by simply providing JSON data.

---

## ✨ Features

- ✅ **Fully Reusable** - One template, unlimited products
- ✅ **Type-Safe** - Full TypeScript support with interfaces
- ✅ **JSON-Driven** - Content managed via simple JSON files
- ✅ **Responsive** - Mobile-first design
- ✅ **Animated** - Framer Motion transitions
- ✅ **Consistent** - Matches Oplera brand identity
- ✅ **Future-Ready** - Supports bilingual (EN/AR) content structure
- ✅ **SEO-Friendly** - Semantic HTML with proper heading hierarchy

---

## 📁 File Structure

```
src/
├── components/
│   └── ProductPageTemplate.tsx      # Main reusable template component
├── types/
│   └── product.ts                   # TypeScript interfaces
├── data/
│   └── products/
│       ├── omni-support.json        # Example: Omni Agent data
│       ├── order-bot.json           # Future: Order Bot data
│       └── ...                      # More products
└── app/
    └── [product-name]/
        └── page.tsx                 # Product page using template
```

---

## 🚀 Quick Start

### Step 1: Create Product Data (JSON)

Create a new file in `src/data/products/your-product.json`:

```json
{
  "hero": {
    "icon": "🤖",
    "title": "Meet ",
    "titleHighlight": "Your Product",
    "subtitle": "Your compelling product description here.",
    "primaryCTA": {
      "label": "Try Demo",
      "href": "/demo"
    },
    "secondaryCTA": {
      "label": "Book a Call",
      "href": "mailto:hello@oplera.ai"
    }
  },
  "video": { ... },
  "features": { ... },
  "implementation": { ... },
  "finalCTA": { ... }
}
```

### Step 2: Create Product Page

Create `src/app/your-product/page.tsx`:

```tsx
'use client'

import { ProductPageTemplate } from '@/components/ProductPageTemplate'
import productData from '@/data/products/your-product.json'

export default function YourProductPage() {
  return <ProductPageTemplate data={productData as any} />
}
```

### Step 3: Done! 🎉

Navigate to `/your-product` and see your new product page!

---

## 📝 Data Structure Reference

### Hero Section

```typescript
{
  icon: string              // Emoji or icon
  title: string            // Main title text
  titleHighlight?: string  // Highlighted portion (cyan color)
  subtitle: string         // Description
  primaryCTA: {
    label: string
    href: string
  }
  secondaryCTA: {
    label: string
    href: string
  }
}
```

### Video Section

```typescript
{
  sectionTitle: string
  sectionTitleHighlight?: string
  description: string
  videoSrc: string          // Cloudflare Stream / Vimeo / Mux URL
  placeholderText?: string  // Shown until video is ready
  primaryCTA: { ... }
  secondaryCTA: { ... }
}
```

### Features Section

```typescript
{
  sectionTitle: string
  sectionTitleHighlight?: string
  items: Array<{
    icon: string           // Emoji
    title: string          // Feature name
    description: string    // Short description (cyan)
    benefit: string        // User benefit (gray)
  }>
}
```

### Implementation Options

```typescript
{
  sectionTitle: string
  sectionTitleHighlight?: string
  subtitle?: string
  options: Array<{
    title: string
    subtitle?: string
    price: string
    features: string[]     // Bullet points
    ctaLabel: string
    ctaHref: string
    popular?: boolean      // Show "POPULAR" badge
    isEnterprise?: boolean // Use outline button
  }>
}
```

### Final CTA

```typescript
{
  title: string
  titleHighlight?: string
  subtitle: string
  primaryCTA: { ... }
  secondaryCTA: { ... }
}
```

---

## 🎨 Styling & Customization

### Brand Colors (Automatic)

- **Primary:** `#00D1D1` (oplera-cyan)
- **Secondary:** `#7A5AF8` (oplera-violet)
- **Background:** `#0A1B3D` (oplera-navy)
- **Text:** White & Gray shades

### Animations (Built-in)

- ✅ Fade-up on scroll (Framer Motion)
- ✅ Hover effects (scale, glow, shadow)
- ✅ Floating particles (performance-optimized)
- ✅ Icon animations (pulse, float)

### Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

---

## 🌍 Future: Bilingual Support

The template is ready for bilingual EN/AR content:

```typescript
// Future structure
{
  "en": { ...englishContent },
  "ar": { ...arabicContent }
}
```

When language switcher is re-enabled, simply:
1. Update JSON to include both languages
2. Pass `locale` prop to template
3. Template auto-switches content

---

## 📊 Example: Creating "Order Bot" Page

### 1. Create JSON

`src/data/products/order-bot.json`:

```json
{
  "hero": {
    "icon": "🛍️",
    "title": "Automate Orders with ",
    "titleHighlight": "Order Bot",
    "subtitle": "Handles Telegram and website orders automatically. No manual processing needed.",
    "primaryCTA": {
      "label": "See Demo",
      "href": "/demo"
    },
    "secondaryCTA": {
      "label": "Get Started",
      "href": "mailto:hello@oplera.ai"
    }
  },
  // ... rest of the data
}
```

### 2. Create Page

`src/app/orderbot/page.tsx`:

```tsx
'use client'

import { ProductPageTemplate } from '@/components/ProductPageTemplate'
import productData from '@/data/products/order-bot.json'

export default function OrderBotPage() {
  return <ProductPageTemplate data={productData as any} />
}
```

### 3. Update Navigation

Add to Services Section:

```tsx
{
  id: '2',
  icon: '🛍️',
  title: 'Order Bot',
  description: 'Automates Telegram & website orders',
  link: '/orderbot',
  available: true  // Enable the link
}
```

Done! Your new product page is live. ✅

---

## ✅ Benefits

| Before | After |
|--------|-------|
| 385 lines of code per product | 8 lines of code |
| Duplicate styling logic | Centralized template |
| Hard to maintain consistency | Automatic consistency |
| Time to create: ~2 hours | Time to create: ~15 minutes |
| Requires developer for changes | Content team can update JSON |

---

## 🛠️ Maintenance

### Adding New Sections

To add a new section type (e.g., "Testimonials"):

1. Update `src/types/product.ts`
2. Update `src/components/ProductPageTemplate.tsx`
3. Add to JSON structure
4. Done!

### Modifying Styles

All styling is centralized in `ProductPageTemplate.tsx`. Changes apply to all product pages automatically.

---

## 📞 Support

Questions? Contact the dev team or check:
- `src/types/product.ts` - Type definitions
- `src/data/products/omni-support.json` - Complete example
- `src/components/ProductPageTemplate.tsx` - Template source

---

**Created by:** Oplera Development Team  
**Last Updated:** 2025  
**Version:** 1.0

