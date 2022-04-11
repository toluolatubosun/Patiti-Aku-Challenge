import { Router } from 'express';
import EventController from '../controllers/event.controller';

const router = Router()

router.post("/", EventController.create)

router.get("/:userId", EventController.getAll)

export default router;