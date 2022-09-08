import { Router } from 'express';
import IndexController from '../controllers/api/index.controller';

import authRoutes from './auth.route';
import spaceRoutes from './space.route';

const router = Router();

/** Set up your api routes here */

// Health check
router.get('/', IndexController.index);
router.get('/ping', IndexController.health);

// Auth routes
router.use('/auth', authRoutes);

router.use('/spaces', spaceRoutes);

export default router;
