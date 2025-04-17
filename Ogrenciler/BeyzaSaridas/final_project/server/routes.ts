import type {Express,Request, Response} from "express";
import { createServer, type Server } from "http";
import { storage } from ".storage";
import { insertTransactionSchema } from "../shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {

  app.get("/api/crypto-assets", async (req, res) => {
    try {
      const assets = await storage.getCryptoAssets();
      res.json(assets);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch crypto assets" });
    }
  });

  app.get("/api/crypto-assets/:symbol", async (req: Request, res: Response) => {
    try {
      const { symbol } = req.params;
      const asset = await storage.getCryptoAssetBySymbol(symbol);

      if (!asset) {
        return res.status(404).json({ message: "Crypto asset not found" });
      }

      res.json(asset);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch crypto asset" });
    }
  });

  app.get("/api/wallet/:userId", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const wallet = await storage.getUserWallet(userId);
      res.json(wallet);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch wallet" });
    }
  });

  app.post("/api/transactions", async (req, res) => {
    try {
      const transactionData = insertTransactionSchema.parse(req.body);
      const transaction = await storage.createTransaction(transactionData);
      res.status(201).json(transaction);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid transaction data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create transaction" });
    }
  });

  app.get("/api/transactions/:userId", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const transactions = await storage.getUserTransactions(userId);
      res.json(transactions);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch transactions" });
    }
  });


  const httpServer = createServer(app);
  return httpServer;
}