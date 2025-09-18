# Dirt2Clea Deployment Checklist

## Backend Updates
- [x] Update controllers to use in-memory storage (bookings, services, subscriptions)
- [x] Verify routes are correct (/api/bookings, /api/services, /api/subscriptions)
- [ ] Update CORS to allow production frontend domain (https://dirt2clea-frontend.vercel.app)
- [x] Ensure serverless wrapper (api/index.js) is correct
- [x] Verify package.json dependencies (express, nodemailer, serverless-http)

## Frontend Updates
- [x] Update BookingForm to use API instead of WhatsApp redirect
- [x] Verify axiosInstance uses VITE_API_BASE_URL
- [x] Check build scripts (vite build)
- [x] Verify routing and components are correct

## Configuration
- [x] Create .env.example with required variables (EMAIL_USER, EMAIL_PASS, VITE_API_BASE_URL)
- [x] Update README.md with setup and deployment instructions
- [x] Verify vercel.json for correct routing

## Testing
- [ ] Test backend locally: npm run dev in backend/, check API endpoints with Postman
- [ ] Test frontend locally: npm run dev in frontend/, submit booking form
- [ ] Test email functionality (set up Gmail app password)
- [ ] Test build: npm run build in frontend/

## Deployment
- [ ] Push code to GitHub repository
- [ ] Connect repository to Vercel
- [ ] Set environment variables in Vercel:
  - EMAIL_USER
  - EMAIL_PASS
  - VITE_API_BASE_URL (to https://your-project.vercel.app/api)
- [ ] Deploy on Vercel

## Post-Deployment Verification
- [ ] Verify frontend loads correctly
- [ ] Test booking form submission
- [ ] Check email notifications
- [ ] Verify API endpoints work (use browser dev tools)
- [ ] Test responsiveness on mobile/desktop
