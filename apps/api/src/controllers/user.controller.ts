import { Request, Response, NextFunction } from 'express';

import { prisma } from '../lib/prisma';

export class UserController {
  index = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await prisma.user.findUnique({
        where: { id: 'demo-user-1' },
        select: {
          id: true,
          email: true,
          isSubscribed: true,
        },
      });

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.json(user);
    } catch (error) {
      next(error);
    }
  };
}
