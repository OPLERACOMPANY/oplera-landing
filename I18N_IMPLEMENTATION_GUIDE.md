# Oplera Website - Arabic (RTL) Localization Implementation Guide

## ✅ Phase 1: COMPLETED - Infrastructure Setup

### 1. Packages Installed ✓
```bash
npm install next-intl tailwindcss-rtl
```

### 2. Translation Files Created ✓
- ✅ `messages/en/common.json` - Common translations (navigation, footer, CTAs)
- ✅ `messages/ar/common.json` - Arabic common translations
- ✅ `messages/en/home.json` - Home page content
- ✅ `messages/ar/home.json` - Arabic home page content  
- ✅ `messages/en/demo.json` - Demo form translations
- ✅ `messages/ar/demo.json` - Arabic demo form translations

### 3. Configuration Files Created ✓
- ✅ `i18n.ts` - Internationalization configuration
- ✅ `middleware.ts` - Locale routing middleware
- ✅ Updated `next.config.js` - Added next-intl plugin
- ✅ Updated `tailwind.config.js` - Added Cairo font + RTL plugin

### 4. Components Created ✓
- ✅ `src/components/LanguageSwitcher.tsx` - Language toggle component

---

## 📋 Phase 2: TODO - App Structure Refactoring

### Required Directory Structure Changes

The app needs to be restructured to support locale-based routing:

**Current structure:**
```
src/app/
├── layout.tsx
├── page.tsx
├── demo/
│   └── page.tsx
├── omni-support/
│   └── page.tsx
└── ...
```

**Required structure:**
```
src/app/
├── layout.tsx (root layout - minimal)
└── [locale]/
    ├── layout.tsx (locale-aware layout with fonts/direction)
    ├── page.tsx
    ├── demo/
    │   └── page.tsx
    ├── omni-support/
    │   └── page.tsx
    └── ...
```

### Steps to Complete:

1. **Create Root Layout** (`src/app/layout.tsx`)
   - Minimal wrapper
   - No fonts or styles (moved to locale layout)

2. **Create Locale Directory** (`src/app/[locale]/`)
   - Move all current pages into this directory
   - Create new locale-aware layout

3. **Update All Components**
   - Replace hardcoded strings with `useTranslations()` hook
   - Add RTL-aware styling classes
   - Update Header to include LanguageSwitcher

4. **Add Arabic Fonts**
   - Import Cairo font from Google Fonts
   - Apply conditionally based on locale

5. **Test RTL Layout**
   - Verify all animations work in RTL
   - Check card layouts flip correctly
   - Validate form alignment

---

## 🎨 RTL Styling Guidelines

### Tailwind RTL Classes
With `tailwindcss-rtl` plugin, these classes auto-flip in RTL:

- `ml-*` / `mr-*` → Auto-swaps
- `pl-*` / `pr-*` → Auto-swaps  
- `left-*` / `right-*` → Auto-swaps
- `flex-row` → Auto-reverses
- `text-left` / `text-right` → Auto-swaps

### Manual RTL Handling (when needed)
```tsx
<div className={`${locale === 'ar' ? 'rtl' : 'ltr'}`}>
```

### Font Application
```tsx
className={locale === 'ar' ? 'font-cairo' : 'font-inter'}
```

---

## 🔤 Translation Usage

### In Server Components
```tsx
import { useTranslations } from 'next-intl'

export default function HomePage() {
  const t = useTranslations('home')
  
  return <h1>{t('hero.title')}</h1>
}
```

### In Client Components
```tsx
'use client'
import { useTranslations } from 'next-intl'

export function MyComponent() {
  const t = useTranslations('common')
  
  return <button>{t('cta.bookCall')}</button>
}
```

---

## 🌍 URL Structure

- **English (default):** `https://oplera.com/` or `https://oplera.com/en/`
- **Arabic:** `https://oplera.com/ar/`
- **Demo page (EN):** `https://oplera.com/demo`
- **Demo page (AR):** `https://oplera.com/ar/demo`

---

## 📊 Translation Coverage Status

### ✅ Completed Translation Files
- Common elements (nav, footer, CTAs)
- Home page (hero, services, approach, testimonials)
- Demo form (all steps, all fields)

### 🔄 Remaining Translation Files Needed
- `messages/en/product.json` (for omni-support page)
- `messages/ar/product.json`
- Update testimonials data with Arabic content
- Add Arabic metadata for SEO

---

## 🚀 Next Steps (Manual Implementation Required)

Due to the complexity of refactoring the entire app directory structure, the remaining implementation requires:

1. **Manual directory restructuring** (moving ~10 page files)
2. **Updating 15+ components** with translation hooks
3. **Testing each page** in both languages
4. **RTL layout verification** for all sections

**Estimated Time:** 2-3 hours for complete implementation

---

## 🧪 Testing Checklist

- [ ] Language switcher works on all pages
- [ ] All text is translatable (no hardcoded strings)
- [ ] RTL layout looks native (not mirrored/broken)
- [ ] Animations work in both directions
- [ ] Forms submit correctly in both languages
- [ ] Arabic fonts load properly
- [ ] SEO meta tags are localized
- [ ] Links work with locale prefixes

---

## 📝 Example Locale-Aware Layout

```tsx
// src/app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { Cairo, Inter, Poppins } from 'next/font/google'
import { locales, getDirection } from '@/i18n'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ weight: ['700'], subsets: ['latin'], variable: '--font-poppins' })
const cairo = Cairo({ subsets: ['arabic'], variable: '--font-cairo' })

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  if (!locales.includes(locale as any)) {
    notFound()
  }

  const messages = await getMessages()
  const direction = getDirection(locale as any)

  return (
    <html lang={locale} dir={direction}>
      <body className={`${inter.variable} ${poppins.variable} ${cairo.variable} ${
        locale === 'ar' ? 'font-cairo' : 'font-inter'
      }`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
```

---

## 🎯 Success Criteria

When fully implemented, the website will:

1. ✅ Support seamless switching between EN/AR
2. ✅ Display native-looking Arabic typography
3. ✅ Have fully RTL layouts without visual breaks
4. ✅ Maintain all animations and interactions
5. ✅ Keep the same brand identity in both languages
6. ✅ Be SEO-optimized for both languages
7. ✅ Have scalable structure for adding more languages

---

## 📚 Resources

- **next-intl docs:** https://next-intl-docs.vercel.app/
- **tailwindcss-rtl:** https://github.com/20lives/tailwindcss-rtl
- **Cairo font:** https://fonts.google.com/specimen/Cairo
- **RTL best practices:** https://rtlstyling.com/

---

*Generated: Phase 1 Complete - Infrastructure & Translation Files Ready*  
*Next: Manual directory restructuring and component updates required*

