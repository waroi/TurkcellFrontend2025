import { 
  users, type User, type InsertUser, 
  cryptoAssets, type CryptoAsset, type Wallet, 
  wallets, type Transaction, type InsertTransaction,
  transactions
} from "../shared/schema";



export interface IStorage {

  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  

  getCryptoAssets(): Promise<CryptoAsset[]>;
  getCryptoAssetBySymbol(symbol: string): Promise<CryptoAsset | undefined>;

  getUserWallet(userId: number): Promise<any[]>; // Returns user's wallet with crypto assets
  
 
  createTransaction(transaction: InsertTransaction): Promise<Transaction>;
  getUserTransactions(userId: number): Promise<Transaction[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private crypto_assets: Map<number, CryptoAsset>;
  private wallets: Map<number, Wallet[]>;
  private transactions: Map<number, Transaction[]>;
  currentId: number;
  currentAssetId: number;
  currentWalletId: number;
  currentTransactionId: number;

  constructor() {
    this.users = new Map();
    this.crypto_assets = new Map();
    this.wallets = new Map();
    this.transactions = new Map();
    this.currentId = 1;
    this.currentAssetId = 1;
    this.currentWalletId = 1;
    this.currentTransactionId = 1;

    this.initializeCryptoAssets();
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getCryptoAssets(): Promise<CryptoAsset[]> {
    return Array.from(this.crypto_assets.values());
  }
  
  async getCryptoAssetBySymbol(symbol: string): Promise<CryptoAsset | undefined> {
    return Array.from(this.crypto_assets.values()).find(
      (asset) => asset.symbol === symbol
    );
  }

  async getUserWallet(userId: number): Promise<any[]> {
    const userWallets = this.wallets.get(userId) || [];
    const result = [];
    
    for (const wallet of userWallets) {
      const asset = this.crypto_assets.get(wallet.assetId);
      if (asset) {
        result.push({
          id: wallet.id,
          symbol: asset.symbol,
          name: asset.name,
          current_price: Number(asset.current_price),
          price_change_24h: Number(asset.price_change_24h || 0),
          balance: Number(wallet.balance),
          onOrder: Number(wallet.onOrder),
          fiatValue: Number(wallet.balance) * Number(asset.current_price)
        });
      }
    }
    
    return result;
  }

  async createTransaction(transaction: InsertTransaction): Promise<Transaction> {
    const id = this.currentTransactionId++;
    const newTransaction: Transaction = { 
      ...transaction, 
      id,
      createdAt: new Date()
    };
    
    const userTransactions = this.transactions.get(transaction.userId) || [];
    userTransactions.push(newTransaction);
    this.transactions.set(transaction.userId, userTransactions);
    
    await this.updateWalletBalance(transaction);
    
    return newTransaction;
  }
  
  async getUserTransactions(userId: number): Promise<Transaction[]> {
    return this.transactions.get(userId) || [];
  }

  private async updateWalletBalance(transaction: InsertTransaction): Promise<void> {
    const userWallets = this.wallets.get(transaction.userId) || [];
    const walletIndex = userWallets.findIndex(wallet => wallet.assetId === transaction.assetId);
    
    if (walletIndex === -1) {

      const newWallet = {
        id: this.currentWalletId++,
        userId: transaction.userId,
        assetId: transaction.assetId,
        balance: transaction.type === 'buy' ? transaction.amount : 0,
        onOrder: 0,
        updatedAt: new Date()
      };
      userWallets.push(newWallet);
    } else {

      const wallet = userWallets[walletIndex];
      if (transaction.type === 'buy') {
        wallet.balance = Number(wallet.balance) + Number(transaction.amount);
      } else if (transaction.type === 'sell') {
        wallet.balance = Number(wallet.balance) - Number(transaction.amount);
        if (Number(wallet.balance) < 0) wallet.balance = 0; 
      }
      wallet.updatedAt = new Date();
    }
    
    this.wallets.set(transaction.userId, userWallets);
  }
  
  private initializeCryptoAssets(): void {
    const assets = [
      {
        id: this.currentAssetId++,
        symbol: "BTC",
        name: "Bitcoin",
        current_price: "38261.75",
        price_change_24h: "2.5",
        market_cap: "728000000000",
        image: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg",
        last_updated: new Date()
      },
      {
        id: this.currentAssetId++,
        symbol: "ETH",
        name: "Ethereum",
        current_price: "2174.32",
        price_change_24h: "1.2",
        market_cap: "260000000000",
        image: "https://cryptologos.cc/logos/ethereum-eth-logo.svg",
        last_updated: new Date()
      },
      {
        id: this.currentAssetId++,
        symbol: "BNB",
        name: "Binance Coin",
        current_price: "320.17",
        price_change_24h: "-0.8",
        market_cap: "49000000000",
        image: "https://cryptologos.cc/logos/bnb-bnb-logo.svg",
        last_updated: new Date()
      },
      {
        id: this.currentAssetId++,
        symbol: "USDT",
        name: "Tether",
        current_price: "1.00",
        price_change_24h: "0.01",
        market_cap: "88000000000",
        image: "https://cryptologos.cc/logos/tether-usdt-logo.svg",
        last_updated: new Date()
      },
      {
        id: this.currentAssetId++,
        symbol: "USDC",
        name: "USD Coin",
        current_price: "1.00",
        price_change_24h: "0.00",
        market_cap: "43000000000",
        image: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg",
        last_updated: new Date()
      }
    ];
    
    assets.forEach(asset => this.crypto_assets.set(asset.id, asset as CryptoAsset));

    const userWallets = [
      {
        id: this.currentWalletId++,
        userId: 1,
        assetId: 1, 
        balance: "0.27999982",
        onOrder: "0.05",
        updatedAt: new Date()
      },
      {
        id: this.currentWalletId++,
        userId: 1,
        assetId: 2, 
        balance: "5.5",
        onOrder: "1.2",
        updatedAt: new Date()
      },
      {
        id: this.currentWalletId++,
        userId: 1,
        assetId: 3, 
        balance: "12.4",
        onOrder: "3.1",
        updatedAt: new Date()
      }
    ];
    
    this.wallets.set(1, userWallets as Wallet[]);
  }
}

export const storage = new MemStorage();