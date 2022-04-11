import { model, Schema, Document} from "mongoose";

const eventSchema: Schema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'user'
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

export default model("event", eventSchema);
