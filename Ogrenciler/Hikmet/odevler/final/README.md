# Rockie - Cryptocurrency Trading Platform

![Rockie Platform Logo](/public/logo.svg)
https://turkcell-gygy-final.vercel.app


## Overview
Rockie is a comprehensive cryptocurrency trading platform built with modern web technologies. This project showcases a full-featured trading application with real-time market data, user authentication, personalized dashboards, and more.

## Features

- **Multi-language Support**: Internationalization with next-intl
- **Theme Switching**: Toggle between light and dark modes
- **User Authentication**: Secure login and registration via Supabase
- **Real-time Market Data**: Live cryptocurrency prices and market trends
- **Interactive Charts**: TradingView integration for detailed crypto analysis
- **Favorites System**: Save and track your preferred cryptocurrencies
- **Responsive Dashboard**: Complete trading interface with order book
- **Mobile-friendly Design**: Fully responsive across all device sizes

## Tech Stack

- **Frontend Framework**: [Next.js 15](https://nextjs.org/) with [React 19](https://react.dev/)
- **UI Components**: [React Bootstrap](https://react-bootstrap.github.io/)
- **Styling**: [SCSS/SASS](https://sass-lang.com/) with CSS Modules
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Backend/Authentication**: [Supabase](https://supabase.io/)
- **Charts**: [TradingView Widgets](https://www.tradingview.com/widget/)
- **Icons**: [Lucide React](https://lucide.dev/), [Bootstrap Icons](https://icons.getbootstrap.com/)
- **Form Validation**: [React Hook Form](https://react-hook-form.com/) with [Yup](https://github.com/jquense/yup)
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/)

## Project Structure

```
src/
├── app/                  # Next.js app router pages and layouts
│   ├── [locale]/         # Localization routes
│   │   ├── (main)/       # Landing pages
│   │   └── dashboard/    # Dashboard pages
├── components/           # React components organized by feature
│   ├── auth/             # Authentication components
│   ├── dashboard/        # Dashboard UI components
│   ├── landing-page/     # Homepage components
│   ├── market/           # Market data components
│   └── profile/          # User profile components
├── hooks/                # Custom React hooks
├── i18n/                 # Internationalization configuration
├── lib/                  # Shared utility functions and type definitions
├── store/                # Zustand state management
│   ├── favoritesStore.ts # Favorites state management
│   ├── sidebar-store.ts  # Sidebar state management
│   └── themeStore.ts     # Theme state management
├── utils/                # Utility functions
│   └── supabase/         # Supabase client setup
└── middleware.ts         # Next.js middleware configuration
```

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn
- Supabase account for backend services

### Environment Setup

Create a `.env.local` file in the root directory with the following variables:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/rockie-platform.git
   cd rockie-platform
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage Examples

### Theme Switching

The application uses Zustand for state management, including theme preferences:

```tsx
import { useThemeStore } from "@/store/themeStore";

export default function YourComponent() {
  const { theme, toggleTheme } = useThemeStore();
  
  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? <Moon /> : <Sun />}
    </button>
  );
}
```

### Authentication

User authentication is handled through Supabase:

```tsx
import { login } from "@/components/auth/actions";

// In your form submit handler
const handleSubmit = (data: LoginFormData) => {
  login(data);
};
```

### Favorites System

Managing favorite cryptocurrencies:

```tsx
import { useFavoriteStore } from "@/store/favoritesStore";
import { toggleFavoriteCoin } from "@/hooks/toggleFavorites";

export default function CoinRow({ coinId }) {
  const isFavorite = useFavoriteStore((state) => state.isFavorite(coinId));
  
  const handleFavoriteClick = async () => {
    await toggleFavoriteCoin(coinId);
  };
  
  return (
    <StarIcon
      fill={isFavorite ? "#ffc107" : "none"}
      onClick={handleFavoriteClick}
    />
  );
}
```

## Deployment

The application can be easily deployed on [Vercel](https://vercel.com/) or any other platform that supports Next.js:

```bash
npm run build
# or
yarn build
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Zustand](https://github.com/pmndrs/zustand)
- [Supabase](https://supabase.io/)
- [TradingView](https://www.tradingview.com/)
- [React Bootstrap](https://react-bootstrap.github.io/)
