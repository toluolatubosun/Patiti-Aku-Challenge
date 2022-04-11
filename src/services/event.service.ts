import Event from "../models/event.model"
import CustomError from "../utils/custom-error"

class UserService {
    async create(data) {
        if(!data) throw new CustomError("No data provided");
        if(!data.user) throw new CustomError("user is required");

        const result = await Event.create(data);
        return result;
    }

    async getAll(id: string) {
        if(!id) throw new CustomError("Id is required");

        const result = await Event.find({ user: id });
        return result;
    }

}

export default new UserService();
