import { Router } from 'express';
import userRoutes from './user.route';
import eventRoutes from './event.route';

const router = Router()

router.use("/users", userRoutes);

router.use("/events", eventRoutes);

router.get("/", (req, res) => {
    return res.status(200).json({ message: "Welcome to PATITI" });
});

export default router;
