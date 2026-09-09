export interface User {
  id: string;
  email: string;
  isSubscribed: boolean;
  stripeCustomerId?: string | null;
}
