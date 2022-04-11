import User from "../models/user.model"
import CustomError from "../utils/custom-error"

class UserService {
    async create(data) {
        if(!data) throw new CustomError("No data provided");
        if(!data.email) throw new CustomError("email is required");

        const user = await User.findOne({ email: data.email })
        if(user) throw new CustomError("User already exists");

        const result = await User.create(data);
        return result;
    }

    async getOne(id: string) {
        if(!id) throw new CustomError("Id is required");

        const result = await User.findById(id);
        if(!result) throw new CustomError("User not found");

        return result;
    }

    async update(data) {
        if(!data) throw new CustomError("No data provided");

        const result = await User.findByIdAndUpdate(data.id, { $set: data }, { new: true });
        if(!result) throw new CustomError("User not found");

        return result;
    }

    async delete(data) {
        if(!data) throw new CustomError("No data provided");

        const result = await User.findByIdAndDelete(data.id);
        if(!result) throw new CustomError("User not found");

        return result;
    }
}

export default new UserService();
