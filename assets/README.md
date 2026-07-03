# BirthdayVerse - Assets Guide

## 📁 Assets Structure

```
assets/
├── images/          # Your photos
├── music/          # Birthday music
├── fonts/          # Custom fonts (optional)
├── icons/          # Custom icons (optional)
└── videos/         # Video memories (future feature)
```

## 🖼️ Images

### Recommended Specifications
- **Format**: JPG or PNG
- **Size**: 400x400px for gallery (square recommended)
- **Quality**: High-quality, optimized
- **Location**: `assets/images/`

### Adding Images
1. Place images in `assets/images/`
2. Update `scripts/config.js`:
```javascript
photoGallery: [
    'assets/images/photo1.jpg',
    'assets/images/photo2.jpg',
]
```

## 🎵 Music

### File Specifications
- **Format**: MP3 (recommended)
- **Duration**: 3-5 minutes ideal
- **Bitrate**: 128-320 kbps
- **Location**: `assets/music/birthday-music.mp3`

### Recommended Sources
- YouTube Audio Library (Free)
- Bensound (Royalty-free)
- Zapsplat (Royalty-free)
- Pixabay Music (Free)

## 🎨 Fonts

The project uses Google Fonts:
- **Display**: Playfair Display (titles)
- **Main**: Poppins (body text)
- **Secondary**: Montserrat (accents)

To add custom fonts:
1. Download font files
2. Place in `assets/fonts/`
3. Update `styles/style.css`:
```css
@font-face {
    font-family: 'CustomFont';
    src: url('../assets/fonts/font.ttf') format('truetype');
}
```

## 📝 Optimization Tips

### Images
- Compress using TinyPNG or ImageOptim
- Use appropriate formats (JPG for photos, PNG for graphics)
- Lazy load images for better performance

### Music
- Ensure MP3 is properly encoded
- Test on different devices
- Consider file size (< 10MB recommended)

### General
- Minimize asset sizes
- Use CDN for faster delivery
- Cache static assets

---

For more information, see the main [README.md](README.md)
