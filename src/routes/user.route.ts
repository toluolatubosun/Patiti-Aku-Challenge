import { Router } from 'express';
import UserController from '../controllers/user.controller';

const router = Router()

router.post("/", UserController.create)

router.get("/:id", UserController.getOne)

router.put("/", UserController.update)

router.delete("/", UserController.delete)

export default router;