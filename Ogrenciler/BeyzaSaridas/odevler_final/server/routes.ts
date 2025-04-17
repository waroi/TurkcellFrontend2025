import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth } from "./auth";
import { z } from "zod";
import {
  insertTransactionSchema,
  insertMarketDataSchema,
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  setupAuth(app);

  app.get("/api/wallets", async (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).send("Unauthorized");
    }

    try {
      const wallets = await storage.getWallets(req.user.id);
      res.json(wallets);
    } catch (error) {
      console.error("Error fetching wallets:", error);
      res.status(500).send("Failed to fetch wallets");
    }
  });

  app.get("/api/wallets/:currency", async (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).send("Unauthorized");
    }

    try {
      const wallet = await storage.getWallet(req.user.id, req.params.currency);
      if (!wallet) {
        return res.status(404).send("Wallet not found");
      }
      res.json(wallet);
    } catch (error) {
      console.error("Error fetching wallet:", error);
      res.status(500).send("Failed to fetch wallet");
    }
  });

  app.get("/api/transactions", async (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).send("Unauthorized");
    }

    try {
      const transactions = await storage.getTransactions(req.user.id);
      res.json(transactions);
    } catch (error) {
      console.error("Error fetching transactions:", error);
      res.status(500).send("Failed to fetch transactions");
    }
  });

  app.post("/api/transactions", async (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).send("Unauthorized");
    }

    try {
      const transactionData = {
        ...req.body,
        userId: req.user.id,
      };

      const validatedData = insertTransactionSchema.parse(transactionData);

      if (validatedData.type === "buy") {
        const toWallet = await storage.getWallet(
          req.user.id,
          validatedData.toCurrency
        );
        if (toWallet) {
          const newBalance = (
            Number(toWallet.balance) + Number(validatedData.toAmount)
          ).toString();
          await storage.updateWalletBalance(
            req.user.id,
            validatedData.toCurrency,
            newBalance
          );
        }

        const fromWallet = await storage.getWallet(
          req.user.id,
          validatedData.fromCurrency
        );
        if (fromWallet) {
          const newBalance = (
            Number(fromWallet.balance) - Number(validatedData.fromAmount)
          ).toString();
          await storage.updateWalletBalance(
            req.user.id,
            validatedData.fromCurrency,
            newBalance
          );
        }
      } else if (validatedData.type === "sell") {
        const toWallet = await storage.getWallet(
          req.user.id,
          validatedData.toCurrency
        );
        if (toWallet) {
          const newBalance = (
            Number(toWallet.balance) + Number(validatedData.toAmount)
          ).toString();
          await storage.updateWalletBalance(
            req.user.id,
            validatedData.toCurrency,
            newBalance
          );
        }

        const fromWallet = await storage.getWallet(
          req.user.id,
          validatedData.fromCurrency
        );
        if (fromWallet) {
          const newBalance = (
            Number(fromWallet.balance) - Number(validatedData.fromAmount)
          ).toString();
          await storage.updateWalletBalance(
            req.user.id,
            validatedData.fromCurrency,
            newBalance
          );
        }
      }

      const transaction = await storage.createTransaction(validatedData);
      res.status(201).json(transaction);
    } catch (error) {
      console.error("Error creating transaction:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ errors: error.errors });
      }
      res.status(500).send("Failed to create transaction");
    }
  });

  app.get("/api/market", async (req, res) => {
    try {
      const marketData = await storage.getAllMarketData();
      res.json(marketData);
    } catch (error) {
      console.error("Error fetching market data:", error);
      res.status(500).send("Failed to fetch market data");
    }
  });

  app.get("/api/market/:symbol", async (req, res) => {
    try {
      const marketData = await storage.getMarketDataBySymbol(req.params.symbol);
      if (!marketData) {
        return res.status(404).send("Market data not found");
      }
      res.json(marketData);
    } catch (error) {
      console.error("Error fetching market data:", error);
      res.status(500).send("Failed to fetch market data");
    }
  });

  app.post("/api/market", async (req, res) => {
    try {
      const marketDataValidation = insertMarketDataSchema.safeParse(req.body);
      if (!marketDataValidation.success) {
        return res
          .status(400)
          .json({ errors: marketDataValidation.error.errors });
      }

      const marketData = marketDataValidation.data;
      const existingData = await storage.getMarketDataBySymbol(
        marketData.symbol
      );

      if (existingData) {
        const updatedData = await storage.updateMarketData(
          marketData.symbol,
          marketData
        );
        return res.json(updatedData);
      } else {
        const newData = await storage.createMarketData(marketData);
        return res.status(201).json(newData);
      }
    } catch (error) {
      console.error("Error updating market data:", error);
      res.status(500).send("Failed to update market data");
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
