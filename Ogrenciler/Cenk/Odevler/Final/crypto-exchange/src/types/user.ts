export interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  gender: string;
  birthDate: string;
  features: {
    depositAssets: boolean;
    withdrawAssets: boolean;
    cardPurchases: boolean;
    bankDeposit: boolean;
    fiatWallet: boolean;
    marginWallet: boolean;
  };
}
