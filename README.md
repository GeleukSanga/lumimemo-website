# Jogpro 3D Website

Website 3D printing profesional dengan animasi 3D interaktif dan admin panel untuk manage konten.

## 🚀 Features

- ✨ **3D Interactive Hero** - Model 3D printer yang bisa di-rotate dengan mouse
- 🎨 **Particle Effects** - Animasi particles dengan warna brand (hitam-oranye)
- 📱 **Fully Responsive** - Optimized untuk desktop, tablet, dan mobile
- ⚡ **Fast Performance** - Built with Next.js 15 + Turbopack
- 🎯 **Smooth Animations** - GSAP & Framer Motion untuk transisi smooth
- 🛠️ **Admin Panel** - Edit konten tanpa coding (localStorage based)

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **3D Rendering:** Three.js + React Three Fiber
- **Animations:** Framer Motion + GSAP
- **Styling:** Tailwind CSS
- **Language:** TypeScript

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎨 Admin Panel

Akses admin panel di: `http://localhost:3000/admin`

**Features:**
- Edit Hero section (title, subtitle, CTA)
- Manage Services (icon, title, description)
- Update Contact info (WhatsApp, email, location)
- Manage Portfolio items (title, category, image URL)
- Export/Import content sebagai JSON
- Auto-save ke localStorage

## 📁 Project Structure

```
jogpro-3d-website/
├── app/
│   ├── admin/          # Admin panel
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Homepage
│   └── globals.css     # Global styles
├── components/
│   ├── Hero3D.tsx      # 3D hero section
│   ├── Services.tsx    # Services section
│   ├── Portfolio.tsx   # Portfolio gallery
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
└── public/             # Static assets
```

## 🎯 Deployment

### Vercel (Recommended)

1. Push code ke GitHub
2. Import project di Vercel
3. Deploy otomatis!

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Manual Build

```bash
npm run build
npm start
```

## 🔧 Customization

### Update Konten
1. Buka `/admin`
2. Edit konten di tab yang tersedia
3. Klik "Simpan"
4. Refresh homepage untuk lihat perubahan

### Update Warna Brand
Edit di `app/globals.css`:
```css
:root {
  --orange: #ff6b00;
  --orange-light: #ff8533;
}
```

### Update 3D Model
Edit `components/Hero3D.tsx` untuk customize 3D printer model.

## 📝 TODO

- [ ] Integrate dengan CMS backend (Sanity/Strapi)
- [ ] Upload image functionality
- [ ] Add more portfolio items
- [ ] SEO optimization
- [ ] Analytics integration
- [ ] Contact form backend

## 🎨 Brand Colors

- **Primary Orange:** `#ff6b00`
- **Light Orange:** `#ff8533`
- **Black:** `#000000`
- **Dark Gray:** `#1a1a1a`
- **White:** `#ffffff`

## 📞 Support

Untuk pertanyaan atau bantuan, hubungi:
- WhatsApp: +62 812-3456-7890 (placeholder)
- Email: info@jogpro.com

---

Built with ❤️ by Hermes AI
