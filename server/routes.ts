import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema, insertNewsletterSubscriptionSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.json({ 
        success: true, 
        message: "Contact submission received successfully",
        id: submission.id 
      });
    } catch (error) {
      console.error("Contact submission error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Invalid contact form data" 
      });
    }
  });

  // Newsletter subscription endpoint
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSubscriptionSchema.parse(req.body);
      
      // Check if email already exists
      const existingSubscription = await storage.getNewsletterSubscriptionByEmail(validatedData.email);
      if (existingSubscription) {
        return res.status(409).json({ 
          success: false, 
          message: "Email already subscribed" 
        });
      }

      const subscription = await storage.createNewsletterSubscription(validatedData);
      res.json({ 
        success: true, 
        message: "Successfully subscribed to newsletter",
        id: subscription.id 
      });
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Invalid email address" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
