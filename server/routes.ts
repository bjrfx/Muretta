import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { ZodError } from "zod";

// Import the contact request schema from shared schema
import { insertContactRequestSchema } from "@shared/schema";

// Contact form schema with validation
const contactFormSchema = insertContactRequestSchema
  .extend({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  });

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = contactFormSchema.parse(req.body);
      
      // Store contact form data
      const contactRequest = await storage.createContactRequest(validatedData);
      
      // Return success response
      res.status(200).json({
        message: "Contact request received successfully",
        requestId: contactRequest.id
      });
    } catch (error) {
      if (error instanceof ZodError) {
        // Handle validation errors
        res.status(400).json({
          message: "Validation error",
          errors: error.errors
        });
      } else {
        // Handle other errors
        console.error("Error processing contact form:", error);
        res.status(500).json({
          message: "Failed to process contact request"
        });
      }
    }
  });

  // Create HTTP server
  const httpServer = createServer(app);

  return httpServer;
}
