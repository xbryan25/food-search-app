import { Router } from 'express';
import { isSubscribedPolicy } from '../middlewares/policy';
import { UserController } from '../controllers/user.controller';

const router = Router();
const userController = new UserController();

router.get('/me', isSubscribedPolicy, userController.index);

export default router;
