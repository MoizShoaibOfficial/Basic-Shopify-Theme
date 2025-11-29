# Shopify Theme Testing Guide 🧪

## ✅ Option 1: Shopify Par Direct Test (Easiest - Recommended)

### Steps:

1. **Development Store Banayein** (agar nahi hai)
   - Shopify Admin > Settings > Plans and permissions
   - Development store create karein (FREE)

2. **Theme Upload Karein**
   ```
   - Online Store > Themes
   - "Add theme" > "Upload zip file"
   - Theme zip file select karein
   - Upload karein
   ```

3. **Test Karein (Publish Kiye Bina)**
   - Upload ke baad theme "Unpublished" rahega
   - "Actions" > "Preview" click karein
   - Preview mode mein full theme test kar sakte hain
   - Koi bhi changes publish nahi honge customers ko

4. **Test Checklist:**
   - ✅ Homepage load ho raha hai?
   - ✅ Header navigation kaam kar raha hai?
   - ✅ Product pages open ho rahe hain?
   - ✅ Add to cart button kaam kar raha hai?
   - ✅ Collection pages display ho rahe hain?
   - ✅ Mobile view mein responsive hai?
   - ✅ Footer display ho raha hai?

5. **Publish Karein Jab Ready Ho**
   - Test complete hone ke baad
   - "Actions" > "Publish" click karein

---

## 🔧 Option 2: Local Testing (Shopify CLI)

Agar aap locally test karna chahte hain, toh Shopify CLI setup karein:

### Prerequisites:
- Node.js installed (v14+)
- Shopify account
- Development store

### Setup Steps:

1. **Shopify CLI Install Karein**
   ```bash
   npm install -g @shopify/cli @shopify/theme
   ```

2. **Theme Folder Mein Login Karein**
   ```bash
   cd "/home/moiz/Documents/Shopify Theme"
   shopify theme dev
   ```
   
   - Browser automatically open hoga
   - Local URL: `http://127.0.0.1:9292`
   - Real-time changes reflect honge

3. **Development Store Connect Karein**
   - CLI aapko login karwayega
   - Development store select karein
   - Theme automatically sync hoga

### Benefits of Local Testing:
- ✅ Fast development
- ✅ Real-time preview
- ✅ No need to upload repeatedly
- ✅ Hot reload

### Note:
- Local testing ke liye Shopify account aur development store chahiye
- Internet connection required hai

---

## 🚀 Quick Upload Script

Theme ko quickly zip karne ke liye:

```bash
cd "/home/moiz/Documents/Shopify Theme"
zip -r shopify-theme.zip . \
  -x "*.git*" \
  -x "*.md" \
  -x "*.DS_Store" \
  -x "node_modules/*"
```

---

## ⚠️ Important Notes

1. **Development Store Use Karein**
   - Production store par directly test mat karein
   - Development store par pehle test karein

2. **Preview Mode**
   - Preview mode mein test karein
   - Publish tab karein jab fully satisfied ho

3. **Backup**
   - Current theme ka backup le lein
   - Agar kuch problem ho, purana theme restore kar sakte hain

4. **Browser Testing**
   - Different browsers mein test karein
   - Mobile devices par bhi check karein

---

## 📱 Mobile Testing

1. **Shopify Preview:**
   - Preview mode mein mobile view check karein
   - Browser dev tools use karein (F12)

2. **Real Device:**
   - Preview URL ko mobile par open karein
   - Responsive design verify karein

---

## ✅ Final Checklist Before Publishing

- [ ] Homepage properly load ho raha hai
- [ ] All navigation links kaam kar rahe hain
- [ ] Product pages display ho rahe hain
- [ ] Add to cart functionality working hai
- [ ] Collection pages show ho rahe hain
- [ ] Cart page properly display ho raha hai
- [ ] Mobile responsive hai
- [ ] All images load ho rahe hain
- [ ] Colors aur fonts correct hain
- [ ] Footer links working hain

---

**Recommendation:** Option 1 (Shopify Direct Test) use karein - yeh sabse easy aur reliable hai! 🎯

