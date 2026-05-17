# 🚀 Deployment Guide - Jogpro 3D Website

## Option 1: Deploy ke Vercel (RECOMMENDED - Gratis & Cepat)

### Step 1: Push ke GitHub

```bash
cd ~/jogpro-3d-website
git add .
git commit -m "Initial commit - Jogpro 3D website"
git branch -M main
git remote add origin https://github.com/USERNAME/jogpro-3d.git
git push -u origin main
```

### Step 2: Deploy di Vercel

1. Buka https://vercel.com
2. Sign up/login dengan GitHub
3. Click "Add New Project"
4. Import repository `jogpro-3d`
5. Framework Preset: **Next.js** (auto-detected)
6. Click **Deploy**
7. Tunggu 2-3 menit
8. Done! Dapat URL: `https://jogpro-3d.vercel.app`

### Step 3: Connect Domain jogpro.com

1. Di Vercel dashboard, buka project settings
2. Go to **Domains**
3. Add domain: `jogpro.com`
4. Vercel akan kasih DNS records yang perlu diupdate

**DNS Records yang perlu ditambahkan di Rumahweb:**

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

5. Login ke Rumahweb → DNS Management
6. Tambahkan 2 records di atas
7. Tunggu 5-60 menit untuk propagasi
8. Done! Website live di jogpro.com

---

## Option 2: Test di Local Dulu

```bash
cd ~/jogpro-3d-website
npm run dev
```

Buka browser: `http://localhost:3000`

**Admin Panel:** `http://localhost:3000/admin`

---

## Option 3: Deploy Manual ke Hosting Lain

### Build Production

```bash
cd ~/jogpro-3d-website
npm run build
```

### Upload ke Hosting

Upload folder berikut ke hosting:
- `.next/`
- `public/`
- `node_modules/`
- `package.json`
- `next.config.js`

Jalankan di server:
```bash
npm start
```

---

## 🔧 Update DNS di Rumahweb

### Login ke Rumahweb

1. Buka https://clientzone.rumahweb.com
2. Login dengan akun kamu
3. Go to **Domain Management**
4. Pilih domain `jogpro.com`
5. Click **Manage DNS**

### Tambah DNS Records (Untuk Vercel)

**Record 1:**
- Type: `A`
- Host: `@` (atau kosong)
- Points to: `76.76.21.21`
- TTL: `3600` (default)

**Record 2:**
- Type: `CNAME`
- Host: `www`
- Points to: `cname.vercel-dns.com`
- TTL: `3600`

### Hapus Record Lama (Opsional)

Kalau ada A record atau CNAME yang pointing ke hosting WordPress lama, hapus dulu.

### Save & Wait

- Click **Save Changes**
- Tunggu 5-60 menit untuk DNS propagasi
- Cek status: https://dnschecker.org

---

## 📱 Testing Checklist

Setelah deploy, test:

- [ ] Homepage loading dengan 3D animation
- [ ] Scroll smooth ke Services section
- [ ] Portfolio images loading
- [ ] Contact form redirect ke WhatsApp
- [ ] Admin panel accessible di `/admin`
- [ ] Mobile responsive (test di HP)
- [ ] Performance (PageSpeed Insights)

---

## 🎯 Next Steps

1. **Update konten di Admin Panel** (`/admin`)
   - Ganti nomor WhatsApp placeholder
   - Update email & lokasi
   - Upload foto produk asli

2. **SEO Optimization**
   - Submit sitemap ke Google Search Console
   - Add meta descriptions
   - Optimize images

3. **Analytics**
   - Add Google Analytics
   - Setup conversion tracking

4. **Marketing**
   - Share link di Instagram/TikTok
   - Add link ke bio
   - Create QR code untuk offline marketing

---

## 🆘 Troubleshooting

**Problem: DNS tidak update**
- Tunggu lebih lama (bisa sampai 24 jam)
- Clear browser cache
- Test di incognito mode

**Problem: 3D animation tidak muncul**
- Check browser console (F12)
- Pastikan WebGL supported
- Test di browser lain

**Problem: Admin panel tidak save**
- Check localStorage enabled
- Clear browser cache
- Test di incognito mode

---

## 📞 Need Help?

Hubungi saya via Telegram untuk bantuan deployment!
