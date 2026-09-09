import dotenv from 'dotenv';
import path from 'path';

const envPath = path.resolve(__dirname, '../.env');
dotenv.config({ path: envPath });

import express, { Request, Response, NextFunction } from 'express';
import searchRoutes from './routes/search.route';
import subscriptionRoutes from './routes/subscribe.route';
import userRoutes from './routes/user.route';
import cors from 'cors';
import Stripe from 'stripe';

import { prisma } from './lib/prisma';

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-08-26.dahlia',
});

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.post(
  '/api/webhook',
  express.raw({ type: 'application/json' }),
  async (req, res) => {
    const sig = req.headers['stripe-signature'];
    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig!,
        process.env.STRIPE_WEBHOOK_SECRET!
      );
    } catch (err: any) {
      console.error(`Webhook signature failed: ${err.message}`);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;
      const userId = session.metadata?.userId || 'demo-user-1';

      await prisma.user.update({
        where: { id: userId },
        data: { isSubscribed: true },
      });

      console.log(`User ${userId} successfully subscribed!`);
    }

    res.json({ received: true });
  }
);

app.use(express.json());

// Register API routes with prefix
app.use('/api/search', searchRoutes);
app.use('/api/subscribe', subscriptionRoutes);
app.use('/api/user', userRoutes);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error('Uncaught Express Error:', err);

  const statusCode = err.statusCode || err.status || 500;
  res.status(statusCode).json({
    status: 'error',
    message: err.message || 'Internal Server Error',
    ...(process.env.NODE_ENV !== 'production' && { stack: err.stack }),
  });
});

app.listen(process.env.PORT! || 4000, () =>
  console.log(`Server running on port ${process.env.PORT! || 4000}`)
);
