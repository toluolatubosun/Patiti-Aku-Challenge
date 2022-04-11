import { Response, Request } from "express";
import response from "./../utils/response"
import EventService from "./../services/event.service"

class EventController {
    async create(req: Request, res: Response) {
        const result = await EventService.create(req.body);
        res.status(200).send(response("event created", result));
    }

    async getAll(req: Request, res: Response) {
        const result = await EventService.getAll(req.params.userId);
        res.status(200).send(response("user events", result));
    }
}

export default new EventController();
