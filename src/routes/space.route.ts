import { Router } from 'express';
import { ValidateSchema, Schemas } from '../middleware/ValidateSchema';
import spaceController from '../controllers/api/space.controller';

const router = Router();

/** Set up your api routes here */

// Post routes
router.get('/', spaceController.index);

export default router;
