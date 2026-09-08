import { Request, Response, NextFunction } from 'express';

export const isSubscribedPolicy = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Assuming req.user is set by an auth middleware
  const isSubscribed = true; // e.g. check user subscription status
  if (!isSubscribed) {
    return res
      .status(403)
      .json({ error: '403 Forbidden: Active subscription required' });
  }
  next();
};
