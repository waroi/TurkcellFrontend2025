This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# 💹 Cryptocurrency Exchange Platform

This is a full-featured, responsive cryptocurrency exchange application built with **Next.js**, **TypeScript**, and modern web technologies. The app includes user authentication, fake trading functionality, watchlist, portfolio tracking, dark/light mode, and internationalization (i18n) support.

> 📌 Inspired by Figma designs:  
> 🎨 [Main Design](https://www.figma.com/design/98DqPAzFuthisWLaeTG7B6/cryptocurrency-exchange-in-light-mood-and-Dark-mood--Community-?node-id=2680-54312&t=UDuV2ZXEQIoilHh8-0)  
> 🌍 [Crypto Planet Inspiration](https://www.figma.com/design/GAf84WJAFR8x0Xve64Kgjk/Crypto-Planet---Crypto-Trading-Exchange-UI-Template-In-Figma--Community-?node-id=2-3&p=f)

---

## 🚀 Features

- 🔐 **User Authentication** via Firebase (register, login, logout, reset password)
- 💱 **Fake Trading Engine** using Binance Testnet & CoinMarketCap API data
- 📊 **TradingView Charts** integration
- 📈 **Real-time Market Page** with filter, sort, search, and coin details
- ⭐ **Watchlist** support for favorite coins
- 💼 **Portfolio** view to display owned assets and value
- 🌙 **Dark / Light Theme Switching**
- 🌐 **Multilingual Support (i18n)**: English 🇺🇸 & Turkish 🇹🇷
- 📱 **Fully Responsive Design**
- 🎯 **Pixel-perfect implementation** based on Figma
- 🧼 **Clean code with SOLID principles**

---

## 🛠️ Technologies Used

- [Next.js](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Zustand](https://zustand-demo.pmnd.rs/) or [Redux Toolkit](https://redux-toolkit.js.org/)
- [SCSS Modules](https://sass-lang.com/)
- [Firebase Authentication](https://firebase.google.com/products/auth)
- [Firebase](https://firebase.com/) (optional for DB)
- [CoinMarketCap API](https://coinmarketcap.com/api/)
- [Binance Testnet API](https://testnet.binance.vision/)
- [Formik](https://formik.org/) + [Yup](https://github.com/jquense/yup)
- [next-intl](https://next-intl.dev/) for i18n
- [TradingView](https://www.tradingview.com/widget/advanced-chart/)

---

## 📁 Project Structure
