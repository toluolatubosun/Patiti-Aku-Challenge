import { model, Schema, Document} from "mongoose";

const userSchema: Schema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        consents: [{
            id: {
                type: String,
                required: true,
                trim: true,  
                enum: ["email_notifications","sms_notifications"]
            },
            enabled: {
                type: Boolean,
                required: true
            }
        }],
    },
    {
        timestamps: true
    }
);

export default model("user", userSchema);
