import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";
import { AuthProvider } from "./context/AuthContext";
import Toaster from "./components/ui/Toaster";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/not-found";
import Home from "./pages/Home";
import WalletPage from "./pages/WalletPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import SellCryptoPage from "./pages/SellCryptoPages";
import Markets from "./pages/Markets";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/markets" component={Markets} />
      <Route path="/wallet" component={WalletPage} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/sell" component={SellCryptoPage} />
      <Route path="/:rest*" component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Layout>
          <Router />
        </Layout>
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
