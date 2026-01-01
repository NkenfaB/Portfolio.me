# Deployment Guide

This guide will help you deploy your Next.js portfolio to various platforms.

## Vercel (Recommended)

Vercel is the easiest way to deploy your Next.js application. It's made by the creators of Next.js!

### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Modern Next.js Portfolio"
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Custom Domain (Optional)**
   - Go to your project settings on Vercel
   - Navigate to "Domains"
   - Add your custom domain
   - Follow the DNS configuration instructions

### Environment Variables (if needed)
- Add any environment variables in the Vercel dashboard
- Go to Project Settings → Environment Variables

## Netlify

### Steps:

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Deploy**
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli

   # Build your project
   npm run build

   # Deploy
   netlify deploy --prod
   ```

## Self-Hosted (VPS/Cloud)

### Prerequisites:
- Node.js 18+ installed on server
- PM2 for process management
- Nginx for reverse proxy

### Steps:

1. **Install PM2**
   ```bash
   npm install -g pm2
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Start with PM2**
   ```bash
   pm2 start npm --name "portfolio" -- start
   pm2 save
   pm2 startup
   ```

4. **Configure Nginx**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

5. **Enable SSL with Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

## GitHub Pages

**Note**: GitHub Pages doesn't fully support Next.js server-side features. Consider using static export:

1. **Update `next.config.ts`**:
   ```typescript
   const nextConfig: NextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   };
   ```

2. **Build and deploy**:
   ```bash
   npm run build
   ```

3. **Use gh-pages package**:
   ```bash
   npm install --save-dev gh-pages
   ```

   Add to `package.json`:
   ```json
   "scripts": {
     "deploy": "gh-pages -d out"
   }
   ```

   ```bash
   npm run deploy
   ```

## Docker Deployment

### Dockerfile:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Build and run:

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## Performance Optimization Before Deployment

1. **Optimize Images**
   - Use Next.js Image component
   - Compress images before uploading
   - Use modern formats (WebP, AVIF)

2. **Enable Analytics**
   - Add Vercel Analytics
   - Or use Google Analytics

3. **Test Performance**
   ```bash
   npm run build
   npm start
   ```
   - Test with Lighthouse
   - Check Core Web Vitals
   - Verify mobile responsiveness

4. **Security Headers** (Add to `next.config.ts`):
   ```typescript
   const securityHeaders = [
     {
       key: 'X-DNS-Prefetch-Control',
       value: 'on'
     },
     {
       key: 'X-Frame-Options',
       value: 'SAMEORIGIN'
     },
     {
       key: 'X-Content-Type-Options',
       value: 'nosniff'
     },
   ];

   const nextConfig = {
     async headers() {
       return [
         {
           source: '/:path*',
           headers: securityHeaders,
         },
       ];
     },
   };
   ```

## Post-Deployment Checklist

- [ ] Test all links and navigation
- [ ] Verify dark/light mode toggle
- [ ] Check mobile responsiveness
- [ ] Test on different browsers
- [ ] Verify all social links work
- [ ] Check page load performance
- [ ] Test SEO metadata
- [ ] Set up custom domain
- [ ] Enable SSL certificate
- [ ] Add to Google Search Console
- [ ] Submit sitemap

## Monitoring

### Recommended Tools:
- **Vercel Analytics**: Built-in analytics for Vercel deployments
- **Google Analytics**: Visitor tracking and insights
- **Sentry**: Error tracking
- **Uptime Robot**: Uptime monitoring

## Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Port Already in Use
```bash
# Find and kill process
lsof -ti:3000 | xargs kill -9
```

### Module Not Found
```bash
# Reinstall dependencies
rm package-lock.json
npm install
```

## Need Help?

- Next.js Documentation: https://nextjs.org/docs
- Vercel Support: https://vercel.com/support
- GitHub Issues: Create an issue in your repository

---

Good luck with your deployment! 🚀
