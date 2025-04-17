import {
  users,
  User,
  InsertUser,
  wallets,
  Wallet,
  InsertWallet,
  transactions,
  Transaction,
  InsertTransaction,
  marketData,
  MarketData,
  InsertMarketData,
} from "@shared/schema";
import { nanoid } from "nanoid";
import createMemoryStore from "memorystore";
import session from "express-session";

const MemoryStore = createMemoryStore(session);

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  getWallets(userId: number): Promise<Wallet[]>;
  getWallet(userId: number, currency: string): Promise<Wallet | undefined>;
  createWallet(wallet: InsertWallet): Promise<Wallet>;
  updateWalletBalance(
    userId: number,
    currency: string,
    amount: string
  ): Promise<Wallet>;

  getTransactions(userId: number): Promise<Transaction[]>;
  createTransaction(transaction: InsertTransaction): Promise<Transaction>;

  getAllMarketData(): Promise<MarketData[]>;
  getMarketDataBySymbol(symbol: string): Promise<MarketData | undefined>;
  createMarketData(data: InsertMarketData): Promise<MarketData>;
  updateMarketData(
    symbol: string,
    data: Partial<InsertMarketData>
  ): Promise<MarketData>;

  sessionStore: session.SessionStore;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private wallets: Map<string, Wallet>;
  private transactions: Map<number, Transaction>;
  private marketData: Map<string, MarketData>;
  private userIdCounter: number;
  private walletIdCounter: number;
  private transactionIdCounter: number;
  private marketDataIdCounter: number;
  sessionStore: session.SessionStore;

  constructor() {
    this.users = new Map();
    this.wallets = new Map();
    this.transactions = new Map();
    this.marketData = new Map();
    this.userIdCounter = 1;
    this.walletIdCounter = 1;
    this.transactionIdCounter = 1;
    this.marketDataIdCounter = 1;

    this.sessionStore = new MemoryStore({
      checkPeriod: 86400000,
    });

    this.initializeMarketData();
  }

  private initializeMarketData() {
    const initialCoins = [
      {
        symbol: "BTC",
        name: "Bitcoin",
        price: "60000.00000000",
        change24h: "2.5",
        volume24h: "25000000000",
        marketCap: "1100000000000",
      },
      {
        symbol: "ETH",
        name: "Ethereum",
        price: "3000.00000000",
        change24h: "1.8",
        volume24h: "15000000000",
        marketCap: "350000000000",
      },
      {
        symbol: "BNB",
        name: "Binance Coin",
        price: "450.00000000",
        change24h: "0.5",
        volume24h: "2000000000",
        marketCap: "75000000000",
      },
      {
        symbol: "SOL",
        name: "Solana",
        price: "120.00000000",
        change24h: "3.2",
        volume24h: "5000000000",
        marketCap: "42000000000",
      },
      {
        symbol: "USDT",
        name: "Tether",
        price: "1.00000000",
        change24h: "0.01",
        volume24h: "65000000000",
        marketCap: "80000000000",
      },
      {
        symbol: "USDC",
        name: "USD Coin",
        price: "1.00000000",
        change24h: "0.02",
        volume24h: "3000000000",
        marketCap: "47000000000",
      },
      {
        symbol: "XRP",
        name: "Ripple",
        price: "0.50000000",
        change24h: "-1.3",
        volume24h: "1500000000",
        marketCap: "24000000000",
      },
      {
        symbol: "ADA",
        name: "Cardano",
        price: "0.45000000",
        change24h: "0.8",
        volume24h: "600000000",
        marketCap: "16000000000",
      },
      {
        symbol: "DOGE",
        name: "Dogecoin",
        price: "0.08000000",
        change24h: "-0.7",
        volume24h: "400000000",
        marketCap: "11000000000",
      },
      {
        symbol: "DOT",
        name: "Polkadot",
        price: "5.50000000",
        change24h: "1.2",
        volume24h: "350000000",
        marketCap: "6500000000",
      },
    ];

    initialCoins.forEach((coin) => {
      const id = this.marketDataIdCounter++;
      const marketDataItem: MarketData = {
        id,
        symbol: coin.symbol,
        name: coin.name,
        price: coin.price as any,
        change24h: coin.change24h as any,
        volume24h: coin.volume24h as any,
        marketCap: coin.marketCap as any,
        updatedAt: new Date(),
      };
      this.marketData.set(coin.symbol, marketDataItem);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username.toLowerCase() === username.toLowerCase()
    );
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const user: User = {
      ...insertUser,
      id,
      createdAt: new Date(),
    };
    this.users.set(id, user);

    const defaultCurrencies = ["BTC", "ETH", "USDT", "USDC", "BNB"];
    for (const currency of defaultCurrencies) {
      await this.createWallet({
        userId: id,
        currency,
        balance: currency === "USDT" ? "1000" : "0",
      });
    }

    return user;
  }

  async getWallets(userId: number): Promise<Wallet[]> {
    return Array.from(this.wallets.values()).filter(
      (wallet) => wallet.userId === userId
    );
  }

  async getWallet(
    userId: number,
    currency: string
  ): Promise<Wallet | undefined> {
    return Array.from(this.wallets.values()).find(
      (wallet) => wallet.userId === userId && wallet.currency === currency
    );
  }

  async createWallet(insertWallet: InsertWallet): Promise<Wallet> {
    const id = this.walletIdCounter++;
    const wallet: Wallet = {
      ...insertWallet,
      id,
      updatedAt: new Date(),
    };
    const walletKey = `${wallet.userId}-${wallet.currency}`;
    this.wallets.set(walletKey, wallet);
    return wallet;
  }

  async updateWalletBalance(
    userId: number,
    currency: string,
    amount: string
  ): Promise<Wallet> {
    const wallet = await this.getWallet(userId, currency);
    if (!wallet) {
      throw new Error(
        `Wallet for user ${userId} and currency ${currency} not found`
      );
    }

    const updatedWallet: Wallet = {
      ...wallet,
      balance: amount as any,
      updatedAt: new Date(),
    };

    const walletKey = `${userId}-${currency}`;
    this.wallets.set(walletKey, updatedWallet);
    return updatedWallet;
  }

  async getTransactions(userId: number): Promise<Transaction[]> {
    return Array.from(this.transactions.values())
      .filter((transaction) => transaction.userId === userId)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async createTransaction(
    insertTransaction: InsertTransaction
  ): Promise<Transaction> {
    const id = this.transactionIdCounter++;
    const transaction: Transaction = {
      ...insertTransaction,
      id,
      transactionId: `${insertTransaction.type.charAt(0).toUpperCase()}${nanoid(
        10
      )}`,
      createdAt: new Date(),
    };
    this.transactions.set(id, transaction);
    return transaction;
  }

  async getAllMarketData(): Promise<MarketData[]> {
    return Array.from(this.marketData.values());
  }

  async getMarketDataBySymbol(symbol: string): Promise<MarketData | undefined> {
    return this.marketData.get(symbol);
  }

  async createMarketData(
    insertMarketData: InsertMarketData
  ): Promise<MarketData> {
    const id = this.marketDataIdCounter++;
    const data: MarketData = {
      ...insertMarketData,
      id,
      updatedAt: new Date(),
    };
    this.marketData.set(data.symbol, data);
    return data;
  }

  async updateMarketData(
    symbol: string,
    updateData: Partial<InsertMarketData>
  ): Promise<MarketData> {
    const existingData = await this.getMarketDataBySymbol(symbol);
    if (!existingData) {
      throw new Error(`Market data for symbol ${symbol} not found`);
    }

    const updatedData: MarketData = {
      ...existingData,
      ...updateData,
      updatedAt: new Date(),
    };

    this.marketData.set(symbol, updatedData);
    return updatedData;
  }
}

export const storage = new MemStorage();
