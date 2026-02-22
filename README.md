# 🚀 Viraal Labs by Shri — Digital Marketing Website

> Built with Next.js 15, Tailwind CSS, Framer Motion. Deploy-ready for Vercel in 5 minutes.

---

## ⚡ Quick Start (Local Dev)

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables (see below)
cp .env.example .env.local

# 3. Run development server
npm run dev

# Open http://localhost:3000
```

---

## 📧 EmailJS Setup (Contact Form)

1. Create a free account at **https://www.emailjs.com**
2. Click **Add New Service** → Select Gmail → Name it `viraal_labs`
3. Click **Email Templates** → **Create New Template**
   - Use variables: `{{name}}`, `{{email}}`, `{{phone}}`, `{{message}}`
   - Set **To Email**: `Rajiv.sharma20894@gmail.com`
4. Go to **Account** → copy your **Public Key**

Update `.env.local`:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxx
```

---

## 🌐 Vercel Deployment (1-Click)

### Option A — GitHub Deploy (Recommended)
```bash
# Push to GitHub
git init
git add .
git commit -m "🚀 Initial Viraal Labs website"
git remote add origin https://github.com/YOUR_USERNAME/viraal-labs.git
git push -u origin main
```

Then:
1. Go to **https://vercel.com/new**
2. Import your GitHub repository
3. Add Environment Variables (EMAILJS keys from above)
4. Click **Deploy** ✅

### Option B — Vercel CLI
```bash
npm i -g vercel
vercel --prod
```

---

## 🌍 Custom Domain Setup

1. In Vercel Dashboard → your project → **Settings** → **Domains**
2. Add `viraallabs.in` (or your domain)
3. In your domain registrar (GoDaddy/Namecheap), add DNS:
   ```
   Type: A      Name: @    Value: 76.76.21.21
   Type: CNAME  Name: www  Value: cname.vercel-dns.com
   ```
4. Wait 24-48h for propagation

---

## ⚙️ Environment Variables

Create `.env.local` in project root:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

In Vercel: Project → Settings → Environment Variables → add all three.

---

## 🎨 Customization

### Colors (tailwind.config.ts)
```typescript
colors: {
  navy: { DEFAULT: "#1E3A8A" },  // Change primary color
  teal: { DEFAULT: "#0D9488" },  // Change accent color
}
```

### Business Info
- **Contact details**: `components/Contact.tsx`
- **Footer**: `components/Footer.tsx`
- **SEO/Metadata**: `app/layout.tsx`

### Portfolio Projects
Edit the `projects` array in `components/Portfolio.tsx`

### Services
Edit the `services` array in `components/Services.tsx`

---

## 📊 Performance Checklist

- ✅ Next.js Image Optimization
- ✅ Poppins font via Google Fonts CDN
- ✅ Tailwind CSS purging (production)
- ✅ Framer Motion lazy loading
- ✅ Mobile-first responsive design
- ✅ SEO: Title, Description, OG tags, Schema markup
- ✅ Core Web Vitals optimized

### To hit 100 Lighthouse:
- Add `next/image` for all real images (replace emoji placeholders)
- Enable Vercel Edge Network CDN (auto on deploy)
- Add `rel="preload"` for hero assets

---

## 📁 Project Structure

```
viraal-labs/
├── app/
│   ├── layout.tsx      ← SEO metadata, fonts, schema
│   ├── page.tsx        ← Main page assembly
│   └── globals.css     ← Tailwind + custom styles
├── components/
│   ├── Navbar.tsx      ← Sticky nav with scroll effects
│   ├── Hero.tsx        ← Particle canvas, stats counters
│   ├── Services.tsx    ← 5 service cards with animations
│   ├── Differentiation.tsx ← Why Us + case studies
│   ├── Portfolio.tsx   ← Filterable project grid
│   ├── Contact.tsx     ← Form + map + EmailJS
│   ├── Footer.tsx      ← Links, social, copyright
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       └── AuditModal.tsx ← Free audit popup form
├── lib/
│   └── utils.ts        ← Helpers, EmailJS config
├── tailwind.config.ts
├── next.config.js
└── package.json
```

---

## 🚀 Live Preview

After deploying, your site will be at:
- **Vercel URL**: `https://viraal-labs.vercel.app`
- **Custom domain**: `https://viraallabs.in`

---

**Built with ❤️ in Pune, India 🇮🇳 | © 2026 Viraal Labs by Shri**
