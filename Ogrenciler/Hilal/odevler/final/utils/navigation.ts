
import { useRouter } from "@/i18n/navigation";
import { ROUTE } from "../constants/index";

export const useNavigation = () => {
  const router = useRouter();

  return {
    goToHomePage: () => router.push(ROUTE.HOME_PAGE),
    goToBuyCripto: () => router.push(ROUTE.BUY_CRIPTO),
    goToMarkets: () => router.push(ROUTE.MARKETS),
    goToExchange: () => router.push(ROUTE.EXCHANGE),
    goToSpot: () => router.push(ROUTE.SPOT),
    goToBITUSDT: () => router.push(ROUTE.BITUSDT),
    goToPages: () => router.push(ROUTE.PAGES),
    goToAssets: () => router.push(ROUTE.ASSETS),
    goToOrdersTrades: () => router.push(ROUTE.ORDERS_TRADES),
    goToProfile: () => router.push(ROUTE.PROFILE),
  };
};
