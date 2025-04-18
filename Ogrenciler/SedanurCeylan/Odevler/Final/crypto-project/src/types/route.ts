
export type RegisterValues = {
    email: string;
    password: string;
    confirmPassword: string;
    nickname: string;
};


export type LoginValues = {
    email: string;
    password: string;
};

export type UserData = {
    uid?: string;
    email: string;
    nickname?: string;
    country?: string;
};


export type PasswordChangeValues = {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
};


export type WalletCoin = {
    id: string;
    amount: number;
};


export type Coin = {
    id: number;
    name: string;
    symbol: string;
    slug: string;
    quote: {
        USD: {
            price: number;
            volume_24h: number;
            percent_change_24h: number;
            market_cap: number;
        };
    };
};

export type OwnedCoin = Coin & {
    amount: number;
    priceAtPurchase?: number;
};