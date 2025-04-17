import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import HomePage from "./pages/home";
import AuthPage from "@/pages/auth-page";
import WalletPage from "@/pages/wallet";
import MarketPage from "@/pages/market";
import BuyCryptoPage from "@/pages/buy-crypto";
import SellCryptoPage from "@/pages/sell-crypto";
import { ProtectedRoute } from "./lib/protected-route";
import Layout from "@/components/layout/Layout";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { AuthProvider } from "@/context/AuthContext";
import { CryptoProvider } from "@/context/CryptoContext";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/auth" component={AuthPage} />
      <ProtectedRoute path="/wallet" component={WalletPage} />
      <Route path="/market" component={MarketPage} />
      <ProtectedRoute path="/buy-crypto" component={BuyCryptoPage} />
      <ProtectedRoute path="/sell-crypto" component={SellCryptoPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
            <CryptoProvider>
              <Layout>
                <Router />
              </Layout>
              <Toaster />
            </CryptoProvider>
          </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
