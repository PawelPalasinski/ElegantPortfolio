import type { Express, Request } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";
import { ZodError } from "zod";
import formidable from "formidable";
import path from "path";
import fs from "fs";
import mime from "mime-types";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertMessageSchema.parse(req.body);
      const message = await storage.createMessage(data);
      res.json({ success: true, message });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ error: error.errors });
      } else {
        res.status(500).json({ error: "Failed to send message" });
      }
    }
  });

  // Endpoint do wysyłania zdjęć
  app.post("/api/images/upload", async (req, res) => {
    try {
      const form = formidable({ 
        multiples: true,
        maxFileSize: 10 * 1024 * 1024, // 10MB
      });

      form.parse(req, async (err, _fields, files) => {
        if (err) {
          return res.status(400).json({ error: "Error parsing form data" });
        }

        const uploadedFiles = files.files as formidable.File[];
        const fileArray = Array.isArray(uploadedFiles) ? uploadedFiles : [uploadedFiles];
        
        const results = [];
        
        for (const file of fileArray) {
          if (!file) continue;
          
          const originalFilename = file.originalFilename || "unnamed-file";
          const uniqueFilename = `${Date.now()}-${originalFilename}`;
          
          const fileBuffer = fs.readFileSync(file.filepath);
          const mimetype = file.mimetype || mime.lookup(originalFilename) || "application/octet-stream";
          
          const filename = await storage.uploadImage(uniqueFilename, fileBuffer, mimetype);
          results.push({ filename, originalName: originalFilename });
        }
        
        res.json({ success: true, files: results });
      });
    } catch (error) {
      console.error("Upload error:", error);
      res.status(500).json({ error: "Failed to upload image" });
    }
  });

  // Endpoint do pobierania zdjęć
  app.get("/api/images/:filename", async (req, res) => {
    try {
      const filename = req.params.filename;
      const imageBuffer = await storage.getImage(filename);
      
      if (!imageBuffer) {
        return res.status(404).json({ error: "Image not found" });
      }
      
      const mimetype = mime.lookup(filename) || "application/octet-stream";
      res.setHeader("Content-Type", mimetype);
      res.send(imageBuffer);
    } catch (error) {
      console.error("Get image error:", error);
      res.status(500).json({ error: "Failed to get image" });
    }
  });

  // Endpoint do listowania wszystkich zdjęć
  app.get("/api/images", async (_req, res) => {
    try {
      const images = await storage.listImages();
      res.json({ success: true, images });
    } catch (error) {
      console.error("List images error:", error);
      res.status(500).json({ error: "Failed to list images" });
    }
  });

  return createServer(app);
}
