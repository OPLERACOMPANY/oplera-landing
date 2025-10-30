# 🎥 Video Setup Guide - Omni Support Page

## Quick Steps

1. **Upload your video** to one of these platforms:
   - Cloudflare Stream (Best performance)
   - Vimeo (Professional look)
   - YouTube (Easiest, free)

2. **Get the embed URL**

3. **Replace in code:** `src/app/omni-support/page.tsx` line ~164

4. **Refresh browser** → Done! ✅

---

## 🎬 Platform-Specific Instructions

### **Cloudflare Stream** (Recommended)

**Pros:** ⚡ Fastest, best performance, built-in analytics, no ads

**Steps:**
1. Go to Cloudflare Dashboard → Stream
2. Upload your video
3. Click "Embed" → Copy the iframe URL
4. URL format: `https://customer-XXXX.cloudflarestream.com/VIDEO_ID/iframe`

**Code:**
```tsx
<iframe
  src="https://customer-XXXX.cloudflarestream.com/VIDEO_ID/iframe"
  allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
  allowFullScreen
  className="w-full h-[300px] md:h-[480px]"
  title="Omni Support Agent Demo"
  style={{ border: 'none' }}
/>
```

---

### **Vimeo** (Professional)

**Pros:** 🎨 Customizable player, clean look, good quality

**Steps:**
1. Upload to Vimeo
2. Go to video → Settings → Share
3. Click "Embed" tab
4. Copy the `src` URL from the embed code
5. URL format: `https://player.vimeo.com/video/VIDEO_ID`

**Code:**
```tsx
<iframe
  src="https://player.vimeo.com/video/YOUR_VIDEO_ID?h=HASH"
  allow="autoplay; fullscreen; picture-in-picture"
  allowFullScreen
  className="w-full h-[300px] md:h-[480px]"
  title="Omni Support Agent Demo"
  style={{ border: 'none' }}
/>
```

---

### **YouTube** (Easy)

**Pros:** 📺 Free, familiar, easy to use

**Steps:**
1. Upload to YouTube
2. Go to video page → Click "Share"
3. Click "Embed"
4. Copy the `src` URL from the embed code
5. URL format: `https://www.youtube.com/embed/VIDEO_ID`

**Code:**
```tsx
<iframe
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  className="w-full h-[300px] md:h-[480px]"
  title="Omni Support Agent Demo"
  style={{ border: 'none' }}
/>
```

**YouTube Embed Options:**
- Autoplay: Add `?autoplay=1` to URL
- No controls: Add `?controls=0`
- Loop: Add `?loop=1`
- Start at time: Add `?start=30` (30 seconds)

Example: `https://www.youtube.com/embed/VIDEO_ID?autoplay=1&controls=1&start=0`

---

## 📝 Full Example

**File:** `src/app/omni-support/page.tsx`

**Find this section (around line 155):**

```tsx
{/* Video Embed - Replace with your video URL */}
<div className="relative rounded-2xl overflow-hidden border border-oplera-cyan/20 mb-8 shadow-2xl shadow-oplera-cyan/10">
  <iframe
    src="YOUR_VIDEO_URL_HERE"  // ⬅️ REPLACE THIS
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    className="w-full h-[300px] md:h-[480px]"
    title="Omni Support Agent Demo"
    style={{ border: 'none' }}
  />
</div>
```

**Replace `YOUR_VIDEO_URL_HERE` with your actual video URL.**

---

## 🧪 Testing

1. **Save the file**
2. **Browser auto-refreshes** (if dev server is running)
3. **Navigate to:** `http://localhost:3001/omni-support`
4. **Video should play!** ✅

---

## 🎨 Customization

### Change Video Height

```tsx
// Mobile: 300px, Desktop: 600px
className="w-full h-[300px] md:h-[600px]"
```

### Add Autoplay (YouTube)

```tsx
src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1"
```

### Remove Border Glow

```tsx
// Remove this class:
shadow-2xl shadow-oplera-cyan/10
```

---

## ❓ Troubleshooting

### Video not showing?

1. **Check console** for errors (F12 → Console)
2. **Verify URL** is correct
3. **Check video privacy settings** (must be public/unlisted)
4. **Try incognito mode** to rule out cache issues

### Video too small on mobile?

```tsx
// Increase mobile height:
className="w-full h-[400px] md:h-[480px]"
```

### Want placeholder until video loads?

```tsx
<div className="relative rounded-2xl overflow-hidden border border-oplera-cyan/20 mb-8">
  <iframe ... />
  
  {/* Loading placeholder */}
  <div className="absolute inset-0 bg-oplera-navy/90 flex items-center justify-center pointer-events-none" id="video-loading">
    <div className="text-center">
      <div className="text-8xl mb-4">⏳</div>
      <p className="text-xl text-gray-300">Loading video...</p>
    </div>
  </div>
</div>

{/* Hide placeholder when video loads */}
<script>
  document.querySelector('iframe').addEventListener('load', () => {
    document.getElementById('video-loading').style.display = 'none';
  });
</script>
```

---

## 🚀 Production Tips

1. **Optimize video:**
   - Resolution: 1080p max
   - Format: MP4 (H.264)
   - Length: Under 3 minutes for demos

2. **Add captions** for accessibility

3. **Use CDN** (Cloudflare Stream recommended)

4. **Monitor loading time** with Lighthouse

---

## 📞 Need Help?

- **YouTube tutorial:** Search "how to embed YouTube video"
- **Cloudflare docs:** https://developers.cloudflare.com/stream/
- **Vimeo help:** https://vimeo.com/help/embedding

---

**Last Updated:** 2025  
**For:** Omni Support Agent Product Page

