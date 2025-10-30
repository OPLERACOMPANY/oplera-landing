# 📝 How to Add Your Oplera Logo

## ✅ Quick Steps

### **Step 1: Save Your Logo Image**

1. **Save the logo image** you showed me as: **`oplera-logo.png`**
2. **Place it in:** `public/images/oplera-logo.png`

### **Step 2: Done! ✅**

The logo is already integrated in the code - just save the image file!

---

## 📁 Folder Structure

```
OPERA_SITE/
├── public/
│   └── images/
│       └── oplera-logo.png  ← Save your logo here
└── src/
    └── components/
        └── layout/
            └── Header.tsx  ← Logo already integrated ✅
```

---

## 🎨 Logo Specifications (Current Setup)

| Property | Value |
|----------|-------|
| **Height** | 40px (h-10) |
| **Width** | Auto (maintains aspect ratio) |
| **Format** | PNG (recommended) |
| **Background** | Transparent preferred |
| **Hover Effect** | Slight scale up (1.05x) |
| **Links to** | Homepage (/) |

---

## 🔧 Alternative: Use Different Logo Size

If you want a **different height**, update this line in `Header.tsx`:

```tsx
// Current: h-10 (40px)
className="h-10 w-auto ..."

// Larger: h-12 (48px)
className="h-12 w-auto ..."

// Smaller: h-8 (32px)
className="h-8 w-auto ..."
```

---

## 🖼️ Supported Image Formats

✅ **PNG** (Best - supports transparency)  
✅ **SVG** (Vector - scales perfectly)  
✅ **WebP** (Modern - small file size)  
⚠️ **JPG** (Works but no transparency)

---

## 🧪 Test Your Logo

After saving the image:

1. **Refresh:** `http://localhost:3001`
2. **Check:**
   - ✅ Logo appears in navbar
   - ✅ Logo is clear (not blurry)
   - ✅ Logo scales properly on mobile
   - ✅ Clicking logo goes to homepage

---

## 🎯 Logo Features Included

✅ **Responsive** - Auto-adjusts on all screens  
✅ **Clickable** - Links to homepage  
✅ **Hover Effect** - Smooth scale animation  
✅ **Optimized** - Lazy loading enabled  
✅ **Accessible** - Proper alt text  

---

## 🌓 Dark Background Note

Your logo has:
- **Navy blue head silhouette**
- **White background**

Since your site has a **dark navy background**, the logo will look great!

If you want the logo on a **transparent background** for better blending:
1. Open logo in image editor
2. Remove white background
3. Save as PNG with transparency
4. Replace the file

---

## 📱 Mobile Menu Logo

The same logo appears in:
- ✅ Desktop navbar (left side)
- ✅ Mobile navbar (left side)
- ✅ Both use the same image file

---

## 🔄 Update Logo Later

To change the logo in the future:

**Option 1:** Replace the file
```bash
# Just replace this file with new logo:
public/images/oplera-logo.png
```

**Option 2:** Change filename
```tsx
// Update this line in Header.tsx:
src="/images/your-new-logo.png"
```

---

**🎉 Your Oplera logo is ready to shine in the navbar!**

Just save the image to `public/images/oplera-logo.png` and refresh! ✨

