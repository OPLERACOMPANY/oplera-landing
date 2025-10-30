# 🎥 Bunny Stream - Get Your Video URLs

## 🚀 Quick Guide to Get HLS & Thumbnail URLs

### **Step 1: Access Bunny Dashboard**

1. Go to: **https://dash.bunny.net/stream**
2. Login to your account
3. You'll see your video library

---

### **Step 2: Find Your Video**

Your video ID: **`33ecf3c9-8edc-4630-8fc1-0097f15805a3`**

1. Click on this video in your library
2. This opens the video details page

---

### **Step 3: Copy URLs**

#### **📺 HLS Playlist URL (Primary)**

Look for: **"HLS Playlist URL"** or **"Streaming URL"**

Format example:
```
https://vz-XXXXXXX-XXX.b-cdn.net/33ecf3c9-8edc-4630-8fc1-0097f15805a3/playlist.m3u8
```

**Where to use:** Replace line 180 in `omni-support/page.tsx`

---

#### **🖼️ Thumbnail URL (Poster Image)**

Look for: **"Thumbnail"** or **"Preview Image"**

Format example:
```
https://vz-XXXXXXX-XXX.b-cdn.net/33ecf3c9-8edc-4630-8fc1-0097f15805a3/thumbnail.jpg
```

**Where to use:** Replace line 173 in `omni-support/page.tsx`

---

#### **📹 MP4 Fallback (Optional)**

Look for: **"Direct MP4 Link"** or **"Download Link"**

Format example:
```
https://vz-XXXXXXX-XXX.b-cdn.net/33ecf3c9-8edc-4630-8fc1-0097f15805a3/play_720p.mp4
```

**Where to use:** Replace line 185 in `omni-support/page.tsx`

---

## 📝 How to Update the Code

### **Current Code (with placeholders):**

```tsx
<video
  className="absolute top-0 left-0 w-full h-full rounded-3xl object-cover"
  controls
  preload="metadata"
  poster="https://vz-c5b883c0-a50.b-cdn.net/33ecf3c9-8edc-4630-8fc1-0097f15805a3/thumbnail.jpg"
  autoPlay
  muted
  loop
  playsInline
>
  <source 
    src="https://vz-c5b883c0-a50.b-cdn.net/33ecf3c9-8edc-4630-8fc1-0097f15805a3/playlist.m3u8" 
    type="application/x-mpegURL" 
  />
  <source 
    src="https://vz-c5b883c0-a50.b-cdn.net/33ecf3c9-8edc-4630-8fc1-0097f15805a3/play_720p.mp4" 
    type="video/mp4" 
  />
</video>
```

### **What to Replace:**

1. **Line 173 (poster):** Replace with your Thumbnail URL
2. **Line 180 (HLS):** Replace with your HLS Playlist URL  
3. **Line 185 (MP4):** Replace with your MP4 URL

---

## 🔍 Where to Find URLs in Bunny Dashboard

### **Option A: Video Details Page**

```
Dashboard → Stream → Your Video → Details Tab
```

You'll see:
- ✅ HLS Playlist URL
- ✅ MP4 Download Links (multiple qualities)
- ✅ Thumbnail URL

---

### **Option B: API Response**

If you're comfortable with APIs:

```bash
curl -X GET "https://video.bunnycdn.com/library/YOUR_LIBRARY_ID/videos/33ecf3c9-8edc-4630-8fc1-0097f15805a3" \
  -H "AccessKey: YOUR_API_KEY"
```

Response includes:
```json
{
  "guid": "33ecf3c9-8edc-4630-8fc1-0097f15805a3",
  "videoLibraryId": 518685,
  "thumbnailUrl": "https://vz-...",
  "playlistUrl": "https://vz-.../playlist.m3u8",
  ...
}
```

---

## ✅ Quick Test Checklist

After updating URLs:

1. **Refresh page:** `http://localhost:3001/omni-support`
2. **Check poster image:** Shows before video plays?
3. **Click play:** Video starts smoothly?
4. **Check mobile:** Works on responsive sizes?
5. **Check controls:** Volume, fullscreen, timeline work?

---

## 🎯 Expected URL Formats

Your URLs should look like:

### **HLS Playlist:**
```
https://vz-[HASH]-[NUMBER].b-cdn.net/[VIDEO_ID]/playlist.m3u8
```

### **Thumbnail:**
```
https://vz-[HASH]-[NUMBER].b-cdn.net/[VIDEO_ID]/thumbnail.jpg
```

### **MP4:**
```
https://vz-[HASH]-[NUMBER].b-cdn.net/[VIDEO_ID]/play_[QUALITY].mp4
```

Quality options: `240p`, `360p`, `480p`, `720p`, `1080p`

---

## 💡 Pro Tips

### **1. Use Multiple MP4 Qualities**

```tsx
<source src="...play_1080p.mp4" type="video/mp4" />
<source src="...play_720p.mp4" type="video/mp4" />
<source src="...play_480p.mp4" type="video/mp4" />
```

Browser auto-selects best quality for connection.

---

### **2. Custom Thumbnail**

Upload custom thumbnail in Bunny dashboard:
```
Dashboard → Video → Thumbnails → Upload Custom
```

---

### **3. Analytics Tracking**

Bunny provides built-in analytics:
```
Dashboard → Video → Analytics
```

Track: Views, Watch time, Geographic data

---

## 🆘 Troubleshooting

### **Video Not Playing?**

1. **Check URL format** - Copy from Bunny dashboard
2. **Check CORS** - Bunny CDN should allow all origins
3. **Check file exists** - Open URL in new tab
4. **Try MP4 fallback** - Remove HLS source temporarily

### **Thumbnail Not Showing?**

1. **Check URL** - Open in browser
2. **Wait for processing** - New uploads take 1-2 mins
3. **Use custom thumbnail** - Upload manually

### **Black borders?**

- ✅ Already fixed with `object-cover` class
- Video fills frame proportionally

---

## 📞 Need Help?

- **Bunny Docs:** https://docs.bunny.net/docs/stream
- **Support:** support@bunny.net
- **Community:** https://bunny.net/community

---

**Created:** 2025  
**For:** Oplera Omni Support Page  
**Video ID:** `33ecf3c9-8edc-4630-8fc1-0097f15805a3`

