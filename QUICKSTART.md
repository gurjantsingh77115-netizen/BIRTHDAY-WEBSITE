# 🎉 BirthdayVerse - Quick Start Guide

## 5-Minute Setup

### Step 1: Open the Project
```bash
# Clone the repository
git clone https://github.com/gurjantsingh77115-netizen/BIRTHDAY-WEBSITE.git
cd BIRTHDAY-WEBSITE

# Open in your browser
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

### Step 2: Customize (Edit `scripts/config.js`)

```javascript
// Change these lines:
const CONFIG = {
    celebrant: {
        name: 'YOUR NAME',           // 💊 Change this
        message: 'Your message',      // 💊 Change this
        birthdayDate: '2024-12-25',   // 💊 Change this
    },
    colors: {
        primary: '#6b21a8',    // Purple - optional
        secondary: '#00d4ff',  // Neon Blue - optional
        accent: '#ffd700',     // Gold - optional
    },
    letter: `Your birthday letter...`,  // 💊 Change this
    giftMessage: 'Your gift message',   // 💊 Change this
    timelineEvents: [...],              // 💊 Add your memories
    quotes: [...],                      // 💊 Add your quotes
    photoGallery: [                     // 💊 Add photo URLs
        'assets/images/photo1.jpg',
        // ...
    ],
};
```

### Step 3: Add Your Assets

**Photos:**
1. Create `assets/images/` folder
2. Add your photos (JPG/PNG)
3. Update `photoGallery` URLs in config

**Music:**
1. Create `assets/music/` folder
2. Add `birthday-music.mp3`
3. Or update music path in `index.html`

### Step 4: Test & Deploy

```bash
# Test locally
open index.html

# Deploy to GitHub Pages
git add .
git commit -m "Customize BirthdayVerse"
git push origin main

# Go to Settings > Pages > Source: main branch
# Your site will be live at: https://username.github.io/BIRTHDAY-WEBSITE
```

## 📄 Minimal Config Example

```javascript
const CONFIG = {
    celebrant: {
        name: 'Sarah',
        message: 'Ready to celebrate?',
        birthdayDate: '2024-07-15',
    },
    letter: `Dear Sarah,\n\nHappy Birthday! You're amazing! \u2728`,
    giftMessage: '🎉 You deserve all the joy in the world!',
    timelineEvents: [
        { date: 'Today', title: '🌟 Your Special Day', description: 'Celebrating YOU!' }
    ],
    quotes: [
        '🌞 You make the world brighter!'
    ],
    photoGallery: [],  // Optional - leave empty if no photos
};
```

## 🚀 Deploy in 3 Ways

### Option 1: GitHub Pages (Free)
1. Push to GitHub
2. Settings → Pages
3. Select `main` branch
4. Live at `https://username.github.io/BIRTHDAY-WEBSITE`

### Option 2: Netlify (Free)
1. Go to netlify.com
2. Click "New site from Git"
3. Connect your repo
4. Auto-deploy on push

### Option 3: Vercel (Free)
1. Go to vercel.com
2. Click "New Project"
3. Import your repo
4. One-click deploy

## 💡 Pro Tips

- **Square Photos**: Use 400x400px for best results
- **Music Quality**: Use royalty-free music from Bensound or Pixabay
- **Mobile Testing**: Open on your phone to test responsiveness
- **Browser Check**: Works on Chrome, Firefox, Safari
- **Share URL**: The birthday person can share their celebration link!

## 🥐 Common Issues

**Music not playing?**
- Check if `birthday-music.mp3` exists in `assets/music/`
- Try a different audio format

**Photos not showing?**
- Verify image paths in config are correct
- Check browser console (F12) for errors

**Animations slow?**
- Try a different browser
- Check if hardware acceleration is enabled

## 📖 Full Documentation

See [README.md](README.md) for complete features and customization guide.

## 📄 Need Help?

- Check [README.md](README.md) for detailed docs
- See [assets/README.md](assets/README.md) for asset specifications
- Review [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines

---

**That's it! You're ready to celebrate! 🎉✨**
