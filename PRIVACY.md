# Security & Privacy Policy for BirthdayVerse

## 🔒 Data Security

### No Data Collection
BirthdayVerse does **NOT** collect, store, or transmit any personal data:
- No user tracking
- No analytics
- No cookies for data collection
- No third-party data sharing

### Local Data
- All customization happens locally in your browser
- No server communication required
- Configuration stored in `scripts/config.js` (local file)

## 🛡️ Security Features

- **HTTPS Compatible**: Safe to deploy on any HTTPS server
- **No Authentication Required**: No login or passwords needed
- **No Backend**: Purely frontend application
- **Offline Compatible**: Works without internet (after initial load)

## 🌐 Social Sharing

When you click share buttons:
- Opens third-party platforms (WhatsApp, Facebook, etc.)
- You control what information is shared
- BirthdayVerse doesn't access your accounts
- Those platforms have their own privacy policies

## 📱 Browser Storage

The application uses only:
- **localStorage**: For optional preference storage (future feature)
- **sessionStorage**: For current session data only
- No sensitive data stored

## ✅ Privacy Best Practices

1. **Don't share sensitive photos** - Only use appropriate images
2. **Secure your deployment** - Use HTTPS when hosting
3. **Keep config.js private** - If using backend, protect configuration
4. **Review shared content** - Check what you share before sending

## 🔐 Deployment Security

### Recommended Hosting
- GitHub Pages (HTTPS by default)
- Netlify (HTTPS by default)
- Vercel (HTTPS by default)

### Security Headers
Consider adding these headers when deploying:
```
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
Content-Security-Policy: default-src 'self'
```

## 📖 Terms of Use

- Use for personal, non-commercial purposes
- Don't remove or modify copyright information
- Respect intellectual property rights
- Don't use for harmful content

## 🆘 Reporting Security Issues

If you find a security vulnerability:
1. Don't post it publicly
2. Create a private security report
3. Include detailed reproduction steps
4. Allow time for response and patching

## 📞 Contact

For privacy or security concerns, please open a GitHub issue.

---

**Last Updated**: July 2024  
**Policy Version**: 1.0
