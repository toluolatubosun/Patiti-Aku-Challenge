import { Response, Request } from "express";
import response from "./../utils/response"
import UserService from "./../services/user.service"

class UserContoller {
    async create(req: Request, res: Response) {
        const result = await UserService.create(req.body);
        res.status(200).send(response("user created", result));
    }

    async getOne(req: Request, res: Response) {
        const result = await UserService.getOne(req.params.id);
        res.status(200).send(response("user data", result));
    }

    async update(req: Request, res: Response) {
        const result = await UserService.update(req.body);
        res.status(200).send(response("user updated", result));
    }

    async delete(req: Request, res: Response) {
        const result = await UserService.delete(req.body);
        res.status(200).send(response("user deleted", result));
    }
}

export default new UserContoller();
