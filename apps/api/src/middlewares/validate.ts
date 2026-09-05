// src/middlewares/validate.ts
import { Request, Response, NextFunction } from "express";
import { z } from "zod";

export type SearchQueryParams = z.infer<typeof searchSchema>;

export const validateSearch = 
  (schema: z.ZodType<any>) => 
    (req: Request, res: Response, next: NextFunction) => {
        const result = schema.safeParse(req.query);

        if (!result.success) {

        return res.status(422).json({
            status: "fail",
            errors: z.treeifyError(result.error),
        });
        }

        // Reassign to apply modifications in schema like trim() and default()
        // Modify req.query in place
        Object.keys(req.query).forEach((key) => delete (req.query as any)[key]);
        Object.assign(req.query, result.data);


        next();
    };

// Schema
export const searchSchema = z.object({
  query: z
    .string({ message: "Search query is required and must be text" })
    .trim()
    .min(2, "Search term must be at least 2 characters"),
  
  lang: z
    .enum(["en", "nl", "de", "fr"], {
      message: "Language must be one of: en, nl, de, fr",
    })
    .default("en"),
});